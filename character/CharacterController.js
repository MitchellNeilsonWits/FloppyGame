/**
 * File: CharacterController.js
 * 
 * Description:
 *  Main controller to bind scene, renderer, camera and other controllers
 */

import * as THREE from 'three';
import CharacterControllerInput from "./CharacterControllerInput"
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import CharacterFSM from './CharacterFSM';
import BasicCharacterControllerProxy from './CharacterControllerProxy';
import Player from '../engine/player';
import CharacterInteractionController from './CharacterInteractionController';
import CharacterHeightController from './CharacterHeightController';
import CharacterPowerController from './CharacterPowerController';
import CharacterSkinController from './CharacterSkinController';

class CharacterController {
    constructor(params) {
        this._init(params);
    }

    /* Initialization function */
    _init(params) {
        
        // SET IMPORTANT VARIABLES
        this.character_is_loaded = false;
        this._currently_reading_npc = false;
        this._halt_movement = false;
        this._params = params;
        this._decceleration = new THREE.Vector3(-0.5, 0, -0.5);
        this._acceleration = new THREE.Vector3(1.0, 0, 1.0);
        this._velocity = new THREE.Vector3(0, 0, 0);
        this._character_is_turning = "not_turning"; // note when the character is turning
        this.height_state = "on ground";
        this._holding_disk = null;
        this.busy_loading_disk = false;
        this._level = null;

        // INITIALIZE ANIMATIONS
        this._animations = {};
        this._input = new CharacterControllerInput(); // handling input for character
        
        // FINITE STATE MACHINE FOR STATE OF CHARACTER: assists in shifting between animations
        this._state_machine = new CharacterFSM(
            new BasicCharacterControllerProxy(this._animations) // proxy for character controlling
        );

        // Variable to halt the characters movement if needed
        this._halt_character = {
            status: false,
            status_verified: false,
            time_to_completion: 0
        };

    }

    // Function to initialize the player setup with async
    async initialize_player(_callback) {
        // LOAD MODELS
        await this._load_models(_callback);
    }

