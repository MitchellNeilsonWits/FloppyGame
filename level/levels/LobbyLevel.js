import * as THREE from 'three';
import Level from "../Level";
import ProximityScreenRenderer from '../../engine/proxRender';

import physic from '../../engine/physic';
import World from '../../engine/world';
// import loader from "../engine/loader";
import loadAssets from '../../engine/loader';
import light from '../../lighting/point_lights';
import directional_light from '../../lighting/directional_lights';

class LobbyLevel extends Level {

    constructor(scene) {
        super();
        this._scene = scene;
    }

    // Function to set the components for the scene
    async _set_components(character_controller, scene) {
        // Load the meshes for the lobby
        const meshes = await loadAssets('assets/lobby_lights.glb');

        // Create the physics for the world
        this._world = new World(meshes.visuals, meshes.colliders, physic);

        // CREATE THE PROXIMITY RENDERER
        // -- finds position of character to load screen
        this._prox = new ProximityScreenRenderer(character_controller, scene );

        // Set meshes
        this._level = new THREE.Group();
        for (const mesh of meshes.colliders) {
            this._level.add(mesh);
        }

        // Set lighting
        this._lights = []
        for (const light of meshes.pointLights) {
            const pos = light.position;
            const colour = light.color;
            const intensity = light.intensity/1000; // adjust lighting for three js
            const distance = light.distance;

            const point_light = new THREE.PointLight( colour, intensity, distance );
            point_light.position.set( pos.x, pos.y, pos.z );

            this._lights.push(point_light);
        }
    }
    
    async set_level(character_controller) {
        await this._set_components(character_controller, this._scene);
    }

    render_level() {
        // Render the level's components
        this._scene.add(this._level);

        // Render the lights for the level
        for (const light of this._lights) {
            this._scene.add(light);
        }
    }

    update() {
        // Update proximity of player to screen
        if (this._prox) {
            this._prox.update();
        }
    }
}

export default LobbyLevel