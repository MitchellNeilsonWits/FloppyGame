/**
 * File: FinaleLevel.js
 * 
 * Description:
 *  Finale Level for the game
 */

import Level from "../Level";
import loadAssets from '../../engine/loader';
import { Euler, Vector3 } from "three";
import { Quaternion } from "cannon";
import FootstepSound from "../../engine/footSteps";
import * as THREE from 'three';
import FinalePlatform from "../../finale_platform/FinalePlatform";
import music_controller from '../../music/MusicController';

class FinaleLevel extends Level {

    constructor(scene, controller, audioListener, audioLoader, character_controller) {
        super();
        this._scene = scene;
        this.level_controller = controller;
        this.audioListener = audioListener;
        this.audioLoader = audioLoader;
        this.level_controller = controller;
        this.character_controller = character_controller;
    }

    // Function to set the components for the scene
    async set_level(character_controller, camera, _callback) {
        // SET NPC LINES
        this.npc_lines = [
            "Congratulations, Floppy...",
            "You have completed all tasks, and have proven yourself as an evolved robot.",
            "You have shown that you have mastered the basics of your Floppy Drive, that you can focus despite the environment, and that you can solve the most difficult of challenges...",
            "Thus, you have proven that you can survive in the real world",
            "Your motherchip will now be loaded with the drivers necessary for real world operation.",
            "Good luck....",
            "Just step on the platform to my left to switch off your motherboard so it can be adjusted"
        ]

        // Load the meshes for the lobby and load the base of the level's scene and other objects
        const meshes = await loadAssets('assets/finale.glb');
        
        await this.base_load(this, meshes, character_controller, camera, this._scene);
        this.lights_added = false;
        this.lights = meshes.finale_point_lights;
        this.platform_mesh = meshes.finale_platform;
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

        this.time_passed = 0;

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
        music_controller.pause_music();
        music_controller.load_music('sounds/Outro.mp3');
        music_controller.play_music();
        music_controller.change_volume(0.1);
        this.render_main_level_components(this);
        this.add_lights();
        this.add_platform();
    }

    // Add the finale platform
    add_platform() {
        const platform = new FinalePlatform(this.character_controller, this.platform_mesh, this);
        this.platform = platform;
        this._ground_colliders.push(platform.collider);

        this._level.add(platform);
    }

    // Add level lights (to be switched on one by one)
    add_lights() {
        for (const key of Object.keys(this.lights)) {
            const light = this.lights[key];

            const pos = light.position;
            const colour = light.color;
            this.light_on = light.intensity/1000
            const intensity = 0; // adjust lighting for three js
            const distance = light.distance;

            const point_light = new THREE.PointLight( colour, intensity, distance );
            point_light.position.set( pos.x, pos.y, pos.z );
            point_light.castShadow = true;
            this.lights[key] = point_light;

            this._level.add(point_light);
            this._lights.push(point_light);
        }
        this.lights_added = true;
        
    }

    // Update lights: switch on incrementally
    update_lights() {
        if (this.time_passed >= 2) {
            this.lights[1].intensity = this.light_on;
        }
        if (this.time_passed >= 3) {
            this.lights[2].intensity = this.light_on;
        }
        if (this.time_passed >= 4) {
            this.lights[3].intensity = this.light_on;
        }
        if (this.time_passed >= 5) {
            this.lights[4].intensity = this.light_on;
        }
    }


    // Function to update the level state
    update(time_elapsed_in_seconds) {
        // ---------------- LEVEL SPECIFIC UPDATES --------------------
        if (this._footstepSound) {
            this._footstepSound.update();  // Update footstep sound system
        }
        if (this.lights_added) {
            this.time_passed = this.time_passed + time_elapsed_in_seconds;
            this.update_lights();
        }
        if (this.platform) {
            this.platform.update();
        }
        // -------------------------------------------------------------

        // Call main update function to handle standard level updates
        this.main_update(this, time_elapsed_in_seconds);
    }
    
}

export default FinaleLevel