    /* load character models and create states */
    async _load_models(_callback) {
        // LOAD INITIAL CHARACTER MODEL
        const gltfLoader = new GLTFLoader();
        gltfLoader.setPath('models/')

        // Load our character file
        await gltfLoader.loadAsync('floppy_with_reader_remastered_optimized.glb').then(async (gltf) => {  
            // Set the character scale
            gltf.scene.children[0].scale.set(0.5, 0.5, 0.5);
            
            const src = "skins/power_baseColor.jpg";
            
            this._disks = {
                disk_0: gltf.scene.children[0].children[0].children[2],
                disk_1: gltf.scene.children[0].children[0].children[1],
            }
        
            // Setup the player physics
            this._target = new Player(gltf.scene.children[0], this._params.physic);
            this._target.set_player(gltf.scene.children[0]);

            // Create skin controller to change textures on-the-fly
            this.skin_controller = new CharacterSkinController(this._target);  

            // Create interaction controller to handle interactions with objects
            this._interaction_controller = new CharacterInteractionController(this, this._input);

            // Create height controller to handle changes in height of character
            this.height_controller = new CharacterHeightController(this);

            // Create disk controller to handle which disk is loaded
            this.power_controller = new CharacterPowerController(this);

            // console.log(this._player)
            // this._params.scene.add(this._player);
            this._params.scene.add(this._target);

            // MIXER INFORMATION FOR ANIMATIONS
            this._mixer = new THREE.AnimationMixer(this._target);

            // LOADING MANAGER TO MEDIATE LOADING OTHER ANIMATIONS
            this._manager = new THREE.LoadingManager();
            this._manager.onLoad = () => {
                this._state_machine.set_state('idle');
            }

            // LOADING FUNCTION TO CREATE CLIP AND ACTION IMPORTANT FOR RENDERING
            const _on_load = (animation_name, animation) => {
                const clip = animation.animations[0];
                const action = this._mixer.clipAction(clip);

                this._animations[animation_name] = {
                    clip: clip,
                    action: action
                }
            }

            // LOADER WITH MANAGER AS MEDIATOR
            const loader = new GLTFLoader(this._manager);
            loader.setPath('models/');
            await loader.loadAsync('floppy_with_reader_idle.glb').then((a) => {_on_load('idle', a);}); // idle animation
            await loader.loadAsync('floppy_with_reader_animated_v4.glb').then((a) => {_on_load('walk_not_turning', a);}); // walk animation
            await loader.loadAsync('floppy_with_reader_turning_left.glb').then((a) => {_on_load('walk_turning_left', a);}); // turn left animation
            await loader.loadAsync('floppy_with_reader_turning_right.glb').then((a) => {_on_load('walk_turning_right', a);}); // turn right animation
            await loader.loadAsync('floppy_with_reader_running_v2.glb').then((a) => {_on_load('run_not_turning', a);}); // turn right animation
            await loader.loadAsync('floppy_with_reader_running_turning_left.glb').then((a) => {_on_load('run_turning_left', a);}); // turn left animation
            await loader.loadAsync('floppy_with_reader_running_turning_right.glb').then((a) => {_on_load('run_turning_right', a);}); // turn right animation
            await loader.loadAsync('floppy_with_reader_pick_up_v2.glb').then((a) => {_on_load('pick_up', a);}); // pickup the disk animation
            await loader.loadAsync('floppy_with_reader_load_disk_v4.glb').then((a) => {_on_load('load_disk', a);}); // load the disk animation
            await loader.loadAsync('floppy_with_reader_swap_disks.glb').then((a) => {_on_load('swap_disks', a);}); // swap the disks animation
            await loader.loadAsync('floppy_with_reader_holding.glb').then((a) => {_on_load('holding_disk', a);}); // holding disk animation
            await loader.loadAsync('floppy_with_reader_jump.glb').then((a) => {_on_load('jump', a);}); // jump animation
            await loader.loadAsync('floppy_with_reader_pushing.glb').then((a) => {_on_load('pushing', a);}); // pushing box animation
            await loader.loadAsync('floppy_with_reader_falling_v2.glb').then((a) => {_on_load('falling', a);}); // falling animation
            await loader.loadAsync('floppy_with_reader_flying_idle.glb').then((a) => {_on_load('flying_idle', a);}); // idle flying animation
            await loader.loadAsync('floppy_with_reader_flying_forward.glb').then((a) => {_on_load('flying_forward', a);}); // flying forward animation
            await loader.loadAsync('floppy_with_reader_flying_forward_fast.glb').then((a) => {_on_load('flying_forward_fast', a);}); // fast flying forward animation
            await loader.loadAsync('floppy_with_reader_punch.glb').then((a) => {_on_load('punch', a);}); // punch animation

            // console.log("loaded all models")
            _callback();
            this.character_is_loaded = true;
            return "done";
        })

    }

    // Function to set the level the character is playing
    set_level(level) {
        this._level = level; 
        this._interaction_controller._level = level;
    }

    // Function to get the target of this controller
    get_target() {
        return this._target;
    }

    // Function to get children of the target
    async get_children() {
        return this._target.children;
    }

    // Function to determine direction of offset based on key input
    _direction_of_offset() {
        var direction_of_offset = 0;

        if (this._input._keys.forward) {
            if (this._input._keys.left) {
                direction_of_offset = Math.PI/4 + Math.PI; // forward and left
            } else if (this._input._keys.right) {
                direction_of_offset = - Math.PI/4  + Math.PI; // forward and right
            } else {
                direction_of_offset =  Math.PI;
            }
        } else if (this._input._keys.backward) {
            if (this._input._keys.left) {
                direction_of_offset = Math.PI/4  + Math.PI/2  + Math.PI; // backward and left
            } else if (this._input._keys.right) {
                direction_of_offset = - Math.PI/4  + Math.PI/2 ; // backward and right
            } else {
                direction_of_offset = 0 // backward
            }
        } else if (this._input._keys.left) {
            direction_of_offset = - Math.PI/2; // left only 
        } else if (this._input._keys.right) {
            direction_of_offset = Math.PI/2; // right only
        }

        return direction_of_offset;
    }

