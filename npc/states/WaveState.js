import { AnimationAction } from "three";
import State from "../State";
import * as THREE from 'three';

class WaveState extends State {
    constructor(parent) {
        super(parent);
    }

    get_name() {
        return 'wave';
    }

    enter(prev_state){ 
        // console.log(this);
        const wave_action = this._parent._animations['wave'].action;
        
        if (prev_state) {
            const prev_action = this._parent._animations[prev_state.get_name()].action;
            wave_action.time = 0.0;
            wave_action.enabled = true;
            wave_action.setEffectiveTimeScale(1.0);
            wave_action.setEffectiveWeight(1.0);
            wave_action.setLoop(THREE.LoopRepeat);
            wave_action.crossFadeFrom(prev_action, 0.2, true);
            wave_action.play();
        } else {
            wave_action.play();
        }
    }
}

export default WaveState