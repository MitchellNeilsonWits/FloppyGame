import State from "./State";

class RunTurningRightState extends State {
    constructor(parent) {
        super(parent);
    }

    get_name() {
        return 'run_turning_right';
    }

    enter(prev_state){ 
        const curr_action = this._parent._proxy._animations['run_turning_right'].action;
        curr_action.play();
   
        if (prev_state) {
            const prev_state_name = prev_state.get_name();
            const prev_action = this._parent._proxy._animations[prev_state_name].action;
            
            curr_action.enabled = true;

            const ratio = curr_action.getClip().duration / prev_action.getClip().duration;
            curr_action.time = prev_action.time * ratio;
            curr_action.setEffectiveTimeScale(1.0);
            curr_action.setEffectiveWeight(1.0);

            
            curr_action.crossFadeFrom(prev_action, 0.1, true);
            curr_action.play();
        } else {
            curr_action.play();
        }
    }

    exit() {

    }

    update(character_is_turning, input) {
        if (input._keys.forward || input._keys.backward || input._keys.left || input._keys.right) {
            if (input._keys.shift) {
                if (character_is_turning === "turning_left") {
                    this._parent.set_state('run_turning_left');
                    return;
                }  else if (character_is_turning === "turning_right") {
                    return; 
                }

                this._parent.set_state('run');
            } else {
                if (character_is_turning === "turning_left") {
                    this._parent.set_state('turning_left');
                    return;
                }  else if (character_is_turning === "turning_right") {
                    this._parent.set_state('turning_right');
                    return; 
                }
                this._parent.set_state('walk');
            }
        } else {
            this._parent.set_state('idle');
        }
    }
}

export default RunTurningRightState