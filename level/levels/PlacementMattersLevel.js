import Level from "../Level";
import loadAssets from '../../engine/loader';
import { Euler, Vector3 } from "three";
import { Quaternion } from "cannon";
import FootstepSound from "../../engine/footSteps";
import * as THREE from 'three';
import Button from "../../button/Button";
import InteractableButton from "../../button/InteractableButton";
import timer from "../../timer/Timer";
import physic from "../../engine/physic";
import Platform from "../../platform/Platform";
import music_controller from '../../music/MusicController';

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
        // get character controller
        this.character_controller = character_controller;

        // SET NPC LINES
        this.npc_lines = [
            "Welcome! A skill much needed for success is to manage where your disks are placed. This will be your hardest and final challenge. ",
            "In this level, you will see three different platforms. One for each power, strength, flight, and shrink.",
            "The platforms will light up in a specific order in a race against time. You must stand on the lit up platform, with the corresponding power for that platform, to gain time.",
            "If your time runs out, you fail the challenge. Remember... placement matters.",
            "To begin the challenge, press the button on my right. Good luck!"
        ]

        // Load the meshes for the lobby and load the base of the level's scene and other objects
        const meshes = await loadAssets('assets/Level3_placement_matters_optimized_v3.glb');
        this.placement_matters_meshes = meshes.placement_matters_meshes;
        await this.base_load(this, meshes, character_controller, camera, this._scene);
        this.load_pml_objects();
        this.setup_ending_screen();
        
        // --------------- DEFINE LEVEL SPECIFIC OBJECTS HERE ---------------------
        this._footstepSound = new FootstepSound(
            character_controller,
            this._scene,
            this.audioListener,
            this.audioLoader,
            'sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3', // Path to the footstep sound file
            'sounds/JumpFInal.mp3',
            'sounds/JumpFInal.mp3',
            'sounds/footSteponGrass.mp4',
            'sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3',
            'sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3'
        );
        this.end_game = this.end_game_unbound.bind(this);
        // this._skybox = meshes.skybox;
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
        music_controller.load_music('sounds/LukeLevel.mp3');
        music_controller.play_music();
        music_controller.change_volume(0.1);
        this.render_main_level_components(this);
    }

    failed() {
        this.level_controller.reset_current_level();
    }

    reset_level() {
        this.current_power_order_index = 0;
        this.time_left = 35;
        this.button.pressed = false;
        timer.hide_timer();
        this.strength_light.intensity = this.original_light_level;
        this.flight_light.intensity = this.original_light_level;
        this.shrink_light.intensity = this.original_light_level;
    }

    // -------------------- LEVEL SPECIFIC FUNCTIONS -----------------------------
    load_pml_objects() {
        // console.log("-------------LOADING PML OBJECTS-------------");
        timer.hide_timer();
        // handle lights
        const strength_light_mesh = this.placement_matters_meshes.strength_light;
        const flight_light_mesh = this.placement_matters_meshes.flight_light;
        const shrink_light_mesh = this.placement_matters_meshes.shrink_light;
        // create and place in scene
        this.original_light_level = strength_light_mesh.intensity/100; 
        this.light_on = strength_light_mesh.intensity/100;
        this.light_off = 0;
        const stl = new THREE.PointLight(strength_light_mesh.color, strength_light_mesh.intensity/1000, 0);
        const fl = new THREE.PointLight(flight_light_mesh.color, flight_light_mesh.intensity/1000, 0);
        const shl = new THREE.PointLight(shrink_light_mesh.color, shrink_light_mesh.intensity/1000, 0);
        stl.position.copy(strength_light_mesh.position);
        fl.position.copy(flight_light_mesh.position);
        shl.position.copy(shrink_light_mesh.position);


        this.strength_light = stl;
        this.flight_light = fl;
        this.shrink_light = shl;

        this._level.add(this.strength_light);
        this._level.add(this.flight_light);
        this._level.add(this.shrink_light);


        // handle button
        this.button = new Button(this.placement_matters_meshes.button);
        this.button.set_button();
        this._level.add(this.button); 
        this.non_player_colliders.push(this.button.collider);
        this.non_player_rigid_bodies.push(this.button.rigidBody);

        const button_interactable = new InteractableButton('Press E to start the timer', this.button);

        this._interactable_objects[`pml_button`] = {
            name: `pml_button`,
            object: this.button,
            type: 'static',
            interactable_object: button_interactable
        }
    
        // console.log(this.button);
        this.time_left = 20;
        this.current_power_order_index = 0;
        this.current_active_power = null;
        // console.log("------------------------------------------");

        // Create the platforms
        // -- strength
        const strength_mesh = this.placement_matters_meshes.strength_platform;
        this.strength_platform = new Platform(strength_mesh);
        this.strength_platform.set_platform();
        this._level.add(this.strength_platform);
        this._ground_colliders.push(this.strength_platform.collider);
        // -- flight
        const flight_mesh = this.placement_matters_meshes.flight_platform;
        this.flight_platform = new Platform(flight_mesh);
        this.flight_platform.set_platform();
        this._level.add(this.flight_platform);
        this._ground_colliders.push(this.flight_platform.collider);
        // -- shrink
        const shrink_mesh = this.placement_matters_meshes.shrink_platform;
        this.shrink_platform = new Platform(shrink_mesh);
        this.shrink_platform.set_platform();
        this._level.add(this.shrink_platform);
        this._ground_colliders.push(this.shrink_platform.collider);

        this.setup_pml_order();
    }

    setup_pml_order() {
        this.changed = true;

        // Order of powers to light up
        this.power_order = [
            {
                id: 0,
                power: "shrink",
                time_added: 15,
                set_time: false
            },
            {
                id: 1,
                power: "flight",
                time_added: 75,
                set_time: true
            },
            {
                id: 2,
                power: "strength",
                time_added: 25,
                set_time: true
            },
            {
                id: 3,
                power: "flight",
                time_added: 10,
                set_time: false
            },
            {
                id: 4,
                power: "shrink",
                time_added: 35,
                set_time: false
            },
            {
                id: 5,
                power: "strength",
                time_added: 35,
                set_time: false
            },
            {
                id: 6,
                power: "shrink",
                time_added: 10,
                set_time: false
            },
            {
                id: 6,
                power: "flight",
                time_added: 25,
                set_time: true
            },
            {
                id: 6,
                power: "strength",
                time_added: 0,
                set_time: false
            },

        ]

        this.current_active_power = this.power_order[0];

    }

    setup_ending_screen() {
        this.game_completed = document.createElement('div');
        this.game_completed.style.position = 'absolute';
        this.game_completed.style.top = '50%';
        this.game_completed.style.left = '50%';
        this.game_completed.style.transform = 'translate(-50%, -50%)';
        this.game_completed.style.padding = '20px';
        this.game_completed.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.game_completed.style.color = 'white';
        this.game_completed.style.fontSize = '24px';
        this.game_completed.style.textAlign = 'center';
        this.game_completed.style.zIndex = '4';
        this.game_completed.style.display = 'flex';
        this.game_completed.style.flexDirection = 'column';
        this.game_completed.innerHTML = '<p>Congratulations, Floppy! You have completed your challenges!</p> <p>Press any key to go continue...</p>';
    }

    end_game_unbound() {
        // console.log("next level");
        this.hide_end_screen();
    }

    show_end_screen() {
        this.message_shown = true;
        document.body.appendChild(this.game_completed);

        window.addEventListener('keypress', this.end_game)
    }

    hide_end_screen() {
        this.message_shown = false;
        document.body.removeChild(this.game_completed);
    
        window.removeEventListener('keypress', this.end_game)
    }

    update_game_state(time_elapsed_in_seconds) {
        if (this.time_left <= 0) {
            this.failed();
        }

        // if (this.button.pressed && (this.time_left > 0) && this.current_active_power) {
        if (this.button.pressed && this.current_active_power) {
            this.time_left  = this.time_left - time_elapsed_in_seconds;
            timer.update_time(Math.round(this.time_left * 100)/100);
        } else {
            return
        }

        // Get the currently active power
        const active = this.power_order[this.current_power_order_index];
        const power_name = active.power;

        if (this.changed) {
            // If the active power has changed, update the lights
            this.current_active_power = active;
            
            timer.change_active_platform(active.power, this.current_power_order_index+1 < this.power_order.length ? this.power_order[this.current_power_order_index+1].power : "none");
            
            // Change lights accordingly
            if (power_name === "strength") {
                this.strength_light.intensity = this.light_on;
                this.flight_light.intensity = this.light_off;
                this.shrink_light.intensity = this.light_off;
                // this.strength_light.
            } else if (power_name === "flight") {
                this.strength_light.intensity = this.light_off;
                this.flight_light.intensity = this.light_on;
                this.shrink_light.intensity = this.light_off;
            } else if (power_name === "shrink") {
                this.strength_light.intensity = this.light_off;
                this.flight_light.intensity = this.light_off;
                this.shrink_light.intensity = this.light_on;
            }

            this.changed = false;
        }


        // We check for player contact with active platform
        var collider;

        if (power_name === "strength") {
            collider = this.strength_platform.collider;
        } else if (power_name === "flight") {
            collider = this.flight_platform.collider;
        } else if (power_name === "shrink") {
            collider = this.shrink_platform.collider;
        } 

        var touched_platform = false;
        physic.contactPair(this.character_controller._target.collider, collider, (manifold, flipped) => {
            
            // Now check that the normal of contact is directly up
            const normal = manifold.normal();
            const rounded = {
                x: Math.abs(Math.round(normal.x)),
                y: Math.abs(Math.round(normal.y)),
                z: Math.abs(Math.round(normal.z)),
            }

            if (rounded.x == 0 && rounded.y == 1 && rounded.z == 0) {
                if (this.character_controller.power_controller.power === active.power) {
                    touched_platform = true;
                    return;
                }
            }                
        })

        if (touched_platform) {
            this.changed = true;
            // var updated_time = this.time_left + active.time_added;
            if (active.set_time) {
                var updated_time = active.time_added;
            } else {
                var updated_time = this.time_left + active.time_added;
            }

            if (updated_time > timer.max_time) {
                updated_time = timer.max_time;
            }
            this.time_left = updated_time;
            this.current_power_order_index = this.current_power_order_index + 1;

            if (this.current_power_order_index === this.power_order.length) {
                // FINISHED THE GAME
                this.current_active_power = null;
                timer.hide_timer();
                this.strength_light.intensity = this.original_light_level;
                this.flight_light.intensity = this.original_light_level;
                this.shrink_light.intensity = this.original_light_level;

                // console.log("CHALLENGE COMPLETED!");
                this.show_end_screen();
            }
        }
    }

    // ---------------------------------------------------------------------------

    update(time_elapsed_in_seconds) {
        // ---------------- LEVEL SPECIFIC UPDATES --------------------
        if (this._footstepSound) {
            this._footstepSound.update();  // Update footstep sound system
        }

        this.update_game_state(time_elapsed_in_seconds);

        // this._skybox.rotateX(Math.PI/10000);
        // this._skybox.rotateY(-Math.PI/10000);
        // this._skybox.rotateZ(Math.PI/10000);
        // -------------------------------------------------------------

        // Call main update function to handle standard level updates
        this.main_update(this, time_elapsed_in_seconds);
    }
    
}

export default PlacementMattersLevel