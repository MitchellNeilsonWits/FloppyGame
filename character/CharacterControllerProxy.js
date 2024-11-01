/**
 * File: CharacterControllerProxy.js
 * 
 * Description:
 *  Proxy for animation handling
 */

class CharacterControllerProxy {
    constructor(animations) {
        this._animations = animations;
    }

    get animations() {
        return this._animations;
    }
}

export default CharacterControllerProxy