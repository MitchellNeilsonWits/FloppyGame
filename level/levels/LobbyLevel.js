import * as THREE from 'three';
import Level from "../Level";
import ProximityScreenRenderer from '../../engine/proxRender';

import physic from '../../engine/physic';
import World from '../../engine/world';
// import loader from "../engine/loader";
import loadAssets from '../../engine/loader';
import light from '../../lighting/point_lights';
import directional_light from '../../lighting/directional_lights';
import DynamicObject from '../../engine/dynamicObject';
import InteractableBox from './InteractableBox';
import Disk from '../../disks/Disk';
import InteractableDisk from '../../disks/InteractableDisk';

class LobbyLevel extends Level {

    constructor(scene) {
        super();
        this._scene = scene;
        
    }
    
    _create_interactable_objects() {
        // console.log()
       
        this._interactable_objects['dynamic_cube_interactable']['interactable_object'] = new InteractableBox('Press E to pick up box', this._interactable_objects['dynamic_cube_interactable'].object, 2.5);
    }

    async _create_disks() {
        const sample_disk = new Disk();
        await sample_disk.set_disk('', physic);
        this._disks = {
            sample_disk: sample_disk
        };
        this._level.add(sample_disk);
        this._dynamic_objects.push(sample_disk);

        this._interactable_objects['sample_disk'] = {
            object: sample_disk,
            type: 'dynamic'
        }
        this._interactable_objects['sample_disk']['interactable_object'] = new InteractableDisk("Press E to pickup sample disk", this._interactable_objects['sample_disk'].object, 1.5);

        // this._dynamic_objects.push(sample_disk);
    }

    // Function to set the components for the scene
    async _set_components(character_controller, scene) {
        // Load the meshes for the lobby
        const meshes = await loadAssets('assets/lobby_interactive.glb');

        // Create the physics for the world
        this._world = new World(meshes.visuals, meshes.colliders, meshes.visuals_dynamic, meshes.colliders_dynamic, physic);

        // CREATE THE PROXIMITY RENDERER
        // -- finds position of character to load screen
        this._prox = new ProximityScreenRenderer(character_controller, scene );

        this._level = new THREE.Group();
        this._interactable_objects = {};
        // Set rigid body meshes
        for (const mesh of meshes.visuals) {
            this._level.add(mesh);

            // Put in interactable objects if needed
            if (meshes.interactable[mesh.name]) {
                this._interactable_objects[mesh.name] = {
                    object: mesh.name,
                    type: "static"
                }
            }
        }
        // Set dynamic body meshes
        this._dynamic_objects = [];
        for (const mesh of meshes.colliders_dynamic) {
            const object = new DynamicObject(mesh, physic);
            this._dynamic_objects.push(object);
            this._level.add(object);

            // Put in interactable objects if needed
            if (meshes.interactable[mesh.name]) {
                this._interactable_objects[mesh.name] = {
                    object: object,
                    type: "dynamic"
                }
            }
        }

        // Set lighting
        this._lights = []
        for (const light of meshes.pointLights) {
            const pos = light.position;
            const colour = light.color;
            const intensity = light.intensity/1000; // adjust lighting for three js
            const distance = light.distance;

            const point_light = new THREE.PointLight( colour, intensity, distance );
            point_light.position.set( pos.x, pos.y, pos.z );

            this._lights.push(point_light);
        }

        this._create_interactable_objects()
        await this._create_disks();
    }
    
    async set_level(character_controller) {
        await this._set_components(character_controller, this._scene);
    }

    get_dynamic_objects() {
        return this._dynamic_objects;
    }

    get_interactable_objects() {
        return this._interactable_objects;
    }

    get_level() {
        return this._level;
    }

    render_level() {
        // Render the level's components
        this._scene.add(this._level);

        // Render the lights for the level
        for (const light of this._lights) {
            this._scene.add(light);
        }

        // for (const key of Object.keys(this._disks)) {
        //     console.log(`Adding ${key}`)
        //     this._scene.add(this._disks[key]);
        // }
    }

    update(time_elapsed_in_seconds) {
        // Update proximity of player to screen
        if (this._prox) {
            this._prox.update();
        }

        // Update the dynamic objects
        for (const object of this._dynamic_objects) {
            object.update(time_elapsed_in_seconds);
        }

        // for (const key in ) {

        // }
    }
}

export default LobbyLevel