import control_settings from "../control_settings/ControlSettings";

class GamepadController {
    constructor() {
        this.controllerIndex = null;
        this.stick_callbacks = [];
        this.button_callbacks = [];
        
        window.addEventListener("gamepadconnected", (event) => {
            this.handleConnectDisconnect(event, true);
        });
        
        window.addEventListener("gamepaddisconnected", (event) => {
            this.handleConnectDisconnect(event, false);
        });
    }

    add_stick_callback(callback_function) {
        this.stick_callbacks.push(callback_function);
    }

    add_button_callback(callback_function) {
        this.button_callbacks.push(callback_function);
    }

    handleConnectDisconnect(event, connected) {
      
        const gamepad = event.gamepad;
        console.log(gamepad);
      
        if (connected) {
          this.controllerIndex = gamepad.index;
        } else {
          this.controllerIndex = null;
        }
      }

    handleButtons(buttons) {
        for (let i = 0; i < buttons.length; i++) {
            const buttonValue = buttons[i].value;
            // updateButtonOnGrid(i, buttonValue);
            // this.updateControllerButton(i, buttonValue);
            for (const callback of this.button_callbacks) {
                callback(i, buttonValue);
            }
        }
    }

    handleSticks(axes) {
    
        // this.updateStick("left", axes[0], axes[1]);
        // this.updateStick("right", axes[2], axes[3]);
    
        for (const callback of this.stick_callbacks) {
            callback("left", axes[0], axes[1]);
            callback("right", axes[2], axes[3]);
        }
    }

    update() {
        if (control_settings.control_input === "gamepad") {
            if (this.controllerIndex !== null) {
                const gamepad = navigator.getGamepads()[this.controllerIndex];

                this.handleButtons(gamepad.buttons);
                this.handleSticks(gamepad.axes);
            }
        }
    }
}

const gamepad_controller = new GamepadController();
export default gamepad_controller;