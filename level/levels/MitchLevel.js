import Level from "../Level";
import loadAssets from '../../engine/loader';
import { AmbientLight, Euler, Vector3 } from "three";
import { Quaternion } from "cannon";

class MitchLevel extends Level {

    constructor(scene) {
        super();
        this._scene = scene;
    }

    // Function to set the components for the scene
    async set_level(character_controller, camera, _callback) {
        this.npc_lines = [
            "Welcome to the SECOND simulation!",
            "Here, we will be testing if you can keep your focus regardless of the environment",
            "Although there is wonderful scenery around, you need to be able to focus on the task",
            "So don't get distracted.",
            "Your first disk is behind you. Good lucK!"
        ]

        // Load the meshes for the lobby and load the base of the level's scene and other objects
        const meshes = await loadAssets('assets/islands_optmized_with_clouds_compressed.glb');
        
        await this.base_load(this, meshes, character_controller, camera, this._scene);
        
        const ambient_light = new AmbientLight(0xffffff, 0.2);
        this._level.add(ambient_light);
        // this._scene.background = new CubeTe
        
        // --------------- DEFINE LEVEL SPECIFIC OBJECTS HERE ---------------------
        
        // -----------------------------------------------------------------------
        _callback();
    }

    

    // ------------------- FUNCTIONS TO GET OBJECTS EXTERNALLY -------------------
    get_disks() {
        return this._disks;
    }
    
    get_starting_positions() {
        return this.level_start_state;
    }
    
    get_dynamic_objects() {
        return this._dynamic_objects;
    }

    get_interactable_objects() {
        return this._interactable_objects;
    }

    get_level() {
        return this._level;
    }

    get_ground_objects() {
        return this._ground_colliders;
    }
    // --------------------------------------------------------------------------

    render_level() {
        this.render_main_level_components(this);
    }

    update(time_elapsed_in_seconds) {
        // ---------------- LEVEL SPECIFIC UPDATES --------------------
        
        // -------------------------------------------------------------

        // Call main update function to handle standard level updates
        this.main_update(this, time_elapsed_in_seconds);
    }
    
}

export default MitchLevel