/**
 * File: LobbyLevel.js
 * 
 * Description:
 *  Lobby level
 */

import Level from "../Level";
import ProximityScreenRenderer from '../../engine/proxRender';
import loadAssets from '../../engine/loader';
import TutRender from '../../engine/tutRender';
import FootstepSound from '../../engine/footSteps';
import LevelSelectRender from '../../engine/levelSelector';
import music_controller from '../../music/MusicController';
import meme from '../../engine/meme.js';

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

        // SET NPC LINES
        this.npc_lines = [
            "Welcome Floppy!",
            "My name is N.P.C. I am here to guide you around simulations. You can talk to me by pressing 'E'!",
            "You might wonder why you are here, and your purpose...",
            "You are a robot designed with a very specific ability",
            "Notice the Floppy Disk Reader on your back: this reader is internally wired to give you impressive powers",
            "When you load a Floppy Disk of a specific type, the reader is able to format the contents to binary, and installs drivers that make you capable of extraordinary things!",
            "So far, we have designed 3 disks: strength, flight and shrink",
            "To pick up a disk, walk close to one, and press E. You can see which disk you are holding at the bottom right of your screen",
            "Then, whilst holding the disk, press Q to load it into your Reader. This will activate your power. Note that it will install the drivers, so the first time you load it, your GPU may freeze for a second or two",
            "You can see the currently loaded disk at the bottom left of the screen",
            "You can hold a separate disk while another one is loaded in your reader. This is important for solving the puzzles you are soon to face",
            "If you are holding a disk while one is loaded, pressing Q will swap the disks",
            "To drop a disk in your hands, simply press F. To unload a disk, press Z",
            "This is the Lobby Mainframe, you can access all the levels from here!",
            "We have placed the disks here for you to test out",
            "I will see you around! Look for me at the start of each level for some insight into the level",
            "You will need to solve each level to prove that you can evolve and survive in the real world. Good luck Floppy!"
        ]
        

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
            'sounds/JumpFInal.mp3',
            'sounds/footSteponGrass.mp4',
            'sounds/zapsplat_foley_footstep_single_boys_sneaker_wood_004_50920.mp3',
            'sounds/zapsplat_foley_rock_heavy_chunk_set_down_onto_rubble_002_110534.mp3'
        );

        // Select level menu
        this._levelSelectRenderer = new LevelSelectRender(character_controller, this._scene, (levelNumber) => {
            this.change_level(levelNumber);
        });

        // this._meme = new meme(character_controller, this._scene);
        

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
        music_controller.load_music('sounds/TitleSong.mp3');
        music_controller.play_music();
        music_controller.change_volume(0.1);
        return this._ground_colliders;
    }
    // --------------------------------------------------------------------------

    render_level() {
        this.render_main_level_components(this);
    }

    reset_level() {
        this._levelSelectRenderer.hideLevelSelectScreen();
        this._tutorialRenderer.hideTutorialMessage();
    }

    update(time_elapsed_in_seconds) {
        // ---------------- LEVEL SPECIFIC UPDATES --------------------
        // Update proximity of player to screen
        if (this._prox) {
            this._prox.update();
        }

        // Tutorial level message
        if (this._tutorialRenderer) {
            this._tutorialRenderer.update();
        }

        //Audio update
        if (this._footstepSound) {
            this._footstepSound.update();  // Update footstep sound system
        }

        //level select screen update
        if (this._levelSelectRenderer) {
            this._levelSelectRenderer.update();
        }

        

        this._skybox.rotateX(Math.PI/10000);
        this._skybox.rotateY(-Math.PI/10000);
        this._skybox.rotateZ(Math.PI/10000);
        // -------------------------------------------------------------

        // Call main update function to handle standard level updates
        this.main_update(this, time_elapsed_in_seconds);
    }

    startTutorial() {
        // console.log("Loading tutorial level...");
    }
    
}

export default LobbyLevel