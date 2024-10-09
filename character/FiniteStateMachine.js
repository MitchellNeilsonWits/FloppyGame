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
        console.log("Setting state to: " + name);
        const state = new this._states[name](this);

        this._current_state = state;
        this._current_name = name;
        state.enter(prev_state);
    }

    update(character_is_turning, input, height_state) {
        if (this._current_state) {
            this._current_state.update(character_is_turning, input, height_state);
        }
    }
}

export default FiniteStateMachine;