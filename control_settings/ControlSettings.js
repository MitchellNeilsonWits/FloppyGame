class ControlSettings {
    constructor() {
        this.control_input = "keyboard_and_mouse";
    }

    change_input(control_input) {
        this.control_input = control_input;
    }
}

const control_settings = new ControlSettings();
export default control_settings;