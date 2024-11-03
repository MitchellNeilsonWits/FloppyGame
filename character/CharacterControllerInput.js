/**
 * File: CharacterControllerInput.js
 * 
 * Description:
 *  File used to handle user input for the character
 */

class CharacterControllerInput {
    constructor() {
        this._init();
    }

    _init() {
        // Setup each key
        this._keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            space: false,
            shift: false,
            drop: false,
            use: false,
            interact: false,
            unload_disk: false,
            crouch: false,
            right_click: false,
            left_click: false
        };

        // Setup listeners
        document.addEventListener('keydown', (e) => this._on_key_down(e), false);
        document.addEventListener('keyup', (e) => this._on_key_up(e), false);
        document.addEventListener('mousedown', (e) => this._on_mouse_down(e), false);
        document.addEventListener('mouseup', (e) => this._on_mouse_up(e), false);


    }

    // Handle mouse clicks
    _on_mouse_down(event) {
        switch (event.button) {
            case 0:
                this._keys.left_click = true;
                break;

            case 2:
                this._keys.right_click = true;
                break;
        
            default:
                break;
        }
    }
    
    // Handle mouse anti-clicks
    _on_mouse_up(event) {
        switch (event.button) {
            case 0:
                this._keys.left_click = false;
                break;

            case 2:
                this._keys.right_click = false;
                break;
        
            default:
                break;
        }
    }

    // Handle key down for each key
    _on_key_down(event) {
        switch(event.keyCode) {
            case 87: // w
                this._keys.forward = true;
                break;

            case 65: // a
                this._keys.left = true;
                break;
            
            case 83: // s
                this._keys.backward = true;
                break;

            case 68: // d
                this._keys.right = true;
                break;

            case 32: // SPACE
                this._keys.space = true;
                break;

            case 16: // SHIFT
                this._keys.shift = true;
                break;

            case 69: // E
                this._keys.interact = true;
                break;

            case 70: // F
                this._keys.drop = true;
                break;

            case 81: // Q
                this._keys.use = true;
                break;

            case 90: // Z
                this._keys.unload_disk = true;
                break;

            case 67: // C
                this._keys.crouch = true;
                break;

        }
    }

    // Handle key up for each key
    _on_key_up(event) {
        switch(event.keyCode) {
            case 87: // w
                this._keys.forward = false;
                break;

            case 65: // a
                this._keys.left = false;
                break;
            
            case 83: // s
                this._keys.backward = false;
                break;

            case 68: // d
                this._keys.right = false;
                break;

            case 32: // SPACE
                this._keys.space = false;
                break;

            case 16: // SHIFT
                this._keys.shift = false;
                break;

            case 69: // E
                this._keys.interact = false;
                break;

            case 70: // F
                this._keys.drop = false;
                break;

            case 81: // Q
                this._keys.use = false;
                break;
            
            case 90: // Z
                this._keys.unload_disk = false;
                break;

            case 67: // C
                this._keys.crouch = false;
                break;
        }
    }
}

export default CharacterControllerInput