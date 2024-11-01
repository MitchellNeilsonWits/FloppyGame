/**
 * File: State.js
 * 
 * Description:
 *  Parent class for states of NPC
 */

class State {
    constructor(parent) {
        this._parent = parent;
    }

    enter() {}
    exit() {}
    update() {
    }
}

export default State