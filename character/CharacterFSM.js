import FiniteStateMachine from "./FiniteStateMachine";
import IdleState from "./states/IdleState";
import RunState from "./states/RunState";
import RunTurningLeftState from "./states/RunTurningLeftState";
import RunTurningRightState from "./states/RunTurningRightState";
import TurningLeftState from "./states/TurningLeftState";
import TurningRightState from "./states/TurningRightState";
import WalkState from "./states/WalkState";

class CharacterFSM extends FiniteStateMachine {
    constructor(proxy) {
        super();
        this._proxy = proxy;
        this._init();
    }

    _init() {
        this._add_state('idle', IdleState);
        this._add_state('walk', WalkState);
        this._add_state('turning_left', TurningLeftState);
        this._add_state('turning_right', TurningRightState);
        this._add_state('run', RunState);
        this._add_state('run_turning_left', RunTurningLeftState);
        this._add_state('run_turning_right', RunTurningRightState);

    }
}

export default CharacterFSM;