    // Function to get angle from a quaternion
    _get_angle(quaternion) {
        const angle = 2 * Math.acos(quaternion.w);
        return angle;
    }

    // Function to determine if character is turning and in which direction
    _is_turning(quaternion_current, quaternion_goal_direction, mouse_movement_x) {
        
        /*
            - handle by looking at direction the player is going to look in (goal direction) and current direction
            - If we goal = current, we are not turning
            - We also handle based on cartesian quadrants using whether our rotation is negative or not (see cases below)
        */
        if (Math.abs(mouse_movement_x) <= 100) {
            const rotation_current = new THREE.Euler().setFromQuaternion(quaternion_current).y;
            const angle_goal = this._get_angle(quaternion_goal_direction);
            const angle_curr = this._get_angle(quaternion_current);
            
            if ( (quaternion_current._y === quaternion_goal_direction._y)) {
                return "not_turning";
            } else {
                /* Character is busy turning: decide which direction based on cartesian quadrant */
                if (rotation_current < 0) {
                    if (angle_goal < angle_curr) {
                        return "turning_left";
                    } else {
                        return "turning_right";
                    }
                } else {
                    if (angle_goal > angle_curr) {
                        return "turning_left";
                    } else {
                        return "turning_right";
                    }
                }
                
            }
        } else {
            return "not_turning"
        }
    }

    // Set dynamic objects in the scene ysing async
    async set_dynamic_objects(objects) {
        this._interaction_controller.set_dynamic_objects(objects);
    }

    // Update function for when no ability is loaded
    update_no_ability(time_in_seconds, mouse_movement_x, mouse_movement_y) {
    
        // UPDATE FSM
        this._state_machine.update(this._character_is_turning, this._input, this.height_state, "none");

        // VELOCITY INITIALIZATION
        const velocity = this._velocity;
        velocity.x = this._target.rigidBody.linvel().x;
        velocity.y = this._target.rigidBody.linvel().y;
        velocity.z = this._target.rigidBody.linvel().z;
        
        const frame_decceleration = new THREE.Vector3(
            velocity.x * this._decceleration.x,
            velocity.y * this._decceleration.y,
            velocity.z * this._decceleration.z
        );

        // DECCELERATION CALCULATIONS
        frame_decceleration.z = Math.sign(frame_decceleration.z) * Math.min( Math.abs(frame_decceleration.z), Math.abs(velocity.z));
        velocity.add(frame_decceleration);

        // GET CONTROL OBJECT AS THE CURRENT TARGET
        const control_object = this._target;

        // ROTATION ANGLE INFORMATION
        const walk_direction = new THREE.Vector3();
        const rotate_angle = new THREE.Vector3(0,1,0);
        const rotate_quaternion = new THREE.Quaternion();


        // ACCELERATION INITIALIZATION
        const acc = this._acceleration.clone();
        var acceleration = acc.z;

        if (this._input._keys.shift) {
            acceleration *= 3;
        }
        
        var forward = new THREE.Vector3(velocity.x, velocity.y, velocity.z);

        // UPDATES BASED ON DIRECTIONAL INPUT
        if (this._input._keys.forward || this._input._keys.backward || this._input._keys.left || this._input._keys.right) {

            const speed = 2.0*acceleration;

            // CAMERA POSITION CONSIDERATIONS
            const camera_info = this._params.camera.get_camera_information();
            const angle_y_camera_direction = camera_info.yaw_y;

            // ROTATION APPLICATION
            var direction_of_offset = this._direction_of_offset();
            rotate_quaternion.setFromAxisAngle(rotate_angle, angle_y_camera_direction + direction_of_offset);
            control_object.quaternion.rotateTowards(rotate_quaternion, 0.1);

            // UPDATE TURNING INFORMATION OF CHARACTER
            this._character_is_turning = this._is_turning(control_object.quaternion, rotate_quaternion, mouse_movement_x);

            // MOVE THE MODEL
            forward = new THREE.Vector3(0, 0, 1);
            forward.applyQuaternion(control_object.quaternion);
            forward.normalize();

            forward.x *= speed;
            forward.z *= speed;
            // forward.multiplyScalar(speed);
        }

        let y_velocity = this._velocity.y;
        // Jumping threshold (can only jump when between -0.5 and 0.5 and when on ground)
        if (this.height_state == "on ground" && (Math.abs(y_velocity) <= 0.5)) {
            if (this._input._keys.space) {
                y_velocity += 4.5;
            }
            else{
                y_velocity = 0;
                this._target.rigidBody.setGravityScale(0);
            }
        } else {
            y_velocity = 0;
            this._target.rigidBody.setGravityScale(1);
            y_velocity = this._target.rigidBody.linvel().y;
        }
        
        // Update the camera pivot and character physics
        const v = new THREE.Vector3();
        control_object.getWorldPosition(v);
        this._params.camera.move_pivot(v);
        this._target.update(forward.x, y_velocity, forward.z);
    }

