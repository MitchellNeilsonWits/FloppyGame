import * as THREE from 'three';
import Level from "../Level";
import PushableBox from '../../components/pushable_box/PushableBox';
import ProximityScreenRenderer from '../../engine/proxRender';

class SampleLevel extends Level {
    constructor(meshes, character_controller, scene) {
        super();

        // CREATE THE PROXIMITY RENDERER
        // -- finds position of character to load screen
        this._prox = new ProximityScreenRenderer(character_controller, scene );
        
        this.set_level(meshes);
    }
    
    set_level(meshes) {
        this._level = new THREE.Group();
        console.log(meshes)
        for (const mesh of meshes.colliders) {
            // for (const mesh of mesh_group) {
                console.log(mesh)
                this._level.add(mesh);
            // }
        }
        for (const mesh of meshes.players) {
            // for (const mesh of mesh_group) {
                console.log(mesh)
                this._level.add(mesh);
            // }
        }
        for (const mesh of meshes.visuals) {
            // for (const mesh of mesh_group) {
                console.log(mesh)
                this._level.add(mesh);
            // }
        }
    }

    get_level() {
        return this._level;
    }

    update() {
        // Update proximity of player to screen
        if (this._prox) {
            this._prox.update();
        }
    }
}

export default SampleLevel