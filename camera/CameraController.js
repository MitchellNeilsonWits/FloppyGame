import * as THREE from 'three';

class CameraController {
    constructor() {
        this._init();
        this._velocity = {x:0, y:0, z:0}
    }

    _init() {
        const WIDTH = window.innerWidth;
        const HEIGHT = window.innerHeight;
        this._mouse = new THREE.Vector2(0,0);
        this._mouse_movement = new THREE.Vector2(0,0);

        this._target = new THREE.Vector2(0,0);
        this._window_half = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
        
        
        this._camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
        
        this._camera_distance = 3.5;
        
        this._camera.position.set(0, 0.5, this._camera_distance);
        this._camera_target = new THREE.Vector3();

        this._yaw = new THREE.Object3D();
        this._pitch = new THREE.Object3D();
        this._pivot = new THREE.Object3D();

        this._pivot.add(this._yaw);
        this._pivot.position.set(0,1,0);
        this._yaw.add(this._pitch);
        this._pitch.add(this._camera);
    }

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

    move_pivot(position) {
        this._pivot.position.lerp(position, 0.5);
    }

    set_rotation(rotation) {
        this._yaw.rotation.y = rotation;
    }
    
    update(mouse_movement_x, mouse_movement_y, mouse_zoom) {
        const mouse_sensitivity = 0.5;


        this._yaw.rotation.y -= mouse_movement_x * mouse_sensitivity/1000;
        const v = this._pitch.rotation.x - mouse_movement_y * mouse_sensitivity/1000;
        if (v > -1 && v < 0.1) {
            this._pitch.rotation.x = v;
        }

        // if (mouse_zoom != this._camera_distance) {
        this._camera_distance = mouse_zoom;
        this._camera.position.z = this._camera_distance; 
        // }

        return false;
    }

    change_camera_fov(val) {
        this._camera.fov = val;
        this._camera.updateProjectionMatrix();
    }

    
}

export default CameraController;