    // Function to update character when strength disk loaded
    update_strength(time_in_seconds, mouse_movement_x, mouse_movement_y) {
        // UPDATE FSM
        this._state_machine.update(this._character_is_turning, this._input, this.height_state, "strength");

        // VELOCITY INITIALIZATION
        const velocity = this._velocity;
        velocity.x = this._target.rigidBody.linvel().x;
        velocity.y = this._target.rigidBody.linvel().y;
        velocity.z = this._target.rigidBody.linvel().z;
        
        const frame_decceleration = new THREE.Vector3(
            velocity.x * this._decceleration.x,
            velocity.y * this._decceleration.y,
            velocity.z * this._decceleration.z
        );

        // DECCELERATION CALCULATIONS
        frame_decceleration.z = Math.sign(frame_decceleration.z) * Math.min( Math.abs(frame_decceleration.z), Math.abs(velocity.z));
        velocity.add(frame_decceleration);

        // GET CONTROL OBJECT AS THE CURRENT TARGET
        const control_object = this._target;

        // ROTATION ANGLE INFORMATION
        const walk_direction = new THREE.Vector3();
        const rotate_angle = new THREE.Vector3(0,1,0);
        const rotate_quaternion = new THREE.Quaternion();


        // ACCELERATION INITIALIZATION
        const acc = this._acceleration.clone();
        var acceleration = acc.z;

        if (this._input._keys.shift) {
            acceleration *= 3;
        }
        
        var forward = new THREE.Vector3(velocity.x, velocity.y, velocity.z);

        // UPDATES BASED ON DIRECTIONAL INPUT
        if (this._input._keys.forward || this._input._keys.backward || this._input._keys.left || this._input._keys.right) {

            const speed = 1.0*acceleration;

            // CAMERA POSITION CONSIDERATIONS
            const camera_info = this._params.camera.get_camera_information();
            const angle_y_camera_direction = camera_info.yaw_y;

            // ROTATION APPLICATION
            var direction_of_offset = this._direction_of_offset();
            rotate_quaternion.setFromAxisAngle(rotate_angle, angle_y_camera_direction + direction_of_offset);
            control_object.quaternion.rotateTowards(rotate_quaternion, 0.1);

            // UPDATE TURNING INFORMATION OF CHARACTER
            this._character_is_turning = this._is_turning(control_object.quaternion, rotate_quaternion, mouse_movement_x);

            // MOVE THE MODEL
            forward = new THREE.Vector3(0, 0, 1);
            forward.applyQuaternion(control_object.quaternion);
            forward.normalize();

            forward.x *= speed;
            forward.z *= speed;
            // forward.multiplyScalar(speed);
        }

        let y_velocity = this._velocity.y;
        // Jumping threshold (can only jump when between -0.5 and 0.5 and when on ground)
        if (this.height_state == "on ground" && (Math.abs(y_velocity) <= 0.5)) {
            if (this._input._keys.space) {
                y_velocity += 3;
            }
            else{
                y_velocity = 0;
                this._target.rigidBody.setGravityScale(0);
                this._target.rigidBody.setGravityScale(0);
            }
        } else {
            this._target.rigidBody.setGravityScale(1);
            this._target.rigidBody.setGravityScale(1);
            y_velocity = this._target.rigidBody.linvel().y;
        }
        
        // Update the camera pivot and character physics
        const v = new THREE.Vector3();
        control_object.getWorldPosition(v);
        this._params.camera.move_pivot(v);
        this._target.update(forward.x, y_velocity, forward.z);
    }
    

