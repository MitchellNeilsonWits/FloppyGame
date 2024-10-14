import * as THREE from 'three';
import DynamicObject from '../engine/dynamicObject';
import physic from '../engine/physic';
import Pushbox from '../pushbox/Pushbox';
import InteractablePushbox from '../pushbox/InteractablePushbox';
import Disk from '../disks/Disk';
import InteractableDisk from '../disks/InteractableDisk';
import World from '../engine/world';
import { get_cartesian_angle_from_rotation } from '../common/Angle';
import { Quaternion } from 'cannon';
import Lever from '../lever/Lever';
import InteractableLever from '../lever/InteractableLever';
import Gate from '../gate/Gate';


class Level {
    constructor() {

    }

    async base_load(level, meshes, character_controller, camera, scene) {
        // Create the physics for the world
        level._world = new World(meshes.visuals, meshes.colliders, meshes.visuals_dynamic, meshes.colliders_dynamic, physic);
        
        // Add the static ground colliders from the world as objects to jump off of
        level._ground_colliders = [];
        level._world.get_ground_colliders().forEach(obj => {this._ground_colliders.push(obj)});

        // Initialize the level
        level._level = new THREE.Group();
        level._level.name = "level";

        // Initialize the list of interactable objects
        level._interactable_objects = {};
        
        // Set rigid body meshes
        level.create_static_objects(level, meshes.colliders);

        // Set dynamic body meshes
        level.create_dynamic_objects(level, meshes.colliders_dynamic);

        // Create lights
        level.create_lights(level, meshes.pointLights, meshes.spotLights, meshes.directionalLights);

        // Create pushboxes
        await level._create_pushboxes(level, meshes.pushboxes);
        
        // Create disks
        await level._create_disks(level, meshes.strength_disk_spawn.position, meshes.flight_disk_spawn.position, meshes.shrink_disk_spawn.position);

        // Create levers and gates
        await level._create_lever_gates(level, meshes.lever_gates);

        // Create other interactable objects
        this._create_interactable_objects(level);

        // Set the player start position
        const player_start_pos = meshes.player_spawn.position;
        const player_start_rotation = meshes.player_spawn.rotation;
        const player_start_quaternion = meshes.player_spawn.quaternion;

        character_controller._target.rigidBody.setTranslation({x: player_start_pos.x,y: player_start_pos.y,z: player_start_pos.z}, true);
        character_controller._target.position.x = player_start_pos.x;
        character_controller._target.position.y = player_start_pos.y;
        character_controller._target.position.z = player_start_pos.z;
        character_controller._target.quaternion.rotateTowards(player_start_quaternion, 1);

        console.log("PLAYER ROT",player_start_rotation);
        camera.set_rotation((Math.PI  + get_cartesian_angle_from_rotation(player_start_rotation)));
        // character_controller.
    
        level.level_start_state = {
            player_position: new THREE.Vector3(0,0,0).copy(meshes.player_spawn.position),
            player_quaternion: new Quaternion(0,0,0,1).copy(meshes.player_spawn.quaternion),
            player_rotation: new THREE.Euler(0,0,0).copy(meshes.player_spawn.rotation),
            disk_positions: {
                'strength_disk': new THREE.Vector3(0,0,0).copy(meshes.strength_disk_spawn.position),
                'flight_disk': new THREE.Vector3(0,0,0).copy(meshes.flight_disk_spawn.position),
                'shrink_disk': new THREE.Vector3(0,0,0).copy(meshes.shrink_disk_spawn.position)
            }
        }
    }

    async _create_pushboxes(level, pushboxes) {
        level._pushboxes = [];
        let pushbox_num = 0;
        for (const pushbox of pushboxes) {
            level._pushboxes.push({
                id: pushbox_num,
                object: pushbox
            })
            pushbox_num++;
        }

        for (const pushbox of level._pushboxes) {
            
            const new_pushbox = new Pushbox(pushbox.object.position, pushbox.object.rotation);
            pushbox.pushbox_object = new_pushbox;

            await pushbox.pushbox_object.set_pushbox();
            level._level.add(new_pushbox);
            level._dynamic_objects.push(new_pushbox);

            level._interactable_objects[`pushbox_${pushbox.id}`] = {
                name: `pushbox_${pushbox.id}`,
                object: new_pushbox,
                type: 'dynamic'
            };
            level._interactable_objects[`pushbox_${pushbox.id}`]['interactable_object'] = new InteractablePushbox("Walk into the cube to push", pushbox.object, 2, "push")
        
            // Want to be able to jump off of pushboxes
            level._ground_colliders.push(new_pushbox.collider);
        }
    }
    

