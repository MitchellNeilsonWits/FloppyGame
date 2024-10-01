import * as THREE from 'three';
import Level from "../Level";
import PushableBox from '../../components/pushable_box/PushableBox';

class SampleLevel extends Level {
    constructor(meshes) {
        super();
        this.set_level(meshes);
    }
    
    set_level(meshes) {
        this._level = new THREE.Group();
        this._level.add(meshes);
        console.log(this._level)
    }

    get_level() {
        return this._level;
    }
}

export default SampleLevel