    // Update the character when flight disk is loaded
    update_flight(time_in_seconds, mouse_movement_x, mouse_movement_y) {
        // UPDATE FSM
        this._state_machine.update(this._character_is_turning, this._input, this.height_state, "flight");

        // VELOCITY INITIALIZATION
        const velocity = this._velocity;
        velocity.x = this._target.rigidBody.linvel().x;
        velocity.y = this._target.rigidBody.linvel().y;
        velocity.z = this._target.rigidBody.linvel().z;
        
        const frame_decceleration = new THREE.Vector3(
            velocity.x * this._decceleration.x,
            velocity.y * this._decceleration.y,
            velocity.z * this._decceleration.z
        );

        // DECCELERATION CALCULATIONS
        frame_decceleration.z = Math.sign(frame_decceleration.z) * Math.min( Math.abs(frame_decceleration.z), Math.abs(velocity.z));
        velocity.add(frame_decceleration);

        // GET CONTROL OBJECT AS THE CURRENT TARGET
        const control_object = this._target;

        // ROTATION ANGLE INFORMATION
        const walk_direction = new THREE.Vector3();
        const rotate_angle = new THREE.Vector3(0,1,0);
        const rotate_quaternion = new THREE.Quaternion();


        // ACCELERATION INITIALIZATION
        const acc = this._acceleration.clone();
        var acceleration = acc.z;

        if (this._input._keys.shift) {
            acceleration *= 3;
        }
        
        var forward = new THREE.Vector3(velocity.x, velocity.y, velocity.z);

        // UPDATES BASED ON DIRECTIONAL INPUT
        if (this._input._keys.forward || this._input._keys.backward || this._input._keys.left || this._input._keys.right) {

            const speed = 3.0*acceleration;

            // CAMERA POSITION CONSIDERATIONS
            const camera_info = this._params.camera.get_camera_information();
            const angle_y_camera_direction = camera_info.yaw_y;

            // ROTATION APPLICATION
            var direction_of_offset = this._direction_of_offset();
            rotate_quaternion.setFromAxisAngle(rotate_angle, angle_y_camera_direction + direction_of_offset);
            control_object.quaternion.rotateTowards(rotate_quaternion, 0.1);

            // UPDATE TURNING INFORMATION OF CHARACTER
            this._character_is_turning = this._is_turning(control_object.quaternion, rotate_quaternion, mouse_movement_x);

            // MOVE THE MODEL
            forward = new THREE.Vector3(0, 0, 1);
            forward.applyQuaternion(control_object.quaternion);
            forward.normalize();

            forward.x *= speed;
            forward.z *= speed;
        }

        let y_velocity = this._velocity.y;
        // Jumping threshold (can only jump when between -0.07 and 0.07 and when on ground)
        if (this._input._keys.space) {
            y_velocity = 4;
        } else if (this._input._keys.crouch) {
            y_velocity = -4;
        } else {
            y_velocity = 0;
        }
        
        // Update the camera pivot and character physics
        const v = new THREE.Vector3();
        control_object.getWorldPosition(v);
        this._params.camera.move_pivot(v);
        this._target.update(forward.x, y_velocity, forward.z);
        
    }

