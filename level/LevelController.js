import World from "../engine/world";
import Player from "../engine/player";
import loader from "../engine/loader";
import physic from "../engine/physic";
import ProximityScreenRenderer from '../engine/proxRender'
import CharacterController from "../character/CharacterController";
import light from "../lighting/point_lights";
import directional_light from "../lighting/directional_lights";
import loadAssets from "../engine/loader";
import LobbyLevel from "./levels/LobbyLevel";

class LevelController {
    constructor(params) {
        // Define our scene and mouse listener
        this._scene = params.scene;
        this._mouse_listener = params.mouse_listener;

        // Define the levels to be played
        this._current_level = 0;
        this._levels = [];

        // Initialize
        this._init(params);
    }

    async _init(params) {
        // Character: only load in once
        this._controls = new CharacterController(params);
        
        // CREATE SAMPLE LEVEL
        const sample_level = new LobbyLevel(this._scene); 
        this._levels.push(sample_level);

        // Render the scene
        this._render_scene();
    }

    async _render_scene() {
        // this._controls.set_dynamic_objects()
        // Set the level: add components in
        await this._levels[this._current_level].set_level(this._controls);
        // Render the level: add to the scene
        this._levels[this._current_level].render_level();
        // Get the dynamic objects of the level
        this._dynamic_objects = this._levels[this._current_level].get_dynamic_objects();
        
        this._interactable_objects = this._levels[this._current_level].get_interactable_objects();

        this._controls.set_level(this._levels[this._current_level].get_level());
    }

    change_level(level_number) {
        this._level_number = level_number;
        this._render_scene();
    }

    update(time_elapsed_in_seconds) {
        
        // Update the character (only if we have a character and active mouse listener)
        if (this._controls) {
            if (this._mouse_listener) {
                this._controls.update(time_elapsed_in_seconds, this._mouse_listener._mouse_movement_x,  this._mouse_listener._mouse_movement_y);
            }
        }

        // Update the level that is currently active
        if (this._levels[this._current_level]) {
            this._levels[this._current_level].update(time_elapsed_in_seconds);
        }

        if (this._controls._interaction_controller) {
            this._controls._interaction_controller.update(this._interactable_objects);
        }

        
    }
}

export default LevelController