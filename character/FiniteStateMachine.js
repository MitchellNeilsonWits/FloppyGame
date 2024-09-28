class FiniteStateMachine {
    constructor() {
        this._states = {}
        this._current_state = null;
    }

    _add_state(name, type) {
        this._states[name] = type;
    }

    set_state(name) {
        const prev_state = this._current_state;

        if (prev_state) {
            if (prev_state.name == name) {
                return;
            }
            prev_state.exit();
        }

        const state = new this._states[name](this);

        this._current_state = state;
        state.enter(prev_state);
    }

    update(time_elapsed, input) {
        if (this._current_state) {
            this._current_state.update(time_elapsed, input);
        }
    }
}

export default FiniteStateMachine;