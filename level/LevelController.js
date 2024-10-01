import SampleLevel from "./levels/SampleLevel";
import World from "../engine/world";
import Player from "../engine/player";
import loader from "../engine/loader";
import physic from "../engine/physic";

class LevelController {
    constructor(scene) {
        this._scene = scene;
        this._current_level = 0;
        this._levels = [];
        this._init();
    }

    async _init() { //make async
        const meshes = await loader('assets/test5.glb');
        const sample_level = new SampleLevel(meshes); 
        this._levels.push(sample_level);

        //WORLD + PLAYER
        this._world = new World(meshes.visuals, meshes.colliders, physic);
        this._player = new Player(meshes.players[0], physic);
        // console.log(this._player);

        this._render_scene();
    }

    _render_scene() {
        console.log(this._levels[0].get_level())
        this._scene.add(this._levels[this._current_level].get_level());
        this._scene.add(this._world);
        this._scene.add(this._player);
    }
}

export default LevelController