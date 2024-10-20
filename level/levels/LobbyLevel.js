import Level from "../Level";
import ProximityScreenRenderer from '../../engine/proxRender';
import loadAssets from '../../engine/loader';
import TutRender from '../../engine/tutRender';
import FootstepSound from '../../engine/footSteps';


/**
 * Thank you to the following artists whose work was used in this project:
 * CC:
 * 
 * skybox texture:
 *  https://www.deviantart.com/cosmicspark/art/Blender-Space-Skybox-15-865292177
 * 
 */
class LobbyLevel extends Level {



    constructor(scene, change_level, audioListener, audioLoader, controller) {
        super();
        this._scene = scene;
        this.change_level = change_level;
        this.audioListener = audioListener; 
        this.audioLoader = audioLoader;  
        this.audioListener = audioListener; 
        this.audioLoader = audioLoader;  
        this.level_controller = controller;
    }

    // Function to set the components for the scene
    async set_level(character_controller, camera, _callback) {
        // Load the meshes for the lobby and load the base of the level's scene and other objects
        const meshes = await loadAssets('assets/lobbyFinalAnand.glb');
        await this.base_load(this, meshes, character_controller, camera, this._scene);
        
        // --------------- DEFINE LEVEL SPECIFIC OBJECTS HERE ---------------------
        // CREATE THE PROXIMITY RENDERER
        // -- finds position of character to load screen
        this._prox = new ProximityScreenRenderer(character_controller, this._scene );

        // Instantiate TutRender with a callback to start the tutorial
        this._tutorialRenderer = new TutRender(character_controller, this._scene, () => {
            //this.startTutorial();
           this.change_level(1); 
        });

        this._footstepSound = new FootstepSound(
            character_controller,
            this._scene,
            this.audioListener,
            this.audioLoader,
            'sounds/zapsplat_foley_footstep_single_barefoot_on_metal_step_ladder_rung_013_36282.mp3', // Path to the footstep sound file
            'sounds/zapsplat_multimedia_game_sound_classic_jump_001_41726.mp3',
            'sounds/footSteponGrass.mp4',
            'sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3',
            'sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3'
        );

        // Get the skybox
        this._skybox = meshes.skybox;

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
        // Update proximity of player to screen
        if (this._prox) {
            this._prox.update();
        }

        if (this._tutorialRenderer) {
            this._tutorialRenderer.update();
        }

        //Audio update
        if (this._footstepSound) {
            this._footstepSound.update();  // Update footstep sound system
        }

        //Audio update
        if (this._footstepSound) {
            this._footstepSound.update();  // Update footstep sound system
        }

        this._skybox.rotateX(Math.PI/10000);
        this._skybox.rotateY(-Math.PI/10000);
        this._skybox.rotateZ(Math.PI/10000);
        // -------------------------------------------------------------

        // Call main update function to handle standard level updates
        this.main_update(this, time_elapsed_in_seconds);
    }

    startTutorial() {
        console.log("Loading tutorial level...");
    }
    
}

export default LobbyLevel