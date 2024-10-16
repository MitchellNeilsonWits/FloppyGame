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
import TutorialLevel from "./levels/TutorialLevel";
import LoadingScreen from "../loading_screen/LoadingScreen";
import { Quaternion, Scene, Vector3 } from "three";
import { get_cartesian_angle_from_rotation } from "../common/Angle";
import hud from "../hud/Hud";

class LevelController {
    constructor(params) {
        this.loading_screen = new LoadingScreen();
        this.loading_screen.set_text("Setting up parameters");
        this.loading_screen.set_progress(0);
        this.loading_screen.show_screen();

        // Define our scene, camera, mouse listener and menu
        this._scene = params.scene;
        this._camera = params.camera;
        this._mouse_listener = params.mouse_listener;
        this._menu = params.menu;
        this.reset_current_level_bound = this.reset_current_level.bind(this);
        this._menu.set_restart_level_function(this.reset_current_level_bound);

        this.change_level = this.change_level_unbound.bind(this);

        // Define the levels to be played
        this._current_level = 0;
        this._level = null;


        // Initialize
        this._init(params);
    }

    reset_current_level() {
        // ---------- RESET PLAYER ----------
        const starting_positions = this._level.get_starting_positions();
        this._controls._target.rigidBody.setTranslation(starting_positions.player_position);
        this._controls._velocity = new Vector3(0,0,0);
        this._camera.set_rotation((Math.PI  + get_cartesian_angle_from_rotation(starting_positions.player_rotation)));
        this._controls.busy_loading_disk = false;
        // ------------------------------

        // RESET VELOCITY OF PLAYER
        this._controls._velocity.x = 0;
        this._controls._velocity.y = 0;
        this._controls._velocity.z = 0;
        
        // ---------- RESET DISKS ----------
        // Take off disk being held and loaded disk
        if (this._controls._holding_disk) {
            console.log(this._controls._holding_disk);
            this._controls._holding_disk.interactable_object.end_interaction(this._controls, this._controls._holding_disk, this._level._level);
        }
        const loaded = this._controls.power_controller.get_loaded_disk(); 
        if (loaded) {
            loaded.interactable_object.end_interaction(this._controls, loaded, this._level._level);
        }

        this._controls.power_controller.clear_loaded_disk();
        this._controls._holding_disk = null;

        const disks = this._level.get_disks();
        console.log(disks);
        for (const key of Object.keys(disks)) {
            const disk_object = disks[key];
            disk_object.reset_velocity();
            this._level._level.remove(disk_object);
            this._level._level.add(disk_object);
            
            disk_object.rigidBody.setTranslation(starting_positions.disk_positions[`${key}`]);
            disk_object.position.copy(disk_object.rigidBody.translation());
        }
        // ------------------------------
        
        // ---------- RESET PUSHBOXES ----------
        for (const pushbox of this._level._pushboxes) {
            pushbox.object.rigidBody.setTranslation(starting_positions.pushbox_positions[pushbox.id]);
            pushbox.object.position.copy(pushbox.object.rigidBody.translation());
        }
        // ------------------------------
        
    }

    async _init(params) {
        this.loading_screen.set_text("Creating character");
        this.loading_screen.set_progress(10);

        // Character: only load in once
        this._controls = new CharacterController(params);
        this._controls.initialize_player(() => {

            // Render the scene
            this.change_level(0);
        
        });
    }

    async _render_scene() {
        // this._controls.set_dynamic_objects()
        // Set the level: add components in
        this.loading_screen.set_text("Setting up level components");
        this.loading_screen.set_progress(50);
        await this._level.set_level(this._controls, this._camera, () => {
            this.loading_screen.set_text("Rendering level");
            this.loading_screen.set_progress(70);

            // Render the level: add to the scene
            this._level.render_level();
            
            this.loading_screen.set_text("Extracting important objects");
            this.loading_screen.set_progress(80);
            // Get the dynamic objects of the level
            this._dynamic_objects = this._level.get_dynamic_objects();
            
            this.loading_screen.set_progress(90);
            // Get the interactable objects of the level
            this._interactable_objects = this._level.get_interactable_objects();

            this.loading_screen.set_progress(95);
            // Get the ground objects of the level
            this._ground_objects = this._level.get_ground_objects();
            // console.log(this._ground_objects);

            this.loading_screen.set_text("Finalizing");
            this.loading_screen.set_progress(99);
            
            // Set the starting state of the level
            // this.level_start_state.player_position.copy(this._controls._target.rigidBody.translation());
            // this.level_start_state.player_rotation.copy(this._controls._target.rigidBody.rotation());            
            
            this._controls.set_level(this._level.get_level());


            setTimeout(() => {
                this.loading_screen.hide_screen();
                hud.reset_hud();
            },1000);
            console.log("DONE RENDERING THE SCENE!");
        });
        
        
    }

    change_level_unbound(level_number) {
        // this._scene.clear(); // clear the scene
        if (this._level) {
            const prev_level = this._level;
            this._level = null;
            console.log(this);
            // need to clear all colliders apart from character
            prev_level.non_player_colliders.forEach(collider => {
                physic.removeCollider(collider);
            });

            // prev_level.non_player_rigid_bodies.forEach(rigidBody => {
            //     // console.log(object);
            //     // physic.removeRigidBody(object.rigidBody);
            //     physic.removeRigidBody(rigidBody);
            // });
            

            prev_level._world.clear();
            prev_level._level.clear();
        }
        if (!this.loading_screen.is_shown) {
            this.loading_screen.show_screen();
        }
        this.loading_screen.set_text("Creating level");
        this.loading_screen.set_progress(40);
        switch (level_number) {
            case 0:
                this._level = new LobbyLevel(this._scene, this.change_level);
                break;
        
            case 1:
                this._level = new TutorialLevel(this._scene);
                break;

            default:
                break;
        }

        this._render_scene();
        // console.log(this._scene);
    }

    update(time_elapsed_in_seconds) {

        if (this._controls.height_controller) {
            this._controls.height_controller.update(this._ground_objects);
        }

        // Update the character (only if we have a character and active mouse listener)
        if (this._controls) {
            if (this._mouse_listener) {
                this._controls.update(time_elapsed_in_seconds, this._mouse_listener._mouse_movement_x,  this._mouse_listener._mouse_movement_y);
            }
        }

        // Update the level that is currently active
        if (this._level) {
            this._level.update(time_elapsed_in_seconds);
        }

        if (this._controls._interaction_controller) {
            this._controls._interaction_controller.update(this._interactable_objects);
        }
        
    }
}

export default LevelController