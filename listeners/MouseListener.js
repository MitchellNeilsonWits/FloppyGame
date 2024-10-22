class MouseListener {
    constructor() {
        this._init();
    }

    _update_mouse(event) {
        this._mouse_movement_x = event.movementX;
        this._mouse_movement_y = event.movementY;
    }

    _update_zoom(event) {
        // console.log(event);
        // this._mouse_zoom = 
        if (event.deltaY > 0) {
            if (!(this._zoom + 0.5 > 10)) {
                this._zoom += 0.5;
            }
        } else if (event.deltaY < 0) {
            if (!(this._zoom - 0.5 < 1)) {
                this._zoom -= 0.5;
            }
        }
    }

    _init() {
        this._mouse_movement_x = 0;
        this._mouse_movement_y = 0;
        this._zoom = 3.5;
        this._mouse_move_handler = this._update_mouse.bind(this);
        this._update_zoom_handler = this._update_zoom.bind(this);
    }

    _decelerate_mouse_movement() {
        this._mouse_movement_x = 0;
        this._mouse_movement_y = 0;
    }


    set_listener() {
        document.addEventListener('mousemove',this._mouse_move_handler, true);
        document.addEventListener('wheel',this._update_zoom_handler, true);
    }

    remove_listener() {
        document.removeEventListener('mousemove',this._mouse_move_handler, true);
        document.removeEventListener('wheel',this._update_zoom_handler, true);
    }
}

export default MouseListener