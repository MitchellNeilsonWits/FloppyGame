/**
 * File: GameController.js
 * 
 * Description:
 *  Main controller to bind scene, renderer, camera and other controllers
 */

import * as THREE from 'three';
import CharacterController from "../character/CharacterController";
import camera from '../camera/camera';
import light from '../lighting/point_lights';
import directional_light from '../lighting/directional_lights';
import plane from '../components/sample_plane';
import CameraController from '../camera/CameraController';
import MouseListener from '../listeners/MouseListener';
import LevelController from '../level/LevelController';
import physic from '../engine/physic';
import loader from '../engine/loader';
import World from '../engine/world';
import Player from '../engine/player';


class GameController {
    constructor(camera, scene) {
        this._init();
        this._playing_game = false;
    }

    /* Init function */
    async _init() {

        // THREE JS RENDERER
        this._threejs = new THREE.WebGLRenderer({antialias: true});
        this._threejs.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this._threejs.domElement);

        this._threejs.domElement.addEventListener("click", async () => {
            this._threejs.domElement.requestPointerLock();
        });

        this._mouse_listener = new MouseListener();
        document.addEventListener('pointerlockchange', (e) => {
            if (document.pointerLockElement === this._threejs.domElement) {
                this._mouse_listener.set_listener();
                this._playing_game = true;
            } else {
                this._mouse_listener.remove_listener();
                document.exitPointerLock();
                this._playing_game = false;
            }
        })
        
        // CAMERA
        this._camera = new CameraController(this._threejs);
        
        // SCENE
        this._scene = new THREE.Scene();

        
        // ADD "STATIC" OBJECTS TO SCENE
        this._scene.add(light);
        this._scene.add(directional_light);
        // this._scene.add(this._camera.get_camera());
        this._scene.add(this._camera.get_pivot());

        // this._world = new World(meshes.visuals, meshes.colliders, physic);
        // this._scene.add(this._world); //add world to scene
        
        // INITALIZE MIXERS
        this._mixers = [];

        // INITIALIZE REQUEST ANIMATION FRAME VARIABLE
        this._previousRAF = null;

        // LOAD ANIMATED MODEL(S)
        this._load_animated_model()

        this._load_level()
        
        // REQUEST ANIMATION FRAME
        this._raf();
    }

    /* Load in animated models */
    _load_animated_model() {
        // CREATE A BASIC CHARACTER CONTROLLER
        // const params = {
        //     camera: this._camera, 
        //     scene: this._scene,
        //     mixers: this._mixers
        // }
        // this._controls = new CharacterController(params);
    }

    /* Load in level */
    async _load_level() {
        // LEVEL CONTROLLER
        
        // var children = await this._controls.get_children();
        // console.log(children);
        // let timer = 0;

        // while ((timer < 10000) || (!children)) {
        //     console.log(timer);
        //     if (timer === 9999) {
        //         children = this._controls.get_children();
        //         if (!children) {
        //             timer = 0;
        //         }
        //     } else {
        //         timer += 1;
        //     }
        // }

        const params = {
            camera: this._camera, 
            scene: this._scene,
            mixers: this._mixers,
            mouse_listener: this._mouse_listener,
            physic: physic
        }

        this._level_controller = new LevelController(this._scene, params);
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
        if (this._playing_game) {
            // CONVERT TIME TO SECONDS
            const time_elapsed_in_seconds = time_elapsed * 0.001;
            
            // UPDATE MIXERS
            if (this._mixers) {
                this._mixers.map(mixer => {
                    mixer.update(time_elapsed_in_seconds);
                })
            }

            //step for physics
            physic.step();

            if (this._level_controller) {
                this._level_controller.update(time_elapsed_in_seconds);
            }

            // UPDATE CHARACTER CONTROLLER
            // if (this._controls) {
            //     if (this._mouse_listener) {
            //         console.log(this._mouse_listener._mouse_movement_x);
            //         this._controls.update(time_elapsed_in_seconds, this._mouse_listener._mouse_movement_x);
            //     }
            // }

            // UPDATE CAMERA
            if (this._camera) {
                if (this._mouse_listener) {
                    this._camera.update(this._mouse_listener._mouse_movement_x, this._mouse_listener._mouse_movement_y);
                    this._mouse_listener._decelerate_mouse_movement(); // decellerate the mouse movement to stop continuous rotations
                }
            }
        }
    }

}

export default GameController;