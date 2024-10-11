import State from "../State";

class FlyingForwardFastState extends State {
    constructor(parent) {
        super(parent);
    }

    get_name() {
        return 'flying_forward_fast';
    }

    enter(prev_state){ 
        const curr_action = this._parent._proxy._animations['flying_forward_fast'].action;
   
        if (prev_state) {
            const prev_state_name = prev_state.get_name();
            const prev_action = this._parent._proxy._animations[prev_state_name].action;
            
            curr_action.enabled = true;

            const ratio = curr_action.getClip().duration / prev_action.getClip().duration;
            curr_action.time = prev_action.time * ratio;
            curr_action.setEffectiveTimeScale(1);
            curr_action.setEffectiveWeight(1);

            
            curr_action.crossFadeFrom(prev_action, 0.15, true);
            curr_action.play();
        } else {
            curr_action.play();
        }
    }
}

export default FlyingForwardFastState