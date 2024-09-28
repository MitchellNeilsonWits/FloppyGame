import * as THREE from 'three';
import Level from "../Level";
import PushableBox from '../../components/pushable_box/PushableBox';

class SampleLevel extends Level {
    constructor() {
        super();
        this.set_level();
    }
    
    set_level() {
        this._box_a = new PushableBox();
        this._level = this._box_a.get_object();
        console.log(this._level)
    }

    get_level() {
        return this._level;
    }
}

export default SampleLevel