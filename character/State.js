class State {
    constructor(parent) {
        this._parent = parent;
    }

    enter() {}
    exit() {}
    update(character_is_turning, input, height_state) {
        console.log(height_state);

        // Handle when player is in the air
        if (height_state == "in air") {
            this._parent.set_state('falling');
            return;
        } else if (height_state == "on ground") {
            // if (input._keys.space) {
            //     this._parent.set_state('jump');
            //     return;
            // }
        }

        if (this._requested_movement_update(input)) {
            if (input._keys.shift) this._parent.set_state('run'.concat("_", character_is_turning));
            else this._parent.set_state('walk'.concat("_", character_is_turning));
        }
        else {
           this._parent.set_state('idle');
        }
    }

    _requested_movement_update(input){
        return input._keys.forward || input._keys.backward || input._keys.left || input._keys.right;
    }
}

export default State