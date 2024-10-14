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
import { Quaternion, Vector3 } from "three";
import { get_cartesian_angle_from_rotation } from "../common/Angle";

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

        // Define the levels to be played
        this._current_level = 0;
        this._level = null;


        // Initialize
        this._init(params);
    }

    reset_current_level() {
        const starting_positions = this._level.get_starting_positions();
        this._controls._target.rigidBody.setTranslation(starting_positions.player_position);
        this._controls._velocity = new Vector3(0,0,0);
        this._camera.set_rotation((Math.PI  + get_cartesian_angle_from_rotation(starting_positions.player_rotation)));
        this._controls.busy_loading_disk = false;
        
        // Take off disk being held and loaded disk
        if (this._controls._holding_disk) {
            console.log(this._controls._holding_disk);
            // this._controls._holding_disk._interactable_object
        }

        this._controls.power_controller.clear_loaded_disk();
        this._controls._holding_disk = null;

        const disks = this._level.get_disks();
        console.log(disks);
        for (const key of Object.keys(disks)) {
            const disk_object = disks[key];
            console.log(disk_object);
            this._level._level.remove(disk_object);
            this._level._level.add(disk_object);
            disk_object.rigidBody.setTranslation(starting_positions.disk_positions[`${key}`])
        }

        // RESET VELOCITY OF PLAYER
        this._controls._velocity.x = 0;
        this._controls._velocity.y = 0;
        this._controls._velocity.z = 0;

        console.log(starting_positions);
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
            },1000);
            console.log("DONE RENDERING THE SCENE!");
        });
        
        
    }

    change_level(level_number) {
        this.loading_screen.set_text("Creating level");
        this.loading_screen.set_progress(40);
        switch (level_number) {
            case 0:
                this._level = new LobbyLevel(this._scene);
                break;
        
            case 1:
                this._level = new TutorialLevel(this._scene);
                break;

            default:
                break;
        }

        this._render_scene();
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