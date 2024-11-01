/**
 * File: IntoTheWildLevel.js
 * 
 * Description:
 *  Into the wild level
 */

import Level from "../Level";
import loadAssets from '../../engine/loader';
import { Euler, Vector3 } from "three";
import { Quaternion } from "cannon";
import FootstepSound from "../../engine/footSteps";
import music_controller from '../../music/MusicController';

class IntoTheWildLevel extends Level {

    constructor(scene, controller, audioListener, audioLoader) {
        super();
        this._scene = scene;
        this.level_controller = controller;
        this.audioListener = audioListener;
        this.audioLoader = audioLoader;
        this.level_controller = controller;
    }

    // Function to set the components for the scene
    async set_level(character_controller, camera, _callback) {
        this.npc_lines = [
            "Welcome to your FIRST simulation!",
            "This simulation is aimed at testing if you will be able to complete basic tasks",
            "To test this, we laid out some simple graphics and puzzles in this simulation.",
            "Your three disks have been spread across the simulation",
            "Heres a hint: the final platform is hidden inside a SMALL object",
            "Good luck!"
        ]

        // Load the meshes for the lobby and load the base of the level's scene and other objects
        const meshes = await loadAssets('assets/intothewildlevel_v2.glb');
        
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
        music_controller.load_music('sounds/MartinLevel.mp3');
        music_controller.play_music();
        music_controller.change_volume(0.1);
        this.render_main_level_components(this);
    }

    // Function to handle level updates
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

export default IntoTheWildLevel