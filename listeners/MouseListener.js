class MouseListener {
    constructor() {
        this._init();
    }

    _update_mouse(event) {
        this._mouse_movement_x = event.movementX;
        this._mouse_movement_y = event.movementY;
    }

    _init() {
        this._mouse_movement_x = 0;
        this._mouse_movement_y = 0;
        this._mouse_move_handler = this._update_mouse.bind(this);
    }

    _decelerate_mouse_movement() {
        this._mouse_movement_x = 0;
        this._mouse_movement_y = 0;
    }


    set_listener() {
        document.addEventListener('mousemove',this._mouse_move_handler, true);
    }

    remove_listener() {
        document.removeEventListener('mousemove',this._mouse_move_handler, true);
    }
}

export default MouseListener