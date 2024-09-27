class MouseListener {
    constructor() {
        this._init();
    }

    _init() {
        this._mouse_movement_x = 0;
        this._mouse_movement_y = 0;
        document.addEventListener('mousemove', (event) => this._update_mouse(event), false);
    }

    _decelerate_mouse_movement() {
        this._mouse_movement_x = 0;
        this._mouse_movement_y = 0;
    }

    _update_mouse(event) {
        this._mouse_movement_x = event.movementX;
        this._mouse_movement_y = event.movementY;
    }
}

export default MouseListener