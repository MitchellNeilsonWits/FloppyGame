import FiniteStateMachine from "../common/FiniteStateMachine";
import IdleState from "./states/IdleState";
import RunState from "./states/RunState";
import RunTurningLeftState from "./states/RunTurningLeftState";
import RunTurningRightState from "./states/RunTurningRightState";
import TurningLeftState from "./states/TurningLeftState";
import TurningRightState from "./states/TurningRightState";
import WalkState from "./states/WalkState";
import JumpState from "./states/JumpState";
import FallingState from "./states/FallingState";
import FlyingIdleState from "./states/FlyingIdleState";
import FlyingForwardState from "./states/FlyingForwardState";
import FlyingForwardFastState from "./states/FlyingForwardFastState";

class CharacterFSM extends FiniteStateMachine {
    constructor(proxy) {
        super();
        this._proxy = proxy;
        this._init();
    }

    _init() {
        this._add_state('idle', IdleState);
        this._add_state('walk_not_turning', WalkState);
        this._add_state('walk_turning_left', TurningLeftState);
        this._add_state('walk_turning_right', TurningRightState);
        this._add_state('run_not_turning', RunState);
        this._add_state('run_turning_left', RunTurningLeftState);
        this._add_state('run_turning_right', RunTurningRightState);
        this._add_state('jump', JumpState);
        this._add_state('falling', FallingState);
        this._add_state('flying_idle', FlyingIdleState);
        this._add_state('flying_forward', FlyingForwardState);
        this._add_state('flying_forward_fast', FlyingForwardFastState);



    }
}

export default CharacterFSM;