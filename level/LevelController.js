import SampleLevel from "./levels/SampleLevel";
import World from "../engine/world";
import Player from "../engine/player";
import loader from "../engine/loader";
import physic from "../engine/physic";
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
        const meshes = await loader('assets/plane.glb');
        const sample_level = new SampleLevel(meshes); 
        this._levels.push(sample_level);

        //WORLD + PLAYER
        this._world = new World(meshes.visuals, meshes.colliders, physic);
        this._scene.add(this._world);
        console.log(params);
        this._controls = new CharacterController(params);

        // this._player = new Player(meshes.players[0], physic);
        // console.log(this._player);

        this._render_scene();
    }

    _render_scene() {
        console.log(this._levels[0].get_level())
        // this._scene.add(this._levels[this._current_level].get_level());
        this._scene.add(this._world);
        // this._scene.add(this._controls._player);
    }

    update(time_elapsed_in_seconds) {
        // this._controls._target.update();
        
        if (this._controls) {
            if (this._mouse_listener) {
                console.log(this._mouse_listener._mouse_movement_x);
                this._controls.update(time_elapsed_in_seconds, this._mouse_listener._mouse_movement_x);
            }
        }
    }
}

export default LevelController