    // Update character when shrink disk loaded
    update_shrink(time_in_seconds, mouse_movement_x, mouse_movement_y) {
        // UPDATE FSM
        this._state_machine.update(this._character_is_turning, this._input, this.height_state, "shrink");

        // VELOCITY INITIALIZATION
        const velocity = this._velocity;
        velocity.x = this._target.rigidBody.linvel().x;
        velocity.y = this._target.rigidBody.linvel().y;
        velocity.z = this._target.rigidBody.linvel().z;
        
        const frame_decceleration = new THREE.Vector3(
            velocity.x * this._decceleration.x,
            velocity.y * this._decceleration.y,
            velocity.z * this._decceleration.z
        );

        // DECCELERATION CALCULATIONS
        frame_decceleration.z = Math.sign(frame_decceleration.z) * Math.min( Math.abs(frame_decceleration.z), Math.abs(velocity.z));
        velocity.add(frame_decceleration);

        // GET CONTROL OBJECT AS THE CURRENT TARGET
        const control_object = this._target;

        // ROTATION ANGLE INFORMATION
        const walk_direction = new THREE.Vector3();
        const rotate_angle = new THREE.Vector3(0,1,0);
        const rotate_quaternion = new THREE.Quaternion();


        // ACCELERATION INITIALIZATION
        const acc = this._acceleration.clone();
        var acceleration = acc.z;

        if (this._input._keys.shift) {
            acceleration *= 3;
        }
        
        var forward = new THREE.Vector3(velocity.x, velocity.y, velocity.z);

        // UPDATES BASED ON DIRECTIONAL INPUT
        if (this._input._keys.forward || this._input._keys.backward || this._input._keys.left || this._input._keys.right) {

            const speed = 1.0*acceleration;

            // CAMERA POSITION CONSIDERATIONS
            const camera_info = this._params.camera.get_camera_information();
            const angle_y_camera_direction = camera_info.yaw_y;

            // ROTATION APPLICATION
            var direction_of_offset = this._direction_of_offset();
            rotate_quaternion.setFromAxisAngle(rotate_angle, angle_y_camera_direction + direction_of_offset);
            control_object.quaternion.rotateTowards(rotate_quaternion, 0.1);

            // UPDATE TURNING INFORMATION OF CHARACTER
            this._character_is_turning = this._is_turning(control_object.quaternion, rotate_quaternion, mouse_movement_x);

            // MOVE THE MODEL
            forward = new THREE.Vector3(0, 0, 1);
            forward.applyQuaternion(control_object.quaternion);
            forward.normalize();

            forward.x *= speed;
            forward.z *= speed;
        }

        let y_velocity = this._velocity.y;
        // Jumping threshold (can only jump when between -0.07 and 0.07 and when on ground)
        if (this.height_state == "on ground" && (Math.abs(y_velocity) <= 0.5)) {
            if (this._input._keys.space) {
                y_velocity += 5;
            }
            else{
                y_velocity = 0;
                this._target.rigidBody.setGravityScale(0);
            }
        } else {
            y_velocity = this._target.rigidBody.linvel().y;
            this._target.rigidBody.setGravityScale(1);
        }
        
        // Update the camera pivot and character physics
        const v = new THREE.Vector3();
        control_object.getWorldPosition(v);
        this._params.camera.move_pivot(v);
        this._target.update(forward.x, y_velocity, forward.z);
    }
    

    // Function to update states, movement information and animations based on the disc loaded
    update(time_in_seconds, mouse_movement_x, mouse_movement_y) {
        // Only update if target has been set
        if (!this._target) {
            return;
        }

        // Only update if character has been loaded
        if (!this.character_is_loaded) {
            return;
        }

        // UPDATE MIXER (ANIMATION) FOR CHARACTER
        if (this._mixer) {
            this._mixer.update(time_in_seconds);
        }

        // If user is reading npc lines (or we forcefully halt movement), don't let them move
        if (this._currently_reading_npc || this._halt_movement) {
            this._target.rigidBody.setGravityScale(0);
            this._target.update(0,0,0);
            return;
        } else {
            this._target.rigidBody.setGravityScale(1);
        }

        // Update based on character's loaded disk
        if (this.power_controller.power === "none") {
            this.update_no_ability(time_in_seconds, mouse_movement_x, mouse_movement_y);
        } else if (this.power_controller.power === "strength") {
            this.update_strength(time_in_seconds, mouse_movement_x, mouse_movement_y);
        } else if (this.power_controller.power === "flight") {
            this.update_flight(time_in_seconds, mouse_movement_x, mouse_movement_y);
        } else if (this.power_controller.power === "shrink") {
            this.update_shrink(time_in_seconds, mouse_movement_x, mouse_movement_y);
        }

        // If we have created the power controller, update it
        if (this.power_controller) {
            this.power_controller.update();
        }
    }
}

export default CharacterController