import Level from "../Level";
import ProximityScreenRenderer from '../../engine/proxRender';
import loadAssets from '../../engine/loader';
import TutRender from '../../engine/tutRender';

class LobbyLevel extends Level {

    constructor(scene) {
        super();
        this._scene = scene;
    }

    set_character_position(character_controller) {
        const x = 0;
        const y = 5;
        const z = 25;

        character_controller._target.rigidBody.setTranslation({x: x,y: y,z: z}, true);
        character_controller._target.position.x = x;
        character_controller._target.position.y = y;
        character_controller._target.position.z = z;
    }

    // Function to set the components for the scene
    async set_level(character_controller) {
        // Load the meshes for the lobby and load the base of the level's scene and other objects
        const meshes = await loadAssets('assets/lobbyFinal2.glb');
        await this.base_load(this, meshes, character_controller, this._scene);

        // --------------- DEFINE LEVEL SPECIFIC OBJECTS HERE ---------------------
        // CREATE THE PROXIMITY RENDERER
        // -- finds position of character to load screen
        this._prox = new ProximityScreenRenderer(character_controller, this._scene );

        // Instantiate TutRender with a callback to start the tutorial
        this._tutorialRenderer = new TutRender(character_controller, this._scene, () => {
            //this.startTutorial();
        });
        // -----------------------------------------------------------------------
        
        // this.set_character_position(character_controller);
    }

    // ------------------- FUNCTIONS TO GET OBJECTS EXTERNALLY -------------------
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
        // -------------------------------------------------------------

        // Call main update function to handle standard level updates
        this.main_update(this, time_elapsed_in_seconds);
    }

    startTutorial() {
        console.log("Loading tutorial level...");
    }
    
}

export default LobbyLevel