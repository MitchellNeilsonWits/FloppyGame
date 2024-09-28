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

class CharacterController {
    constructor(params) {
        this._init(params);
    }

    /* Initialization function */
    _init(params) {
        // SET IMPORTANT VARIABLES
        this._params = params;
        this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0);
        this._acceleration = new THREE.Vector3(50.0, 0.25, 85.0);
        this._velocity = new THREE.Vector3(0, 0, 0);
        this._character_is_turning = false; // note when the character is turning

        // INITIALIZE ANIMATIONS
        this._animations = {};
        this._input = new CharacterControllerInput(); // handling input for character
        
        // FINITE STATE MACHINE FOR STATE OF CHARACTER: assists in shifting between animations
        this._state_machine = new CharacterFSM(
            new BasicCharacterControllerProxy(this._animations) // proxy for character controlling
        );

        // LOAD MODELS
        this._load_models();
    }

    /* load character models and create states */
    _load_models() {
        // LOAD INITIAL CHARACTER MODEL
        const gltfLoader = new GLTFLoader();
        gltfLoader.setPath('../models/')

        gltfLoader.load('floppy_with_reader_idle.glb', (gltf) => {  
            
            // SET SCALE OF CHARACTER
            gltf.scene.scale.setScalar(0.5);

            // SET SCENE INFORMATION
            this._target = gltf.scene;
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
            loader.setPath('../models/');
            loader.load('floppy_with_reader_idle.glb', (a) => {_on_load('idle', a);}); // idle animation
            loader.load('floppy_with_reader_animated_v4.glb', (a) => {_on_load('walk', a);}); // walk animation
            loader.load('floppy_with_reader_turning_left.glb', (a) => {_on_load('turning_left', a);}); // turn left animation
            loader.load('floppy_with_reader_turning_right.glb', (a) => {_on_load('turning_right', a);}); // turn right animation
            loader.load('floppy_with_reader_running.glb', (a) => {_on_load('run', a);}); // turn right animation
            loader.load('floppy_with_reader_running_turning_left.glb', (a) => {_on_load('run_turning_left', a);}); // turn left animation
            loader.load('floppy_with_reader_running_turning_right.glb', (a) => {_on_load('run_turning_right', a);}); // turn right animation
            
        })
    }

    /* Function to determine direction of offset based on key input */
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

    /* function to get angle from a quaternion */
    _get_angle(quaternion) {
        const angle = 2 * Math.acos(quaternion.w);
        return angle;
    }

    /* Function to determine if character is turning and in which direction */
    _is_turning(quaternion_current, quaternion_goal_direction, mouse_movement_x) {
        
        /* If the current mouse movement is zero, then we are moving according to keys
            - handle by looking at direction the player is going to look in (goal direction) and current direction
            - If we goal = current, we are not turning
            - We also handle based on cartesian quadrants using whether our rotation is negative or not (see cases below)
        */
        if (Math.abs(mouse_movement_x) == 0) {
            const rotation_current = new THREE.Euler().setFromQuaternion(quaternion_current).y;
            const angle_goal = this._get_angle(quaternion_goal_direction);
            const angle_curr = this._get_angle(quaternion_current);
            
            if ( (quaternion_current._y === quaternion_goal_direction._y)) {
                return "not_turning";
            } else {
                /* Character is busy turning: decide which direction based on cartesian quadrant */
                if (rotation_current < 0) {
                    console.log("negative")
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
            /* 
                If mouse movement is non-zero, move according to mouse movement:
                -- if positive (with some logical leeway to avoid "glitching" animation) then turn right
                -- same for negative but we turn left
            */
            if (mouse_movement_x >= 2) {
                return "turning_right"
            } else if (mouse_movement_x <= -2) {
                return "turning_left"
            } else {
                return "not_turning"
            }
        }
    }

    /* Function to update states, movement information and animations */
    update(time_in_seconds, mouse_movement_x) {
        if (!this._target) {
            return;
        }

        // UPDATE FSM
        this._state_machine.update(this._character_is_turning, this._input);

        // VELOCITY INITIALIZATION
        const velocity = this._velocity;
        const frame_decceleration = new THREE.Vector3(
            velocity.x * this._decceleration.x,
            velocity.y * this._decceleration.y,
            velocity.z * this._decceleration.z
        );

        // DECCELERATION CALCULATIONS
        frame_decceleration.multiplyScalar(time_in_seconds);
        frame_decceleration.x = Math.sign(frame_decceleration.x) * Math.min( Math.abs(frame_decceleration.x), Math.abs(velocity.x));
        frame_decceleration.z = Math.sign(frame_decceleration.z) * Math.min( Math.abs(frame_decceleration.z), Math.abs(velocity.z));
        velocity.add(frame_decceleration);

        // GET CONTROL OBJECT AS THE CURRENT TARGET
        const control_object = this._target;

        const _q = new THREE.Quaternion();
        const _a = new THREE.Vector3();
        const _r = control_object.quaternion.clone();

        // ROTATION ANGLE INFORMATION
        const walk_direction = new THREE.Vector3();
        const rotate_angle = new THREE.Vector3(0,1,0);
        const rotate_quaternion = new THREE.Quaternion();


        // ACCELERATION INITIALIZATION
        const acc = this._acceleration.clone();

        if (this._input._keys.shift) {
            acc.multiplyScalar(8.0);
        }

        // UPDATES BASED ON DIRECTIONAL INPUT
        if (this._input._keys.forward || this._input._keys.backward || this._input._keys.left || this._input._keys.right) {

            // CAMERA POSITION CONSIDERATIONS
            const camera_info = this._params.camera.get_camera_information();
            const euler = new THREE.Euler();
            const angle_y_camera_direction = camera_info.yaw_y;

            // ROTATION APPLICATION
            var direction_of_offset = this._direction_of_offset();
            rotate_quaternion.setFromAxisAngle(rotate_angle, angle_y_camera_direction + direction_of_offset);
            control_object.quaternion.rotateTowards(rotate_quaternion, 0.08);

            // UPDATE TURNING INFORMATION OF CHARACTER
            this._character_is_turning = this._is_turning(control_object.quaternion, rotate_quaternion, mouse_movement_x);

            // MOVE THE MODEL
            velocity.z += acc.z * time_in_seconds;

            const old_position = new THREE.Vector3();
            old_position.copy(control_object.position);

            const forward = new THREE.Vector3(0, 0, 1);
            forward.applyQuaternion(control_object.quaternion);

            const sideways = new THREE.Vector3(1,0,0);
            sideways.applyQuaternion(control_object.quaternion);
            sideways.normalize();

            sideways.multiplyScalar(velocity.x * time_in_seconds);
            forward.multiplyScalar(velocity.z * time_in_seconds);

            control_object.position.add(forward);
            control_object.position.add(sideways);

            const v = new THREE.Vector3();
            control_object.getWorldPosition(v);
            this._params.camera.move_pivot(v);

            old_position.copy(control_object.position);
        }

        // UPDATE MIXER (ANIMATION) FOR CHARACTER
        if (this._mixer) {
            this._mixer.update(time_in_seconds);
        }
    }
}

export default CharacterController