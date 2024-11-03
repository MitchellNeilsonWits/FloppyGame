/**
 * File: CameraController.js
 * 
 * Description:
 *  Handles camera movements for third person perspective
 */

import * as THREE from 'three';

class CameraController {
    constructor() {
        this._init();
        this._velocity = {x:0, y:0, z:0}
    }

    // Initialize the camera by setting up the 3rd perspective system
    _init() {
        // Declare important variables
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        this._mouse = new THREE.Vector2(0,0);
        this._mouse_movement = new THREE.Vector2(0,0);
        this._target = new THREE.Vector2(0,0);
        this._window_half = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
        
        // Create the camera
        this._camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
        
        // Declare the camera distance
        this._camera_distance = 3.5;
        this._camera.position.set(0, 0.5, this._camera_distance);
        
        // Camera is created by attaching yaw, pitch and pivot together for seemless movement
        this._camera_target = new THREE.Vector3();
        this._yaw = new THREE.Object3D();
        this._pitch = new THREE.Object3D();
        this._pivot = new THREE.Object3D();

        this._pivot.add(this._yaw);
        this._pivot.position.set(0,1,0);
        this._yaw.add(this._pitch);
        this._pitch.add(this._camera);
    }

    // Some simple get functions for each component
    get_camera() {
        return this._camera;
    }

    get_pivot() {
        return this._pivot;
    }

    get_pitch() {
        return this._pitch;
    }

    get_yaw() {
        return this._yaw;
    }

    get_camera_information() {
        return {
            yaw_y: this._yaw.rotation.y
        }
    }

    // Function to move the pivot to the location of the player
    move_pivot(position) {
        this._pivot.position.lerp(position, 0.5);
    }

    // Function to change the rotation manually at the beginning of each level
    set_rotation(rotation) {
        this._yaw.rotation.y = rotation;
    }
    
    // Function to update the camera movement based on x and y mouse movement and scrolling
    update(mouse_movement_x, mouse_movement_y, mouse_zoom) {
        const mouse_sensitivity = 0.5;


        this._yaw.rotation.y -= mouse_movement_x * mouse_sensitivity/1000;
        const v = this._pitch.rotation.x - mouse_movement_y * mouse_sensitivity/1000;
        if (v > -1 && v < 0.1) {
            this._pitch.rotation.x = v;
        }

        this._camera_distance = mouse_zoom;
        this._camera.position.z = this._camera_distance; 
        
        return false;
    }

    // Function to change the camera FOV from within the menu screen
    change_camera_fov(val) {
        this._camera.fov = val;
        this._camera.updateProjectionMatrix();
    }

    
}

export default CameraController;