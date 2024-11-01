/**
 * File: WalkState.js
 * 
 * Description:
 *  State to handle character walking without turning
 */

import State from "../State";

class WalkState extends State {
    constructor(parent) {
        super(parent);
    }

    get_name() {
        return 'walk_not_turning';
    }

    enter(prev_state){ 
        const curr_action = this._parent._proxy._animations['walk_not_turning'].action;
   
        if (prev_state) {
            const prev_state_name = prev_state.get_name();
            const prev_action = this._parent._proxy._animations[prev_state_name].action;
            
            curr_action.enabled = true;

            if (prev_state_name == 'run_not_turning' || prev_state_name == 'walk_turning_left' || prev_state_name == 'walk_turning_right') {
                const ratio = curr_action.getClip().duration / prev_action.getClip().duration;
                curr_action.time = prev_action.time * ratio;
            } else {
                curr_action.time = 0.0;
                curr_action.setEffectiveTimeScale(1.0);
                curr_action.setEffectiveWeight(1.0);
            }

            
            curr_action.crossFadeFrom(prev_action, 0.1, true);
            curr_action.play();
        } else {
            curr_action.play();
        }
    }
}

export default WalkState