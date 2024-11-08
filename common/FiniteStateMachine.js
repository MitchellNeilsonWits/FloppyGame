/**
 * File: FiniteStateMachine.js
 * 
 * Description:
 *  Parent class to be implemented by CharacterFSM: handles state creation and updates to FSM
 */

class FiniteStateMachine {
    constructor() {
        this._states = {}
        this._current_state = null;
        this._current_name = null;
    }

    _add_state(name, type) {
        this._states[name] = type;
    }

    set_state(name) {
        const prev_state = this._current_state;
        if (prev_state) {
            if (prev_state.get_name() == name) {
                return;
            }
            prev_state.exit();
        }

        const state = new this._states[name](this);

        this._current_state = state;
        this._current_name = name;
        state.enter(prev_state);
    }

    update(character_is_turning, input, height_state, current_power) {
        
        if (this._current_state) {
            this._current_state.update(character_is_turning, input, height_state, current_power);
        }
    }
}

export default FiniteStateMachine;