import SampleLevel from "./levels/SampleLevel";
import World from "../engine/world";
import Player from "../engine/player";
import loader from "../engine/loader";
import physic from "../engine/physic";
import ProximityScreenRenderer from '../engine/proxRender'
import CharacterController from "../character/CharacterController";

class LevelController {
    constructor(scene, params) {
        this._scene = scene;
        this._current_level = 0;
        this._levels = [];
        this._init(params);
        this._mouse_listener = params.mouse_listener;
    }

    async _init(params) { //make async
        this._controls = new CharacterController(params);
        
        // CREATE SAMPLE LEVEL
        const meshes = await loader('assets/lobby.glb');
        const sample_level = new SampleLevel(meshes, this._controls, this._scene); 
        this._levels.push(sample_level);

        //WORLD + PLAYER
        this._world = new World(meshes.visuals, meshes.colliders, physic);
        this._scene.add(this._world);
        console.log(params);

        this._render_scene();
    }

    _render_scene() {
        this._scene.add(this._world);
    }

    update(time_elapsed_in_seconds) {
        // this._controls._target.update();
        
        if (this._controls) {
            if (this._mouse_listener) {
                console.log(this._mouse_listener._mouse_movement_x);
                this._controls.update(time_elapsed_in_seconds, this._mouse_listener._mouse_movement_x);
            }
        }

        if (this._levels[this._current_level]) {
            this._levels[this._current_level].update();
        }

        
    }
}

export default LevelController