/**
 * File: State.js
 * 
 * Description:
 *  Main parent class for different types of states for the CharacterFSM
 */

class State {
    constructor(parent) {
        this._parent = parent;
    }

    enter() {} // implemented uniquely
    exit() {} // implemented uniquely

    // Function to handle a state transition based on character input
    update(character_is_turning, input, height_state, current_power) {

        // HANDLE FLYING TRANSITIONS
        if (current_power === "flight") {
            // Handle when player is in the air
            if (height_state == "in air") {
                if (this._requested_movement_update(input)) {
                    if (input._keys.shift) this._parent.set_state('flying_forward_fast');
                    else this._parent.set_state('flying_forward');
                } else {
                    this._parent.set_state('flying_idle');
                }
                return;
            }

            if (this._requested_movement_update(input)) {
                if (input._keys.shift) this._parent.set_state('run'.concat("_", character_is_turning));
                else this._parent.set_state('walk'.concat("_", character_is_turning));
            }
            else {
                this._parent.set_state('idle');
            }
        } else {
        // HANDLE OTHER TRANSITIONS

            // Handle when player is in the air
            if (height_state == "in air") {
                this._parent.set_state('falling');
                return;
            }

            if (this._requested_movement_update(input)) {
                if (input._keys.shift) this._parent.set_state('run'.concat("_", character_is_turning));
                else this._parent.set_state('walk'.concat("_", character_is_turning));
            }
            else {
                this._parent.set_state('idle');
            }
        }
    }

    // Function to check if there is a movement update
    _requested_movement_update(input){
        return input._keys.forward || input._keys.backward || input._keys.left || input._keys.right;
    }
}

export default State