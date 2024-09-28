class CharacterControllerInput {
    constructor() {
        this._init();
    }

    _init() {
        this._keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            space: false,
            shift: false
        };

        document.addEventListener('keydown', (e) => this._on_key_down(e), false);
        document.addEventListener('keyup', (e) => this._on_key_up(e), false);

    }

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
        }
    }

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
        }
    }
}

export default CharacterControllerInput