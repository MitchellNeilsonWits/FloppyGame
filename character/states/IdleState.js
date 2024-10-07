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
}

export default IdleState