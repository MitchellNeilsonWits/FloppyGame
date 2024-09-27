/**
 * File: GameController.js
 * 
 * Description:
 *  Main controller to bind scene, renderer, camera and other controllers
 */

import * as THREE from 'three';
import CharacterController from "../movement/CharacterController";
import camera from '../camera/camera';
import light from '../lighting/point_lights';
import directional_light from '../lighting/directional_lights';
import plane from '../components/sample_plane';
import CameraController from './CameraController';
import MouseListener from './MouseListener';

class GameController {
    constructor(camera, scene) {
        this._init();
    }

    /* Init function */
    _init() {

        // THREE JS RENDERER
        this._threejs = new THREE.WebGLRenderer({antialias: true});
        this._threejs.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this._threejs.domElement);

        this._threejs.domElement.addEventListener("click", async () => {
            await this._threejs.domElement.requestPointerLock({
                unadjustedMovement: true
            });
        });

        document.addEventListener('pointerlockchange', (e) => {
            // document.addEventListener('mousemove', (event) => this._mouse_move(this, event), false);
            if (document.pointerLockElement === this._threejs.domElement) {
                this._mouse_listener = new MouseListener();
            }
        })

        // CAMERA
        this._camera = new CameraController(this._threejs);

        
        // SCENE
        this._scene = new THREE.Scene();

        // ADD "STATIC" OBJECTS TO SCENE
        this._scene.add(light);
        this._scene.add(directional_light);
        this._scene.add(plane);

        // this._scene.add(this._camera.get_camera());
        this._scene.add(this._camera.get_pivot());

        // INITALIZE MIXERS
        this._mixers = [];

        // INITIALIZE REQUEST ANIMATION FRAME VARIABLE
        this._previousRAF = null;

        // LOAD ANIMATED MODEL(S)
        this._load_animated_model();
        
        // REQUEST ANIMATION FRAME
        this._raf();
    }

    /* Load in animated models */
    _load_animated_model() {
        // CREATE A BASIC CHARACTER CONTROLLER
        const params = {
            camera: this._camera, 
            scene: this._scene,
            mixers: this._mixers
        }
        this._controls = new CharacterController(params);
    }

    /* Request animation frame function */
    _raf() {
        requestAnimationFrame((t) => {
            if (this._previousRAF === null) {
                this._previousRAF = t;
            }

            // RECURSIVE CALL
            this._raf();

            // RENDER AND STEP
            this._threejs.render(this._scene, this._camera.get_camera());
            this._step(t - this._previousRAF);
            this._previousRAF = t; 
        })
    }

    /* Step to update important rendering information */
    _step(time_elapsed) {
        // CONVERT TIME TO SECONDS
        const time_elapsed_in_seconds = time_elapsed * 0.001;
        
        // UPDATE MIXERS
        if (this._mixers) {
            this._mixers.map(mixer => {
                mixer.update(time_elapsed_in_seconds);
            })
        }

        // UPDATE CHARACTER CONTROLLER
        if (this._controls) {
            if (this._mouse_listener) {
                this._controls.update(time_elapsed_in_seconds, this._mouse_listener._mouse_movement_x);
            }
        }

        // UPDATE CAMERA
        if (this._camera) {
            if (this._mouse_listener) {
                this._camera.update(this._mouse_listener._mouse_movement_x, this._mouse_listener._mouse_movement_y);
                this._mouse_listener._decelerate_mouse_movement(); // decellerate the mouse movement to stop continuous rotations
            }
        }
    }

}

export default GameController;