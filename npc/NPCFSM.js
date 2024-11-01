/**
 * File: NPCFSM.js
 * 
 * Description:
 *  Implements the FiniteStateMachine class to handle animations for the NPC
 */

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
    }
}

export default NPCFSM;