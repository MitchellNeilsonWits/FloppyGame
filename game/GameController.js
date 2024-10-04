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
import MenuController from '../menu/MenuController';



//TODO: Either add proxRender from engine/proxRender.js here or IN level controller -> need to decide which is best
class GameController {
    constructor() {
        this._init();
        this._playing_game = false;
        // this.play_game();
    }

    // Play game: sets the mouse listener, sets playing game to true, and hides the pause menu
    play_game() {
        this._mouse_listener.set_listener();
        this._playing_game = true;
        this._menu.hide_menu();
    }

    // Pause game: removes the mouse listener, sets playing game to false, and shows the pause menu
    pause_game() {
        this._mouse_listener.remove_listener();
        this._playing_game = false;
        this._menu.show_menu();
    }

    _setup_first_pointer_lock() {
        document.addEventListener('pointerlockchange', (e) => {
            if (document.pointerLockElement === this._threejs.domElement) {
                this.play_game();
            } else {
                this.pause_game();
            }
        })
    }

    /* Init function */
    async _init() {

        // THREE JS RENDERER
        this._threejs = new THREE.WebGLRenderer({antialias: true});
        this._threejs.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this._threejs.domElement);

        this._threejs.domElement.addEventListener("click", async () => {
            this._threejs.domElement.requestPointerLock();
            this._threejs.domElement.removeEventListener('click',this);
            this.play_game();
        });

        // PAUSE MENU
        this._menu = new MenuController(this._threejs.domElement);

        // MOUSE LISTENER
        this._mouse_listener = new MouseListener();

        // Setup the first pointer lock (may not be needed in final release)
        this._setup_first_pointer_lock();
        
        // CAMERA
        this._camera = new CameraController(this._threejs);
        
        // SCENE
        this._scene = new THREE.Scene();

        
        // ADD "STATIC" OBJECTS TO SCENE
        this._scene.add(light);
        this._scene.add(directional_light);
        // this._scene.add(this._camera.get_camera());
        this._scene.add(this._camera.get_pivot());
        
        // INITALIZE MIXERS
        this._mixers = [];

        // INITIALIZE REQUEST ANIMATION FRAME VARIABLE
        this._previousRAF = null;

        this._load_level()
        // REQUEST ANIMATION FRAME
        this._raf();
    }

    /* Load in level */
    async _load_level() {
        // LEVEL CONTROLLER
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