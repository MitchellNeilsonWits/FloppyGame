import Level from "../Level";
import loadAssets from '../../engine/loader';
import { Euler, Vector3 } from "three";
import { Quaternion } from "cannon";
import FootstepSound from "../../engine/footSteps";

class PlacementMattersLevel extends Level {

    constructor(scene, controller, audioListener, audioLoader   ) {
        super();
        this._scene = scene;
        this.level_controller = controller;
        this.audioListener = audioListener;
        this.audioLoader = audioLoader;
    }

    // Function to set the components for the scene
    async set_level(character_controller, camera, _callback) {
        // SET NPC LINES
        this.npc_lines = [
            "line A",
            "line B",
            "line C",
            "line D",
            "line E"
        ]

        // Load the meshes for the lobby and load the base of the level's scene and other objects
        const meshes = await loadAssets('assets/Level3_placement_matters.glb');
        
        await this.base_load(this, meshes, character_controller, camera, this._scene);

        
        // --------------- DEFINE LEVEL SPECIFIC OBJECTS HERE ---------------------
        this._footstepSound = new FootstepSound(
            character_controller,
            this._scene,
            this.audioListener,
            this.audioLoader,
            'sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3', // Path to the footstep sound file
            'sounds/JumpFInal.mp3',
            'sounds/footSteponGrass.mp4',
            'sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3',
            'sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3'
        );
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
        if (this._footstepSound) {
            this._footstepSound.update();  // Update footstep sound system
        }
        // -------------------------------------------------------------

        // Call main update function to handle standard level updates
        this.main_update(this, time_elapsed_in_seconds);
    }
    
}

export default PlacementMattersLevel