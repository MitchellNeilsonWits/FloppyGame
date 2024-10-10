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

class CharacterController {
    constructor(params) {
        this._init(params);
        
    }

    /* Initialization function */
    _init(params) {
        // SET IMPORTANT VARIABLES
        this._params = params;
        this._decceleration = new THREE.Vector3(-0.5, -0.0001, -0.5);
        this._acceleration = new THREE.Vector3(1.0, 0.25, 1.0);
        this._velocity = new THREE.Vector3(0, 0, 0);
        this._character_is_turning = "not_turning"; // note when the character is turning
        this.height_state = "on ground";

        // INITIALIZE ANIMATIONS
        this._animations = {};
        this._input = new CharacterControllerInput(); // handling input for character
        
        // FINITE STATE MACHINE FOR STATE OF CHARACTER: assists in shifting between animations
        this._state_machine = new CharacterFSM(
            new BasicCharacterControllerProxy(this._animations) // proxy for character controlling
        );

        // LOAD MODELS
        this._load_models();
        this._halt_character = {
            status: false,
            status_verified: false,
            time_to_completion: 0
        };

        this._holding_disk = null;

        this._level = null;
    }

    /* load character models and create states */
    _load_models() {
        // LOAD INITIAL CHARACTER MODEL
        const gltfLoader = new GLTFLoader();
        gltfLoader.setPath('../models/')

        gltfLoader.load('floppy_with_reader_remastered_V3.glb', (gltf) => {  
            
            // SET SCALE OF CHARACTER
            // gltf.scene.scale.setScalar(0.002);
            // --- LOBBY ---
            gltf.scene.children[0].scale.set(0.5, 0.5, 0.5);
            gltf.scene.children[0].position.y = 5;
            gltf.scene.children[0].position.z = 25;
            // --- TUTORIAL --- 
            // gltf.scene.children[0].scale.set(0.5, 0.5, 0.5);
            // gltf.scene.children[0].position.x = -51.35;
            // gltf.scene.children[0].position.y = 2;
            // gltf.scene.children[0].position.z = 0.2933;
            //gltf.scene.children[0].setRotationFromEuler( new THREE.Euler(-Math.PI, Math.PI/2, -Math.PI, "XYZ"));

            // gltf.scene.

            // SET SCENE INFORMATION
            // this._target = gltf.scene;
            
            this._target = new Player(gltf.scene.children[0], this._params.physic);

            // Create interaction controller to handle interactions with objects
            this._interaction_controller = new CharacterInteractionController(this, this._input);

            // Create height controller to handle changes in height of character
            this.height_controller = new CharacterHeightController(this);

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
            loader.setPath('../models/');
            loader.load('floppy_with_reader_idle.glb', (a) => {_on_load('idle', a);}); // idle animation
            loader.load('floppy_with_reader_animated_v4.glb', (a) => {_on_load('walk_not_turning', a);}); // walk animation
            loader.load('floppy_with_reader_turning_left.glb', (a) => {_on_load('walk_turning_left', a);}); // turn left animation
            loader.load('floppy_with_reader_turning_right.glb', (a) => {_on_load('walk_turning_right', a);}); // turn right animation
            loader.load('floppy_with_reader_running_v2.glb', (a) => {_on_load('run_not_turning', a);}); // turn right animation
            loader.load('floppy_with_reader_running_turning_left.glb', (a) => {_on_load('run_turning_left', a);}); // turn left animation
            loader.load('floppy_with_reader_running_turning_right.glb', (a) => {_on_load('run_turning_right', a);}); // turn right animation
            loader.load('floppy_with_reader_pick_up_v2.glb', (a) => {_on_load('pick_up', a);}); // load the disk animation
            loader.load('floppy_with_reader_load_disk_v4.glb', (a) => {_on_load('load_disk', a);}); // load the disk animation
            loader.load('floppy_with_reader_holding.glb', (a) => {_on_load('holding_disk', a);}); // load the disk animation
            loader.load('floppy_with_reader_jump.glb', (a) => {_on_load('jump', a);}); // load the disk animation
            loader.load('floppy_with_reader_pushing.glb', (a) => {_on_load('pushing', a);}); // load the disk animation
            loader.load('floppy_with_reader_falling_v2.glb', (a) => {_on_load('falling', a);}); // load the disk animation

            console.log("loaded all models")
            return "done";
        })

    }

    set_level(level) {
        this._level = level; 
        this._interaction_controller._level = level;
    }

    get_target() {
        return this._target;
    }

    async get_children() {
        // return this._target_children;
        return this._target.children;
    }

    // Change the character's ability
    change_ability(new_ability) {
        this._ability = new_ability;
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

    async set_dynamic_objects(objects) {
        this._interaction_controller.set_dynamic_objects(objects);
    }

    /* Function to update states, movement information and animations */
    update(time_in_seconds, mouse_movement_x, mouse_movement_y) {
        if (!this._target) {
            return;
        }

        // If there is a disk being held, handle to end the interaction in 1 of 2 ways:
        // -- user drops the disk (press F)
        // -- user loads the disk (press Q)
        

        // console.log(this)
        
        // if (this._halt_character.status) {
        //     this._target.update(0,this._target.rigidBody.linvel().y,0); // stop character from moving horizontally
        //     this._halt_character.time_to_completion = this._halt_character.time_to_completion - time_in_seconds;

        //     if (this._halt_character.time_to_completion <= 0) {
        //         this._halt_character = {
        //             status: false,
        //             status_verified: false,
        //             time_to_completion: 0
        //         }
        //     }
            
        // } else {
            // UPDATE FSM
            this._state_machine.update(this._character_is_turning, this._input, this.height_state);

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
            // Jumping threshold (can only jump when between -0.07 and 0.07 and when on ground)
            if (this.height_state == "on ground" && (Math.abs(y_velocity) <= 0.07)) {
                if (this._input._keys.space) {
                    y_velocity += 5;
                }
                else{
                    y_velocity = this._target.rigidBody.linvel().y;
                }
            } else {
                y_velocity = this._target.rigidBody.linvel().y;
            }
            
            const v = new THREE.Vector3();
            control_object.getWorldPosition(v);
            this._params.camera.move_pivot(v);
            // this._params.camera.move_pivot(forward.x, this._target.rigidBody.linvel().y, forward.z);

            this._target.update(forward.x, y_velocity, forward.z);
        // }
        
        // this._target.update(0, 0, 0);


        // UPDATE MIXER (ANIMATION) FOR CHARACTER
        if (this._mixer) {
            this._mixer.update(time_in_seconds);
        }

        // this._can_interact = this._interaction_controller.update();
        // console.log(this._can_interact)
    }
}

export default CharacterController