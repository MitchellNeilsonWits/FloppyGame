import SampleLevel from "./levels/SampleLevel";

class LevelController {
    constructor(scene) {
        this._scene = scene;
        this._current_level = 0;
        this._levels = [];
        this._init();
    }

    _init() {
        const sample_level = new SampleLevel(); 
        this._levels.push(sample_level);

        this._render_scene();
    }

    _render_scene() {
        console.log(this._levels[0].get_level())
        this._scene.add(this._levels[this._current_level].get_level());
    }
}

export default LevelController