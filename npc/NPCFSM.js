import FiniteStateMachine from "../common/FiniteStateMachine";
import IdleState from "./states/IdleState";
import WaveState from "./states/WaveState";

class NPCFSM extends FiniteStateMachine {
    constructor(animations) {
        super();
        this._animations = animations;
        this._init();
    }

    _init() {
        this._add_state('idle', IdleState)
        this._add_state('wave', WaveState)
        // this._add_state('idle', IdleState);
        // this._add_state('walk_not_turning', WalkState);
        // this._add_state('walk_turning_left', TurningLeftState);
        // this._add_state('walk_turning_right', TurningRightState);
        // this._add_state('run_not_turning', RunState);
        // this._add_state('run_turning_left', RunTurningLeftState);
        // this._add_state('run_turning_right', RunTurningRightState);
        // this._add_state('jump', JumpState);
        // this._add_state('falling', FallingState);
        // this._add_state('flying_idle', FlyingIdleState);
        // this._add_state('flying_forward', FlyingForwardState);
        // this._add_state('flying_forward_fast', FlyingForwardFastState);



    }
}

export default NPCFSM;