    async _create_lever_gates(level, lever_gates) {
        level._lever_gates = {};

        console.log(lever_gates);

        for (const key of Object.keys(lever_gates)) {
            const lever_gate_name = lever_gates[key].name;

            // CREATE THE LEVER
            const l_object = lever_gates[key].lever;
            console.log(lever_gates[key]);
            const lever_object = new Lever(l_object.position, l_object.rotation);
            await lever_object.set_lever();
            const lever_interactable = new InteractableLever("Right click to pull lever",lever_object,1.5,"right_click");
            
            
            level._level.add(lever_object);
            
            level._interactable_objects[`lever_gate_${lever_gate_name}`] = {
                name: lever_gate_name,
                object: lever_object,
                type: 'static',
                interactable_object: lever_interactable
            }

            // CREATE THE GATE
            const g_object = lever_gates[key].gate;
            const gate_object = new Gate(g_object.position, g_object.rotation, g_object.scale);
            await gate_object.set_gate();
            
            level._level.add(gate_object);

            level._lever_gates[lever_gate_name] = {
                name: lever_gate_name,
                lever_object: lever_object,
                lever_interactable: lever_interactable,
                gate_object: gate_object
            }
        }
    }

    _create_interactable_objects(level) {
        // this._interactable_objects['dynamic_cube_interactable']['interactable_object'] = new InteractableBox('Press E to pick up box', this._interactable_objects['dynamic_cube_interactable'].object, 2.5, "push");
    }

    async _create_disks(level, strength_disk_spawn, flight_disk_spawn, shrink_disk_spawn) {

        const disk_types = ['strength', 'flight', 'shrink'];
        const disk_locations = {
            'strength': strength_disk_spawn,
            'flight': flight_disk_spawn,
            'shrink': shrink_disk_spawn
        };

        level._disks = {};

        for (const disk_type of disk_types) {
            const disk = new Disk();
            await disk.set_disk(disk_type, physic, disk_locations[`${disk_type}`]);
            level._disks[`${disk_type}_disk`] = disk;

            level._level.add(disk);
            level._dynamic_objects.push(disk);

            level._interactable_objects[`${disk_type}_disk`] = {
                object: disk,
                type: 'dynamic',
                name: `${disk_type}_disk`,
                power: `${disk_type}`
            }
            level._interactable_objects[`${disk_type}_disk`]['interactable_object'] = new InteractableDisk(`Press E to pickup ${disk_type} disk`, this._interactable_objects[`${disk_type}_disk`].object);

        }

        
    }

    create_lights(level, point_lights, spot_lights, directionalLights) {
        level._lights = []
        for (const light of point_lights) {
            const pos = light.position;
            const colour = light.color;
            const intensity = light.intensity/1000; // adjust lighting for three js
            const distance = light.distance;

            const point_light = new THREE.PointLight( colour, intensity, distance );
            point_light.position.set( pos.x, pos.y, pos.z );

            level._lights.push(point_light);
        }
        // (B) Spot Lights
        for (const light of spot_lights) {
            const pos = light.position;
            const colour = light.color;
            const intensity = light.intensity/1000; // adjust lighting for three js
            const distance = light.distance;
            const rotation = light.rotation;
            const angle = light.angle; 
            const spotlight = new THREE.SpotLight(colour, intensity, distance, angle);
            spotlight.position.set( pos.x, pos.y, pos.z );
            spotlight.setRotationFromEuler(rotation);

            level._lights.push(spotlight);
        }

        for (const light of directionalLights) {
            
            const pos = light.position;
            const colour = light.color;
            const intensity = light.intensity/1000; // adjust lighting for three js
            const rotation = light.rotation;
            const spotlight = new THREE.DirectionalLight(colour, intensity);
            spotlight.position.set( pos.x, pos.y, pos.z );
            spotlight.setRotationFromEuler(rotation);

            level._lights.push(spotlight);
        }
    }

    create_static_objects(level, objects) {
        for (const mesh of objects) {
            level._level.add(mesh);
        }
    }

    create_dynamic_objects(level, objects) {
        level._dynamic_objects = [];
        for (const mesh of objects) {
            const object = new DynamicObject(mesh, physic);
            level._dynamic_objects.push(object);
            level._level.add(object);
        }
    }

    render_main_level_components(level) {
        // Render the level's components
        level._scene.add(level._level);

        // Render the lights for the level
        for (const light of level._lights) {
            level._scene.add(light);
        }
    }

    main_update(level, time_elapsed_in_seconds) {
        // Update the dynamic objects
        for (const object of level._dynamic_objects) {
            object.update(time_elapsed_in_seconds);
        }

        // Update gates and levers
        for (const key of Object.keys(level._lever_gates)) {
            level._lever_gates[key].lever_object.update();
            level._lever_gates[key].gate_object.update(time_elapsed_in_seconds);
        }
    }

    set_level() {}
    get_level() {}
}

export default Level