import State from "../State";

class IdleState extends State {
    constructor(parent) {
        super(parent);
    }

    get_name() {
        return 'idle';
    }

    enter(prev_state){ 
        const idle_action = this._parent._proxy._animations['idle'].action;
        
        if (prev_state) {
            const prev_action = this._parent._proxy._animations[prev_state.get_name()].action;
            idle_action.time = 0.0;
            idle_action.enabled = true;
            idle_action.setEffectiveTimeScale(1.0);
            idle_action.setEffectiveWeight(1.0);
            idle_action.crossFadeFrom(prev_action, 0.2, true);
            idle_action.play();
        } else {
            idle_action.play();
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
                } else if (character_is_turning === "turning_right") {
                    this._parent.set_state('run_turning_right');
                    return; 
                }
            
                this._parent.set_state('run');
                return;
            } else {
                if (character_is_turning === "turning_left") {
                    this._parent.set_state('turning_left');
                    return; 
                } else if (character_is_turning === "turning_right") {
                    this._parent.set_state('turning_right');
                    return; 
                }

                this._parent.set_state('walk');
                return; 
            }
        } else {
            return;
        }
    }
}

export default IdleState