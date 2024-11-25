/**
 * File: Menu.js
 * 
 * Description:
 *  Handles display and functionality of pause menu
 */

import control_settings from '../control_settings/ControlSettings';
import gamepad_controller from '../gamepad/GamePadController';
import hud from '../hud/Hud';
import './Menu.css';

class MenuController {
    constructor(pointer_lock_target, mouse_listener, camera) {
        this._init();
        this._pointer_lock_target = pointer_lock_target;
        this.menu_is_active = true;
        this.mouse_listener = mouse_listener;
        this.camera = camera;

        this.restart_button_function = () => {};
    }

    // Setup menu screen and funcitons
    _init() {
        // --------- SETUP COMPONENTS HERE ----------
        
        // Base Menu element
        this.menu_root = document.createElement('div');
        this.menu_root.id = 'menu_root';

        // Continue Game button
        this.continue_game_button = document.createElement('button');
        this.continue_game_button.id = 'continue_game_button';
        this.continue_game_button.textContent = 'Continue Game';
        this.continue_game_button.onclick = this.continue_game.bind(this);

        // Restart Level button
        this.restart_button = document.createElement('button');
        this.restart_button.id = 'restart_button';
        this.restart_button.textContent = 'Restart Level';
        this.restart_button.onclick = this.restart_level.bind(this);

        // Type of input checkbox
        this.use_gamepad_input = document.createElement("input");

        this.use_gamepad_input.type = "checkbox";
        this.use_gamepad_input.id = "use_gamepad_input";

        this.use_gamepad_input.addEventListener("change", (() => {
            if (this.use_gamepad_input.checked) {
                control_settings.change_input('gamepad');
                hud.update();
            } else {
                control_settings.change_input('keyboard_and_mouse');
                hud.update();
            }
        }).bind(this));

        const use_gamepad_text = document.createElement('div');
        use_gamepad_text.innerText = "Use gamepad/controller input";
        use_gamepad_text.className = "use_gamepad_text";

        const use_gamepad_container = document.createElement('div');
        use_gamepad_container.id = "use_gamepad_container";

        use_gamepad_container.appendChild(this.use_gamepad_input);
        use_gamepad_container.appendChild(use_gamepad_text);

        // Sensitivity slider
        var sensitivity_container = document.createElement('div');
        var sensitivity_label = document.createElement('label');
        sensitivity_label.textContent = 'Sensitivity: ';
        this.sensitivity_slider = document.createElement('input');
        this.sensitivity_slider.type = 'range';
        this.sensitivity_slider.id = 'sensitivity_slider';
        this.sensitivity_slider.min = '0';
        this.sensitivity_slider.max = '100';
        this.sensitivity_slider.value = '50';
        this.sensitivity_slider.ondrag = 'none';

        this.sensitivity_value = document.createElement('span');
        this.sensitivity_value.className='sensitivity_value';
        this.sensitivity_value.textContent = this.sensitivity_slider.value;
        this.sensitivity_slider.oninput = () => {
            this.change_sensitivity(this.sensitivity_slider.value);
            this.sensitivity_value.textContent = this.sensitivity_slider.value;
        };
        sensitivity_container.appendChild(sensitivity_label);
        sensitivity_container.appendChild(this.sensitivity_slider);
        sensitivity_container.appendChild(this.sensitivity_value);

        // Field of View slider
        var fov_container = document.createElement('div');
        var fov_label = document.createElement('label');
        fov_label.textContent = 'Field of View: ';
        this.fov_slider = document.createElement('input');
        this.fov_slider.type = 'range';
        this.fov_slider.id = 'fov_slider';
        this.fov_slider.min = '30';
        this.fov_slider.max = '110';
        this.fov_slider.value = '70';
        this.fov_slider.ondrag = 'none';
        this.fov_value = document.createElement('span');
        this.fov_value.className='fov_value';
        this.fov_value.textContent = this.fov_slider.value;
        this.fov_slider.oninput = () => {
            this.change_fov(this.fov_slider.value);
            this.fov_value.textContent = this.fov_slider.value;
        };
        fov_container.appendChild(fov_label);
        fov_container.appendChild(this.fov_slider);
        fov_container.appendChild(this.fov_value);

        // Exit to Lobby button
        var exit_button = document.createElement('button');
        exit_button.id = 'exit_button';
        exit_button.textContent = 'Exit to Lobby';
        exit_button.onclick = this.exit_to_lobby.bind(this);

        // Add components to the base Menu element
        this.menu_root.appendChild(this.continue_game_button);
        this.menu_root.appendChild(this.restart_button);
        this.menu_root.appendChild(use_gamepad_container);
        this.menu_root.appendChild(sensitivity_container);
        this.menu_root.appendChild(fov_container);
        this.menu_root.appendChild(exit_button);

        this.menu_items = [
            this.continue_game_button,
            this.restart_button,
            this.sensitivity_slider,
            this.fov_slider,
            exit_button
        ]

        this.focused_item = 0;
        
        // ------------------------------------------

        this._components = this.menu_root;


        // APPLY GAMEPAD INPUT
        gamepad_controller.add_button_callback(this.handle_gamepad_button.bind(this));

        // Set up variable to make sure button presses are separated between update calls
        this.can_press = true;
        this.menu_shown = false;
    }

    update_focus() {
        this.menu_items[this.focused_item].focus();
    }

    handle_gamepad_button(index, value) {
        if (this.menu_shown) {
            if (value > 0) {
                switch (index) {
                    case 0:
                        if (this.can_press) {
                            switch (this.focused_item) {
                                case 0:
                                    this.continue_game();
                                    break;
                                case 1:
                                    this.confirm_restart_level();
                                    break;
                                case 4:
                                    this.exit_to_lobby();
                                    break;
                                default:
                                    break;
                            }
                            setTimeout(() => {
                                this.can_press = true;
                            }, 500)
                        }
                        this.can_press = false;
                        break;
                    case 12:
                        if (this.can_press) {
                            if (this.focused_item > 0) {
                                this.focused_item = this.focused_item - 1;
                            }
                            setTimeout(() => {
                                this.can_press = true;
                            }, 500)
                        }
                        this.can_press = false;
                        break;
                    case 13:
                        if (this.can_press) {
                            if (this.focused_item < this.menu_items.length - 1) {
                                this.focused_item = this.focused_item + 1;
                            }
                            setTimeout(() => {
                                this.can_press = true;
                            }, 500)
                        }
                        this.can_press = false;
                        break;
                    case 14: // left d pad
                        if (this.can_press) {
                            // Check if we are on sensitivity slider
                            if (this.focused_item == 2) {
                                if (this.sensitivity_slider.value > 0) {
                                    this.sensitivity_slider.value = this.sensitivity_slider.value - 5;
                                    this.sensitivity_value.textContent = this.sensitivity_slider.value;
                                    this.sensitivity_slider.oninput();
                                }
                            } else if (this.focused_item == 3) {
                                if (this.fov_slider.value > 30) {
                                    this.fov_slider.value = this.fov_slider.value - 5;
                                    this.fov_value.textContent = this.fov_slider.value;
                                    this.fov_slider.oninput();
                                }
                            }
                            setTimeout(() => {
                                this.can_press = true;
                            }, 200)
                        }
                        this.can_press = false;
                        break;
                    case 15: // right d-pad
                        if (this.can_press) {
                            // Check if we are on sensitivity slider
                            if (this.focused_item == 2) {
                                if (this.sensitivity_slider.value > 0) {
                                    const amt = parseInt(this.sensitivity_slider.value) + 5;
                                    this.sensitivity_slider.value = amt;
                                    this.sensitivity_value.textContent = this.sensitivity_slider.value;
                                    this.sensitivity_slider.oninput();
                                }
                            } else if (this.focused_item == 3) {
                                if (this.fov_slider.value > 30) {
                                    const amt = parseInt(this.fov_slider.value) + 5;
                                    this.fov_slider.value = amt;
                                    this.fov_value.textContent = this.fov_slider.value;
                                    this.fov_slider.oninput();
                                }
                            }
                            setTimeout(() => {
                                this.can_press = true;
                            }, 200)
                        }
                        this.can_press = false;
                        break;
                    case 8: // back
                        if (this.can_press) {
                            this.hide_menu(this._pointer_lock_target);
                            setTimeout(() => {
                                this.can_press = true;
                            }, 500)
                        }
                        this.can_press = false;
                        break;
                    case 9: // start
                        if (this.can_press) {
                            this.hide_menu(this._pointer_lock_target);
                            setTimeout(() => {
                                this.can_press = true;
                            }, 500)
                        }
                        this.can_press = false;
                        break;
                    case 1: // B
                        if (this.can_press) {
                            this.hide_menu(this._pointer_lock_target);
                            setTimeout(() => {
                                this.can_press = true;
                            }, 500)
                        }
                        this.can_press = false;
                        break;
                }
            }
            this.update_focus();
        } else {
            if (value > 0) {
                switch (index) {
                    case 9: // start
                        if (!this.menu_shown) {
                            if (this.can_press) {
                                this.show_menu();
                                setTimeout(() => {
                                    this.can_press = true;
                                }, 500)
                            }
                            this.can_press = false;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }

    // Function to continue the game
    continue_game() {
        this.hide_menu(this._pointer_lock_target);
    }

    // Function to restart the level
    restart_level() {
        this.handle_restart_level();
    }

    // Function to exit to the lobby
    exit_to_lobby() {
        if (this.exit_function) {
            this.exit_function();
            this.hide_menu(this._pointer_lock_target);
        }
    }

    // Function to show the pause menu
    show_menu() {
        if (this.menu_is_active) {
            this.menu_shown = true;
            document.exitPointerLock();
            document.getElementsByTagName('body')[0].appendChild(this._components);
            
            // Trigger the animation
            const menu = document.getElementById('menu_root');
            menu.style.opacity = '0'; // Ensure it's hidden at first
            setTimeout(() => {
                menu.style.opacity = '1'; // Animate in
                if (this.continue_game_button) {
                    this.continue_game_button.focus();
                }
            }, 100); // Small delay to ensure DOM update
        }
    }
    
    // Function to hide the pause menu
    hide_menu(pointer_lock_target) {
        if (pointer_lock_target) {
            this.menu_shown = false;
            pointer_lock_target.requestPointerLock().then(() => {
                const menu_item = document.getElementById('menu_root');
                if (menu_item){
                    document.getElementsByTagName('body')[0].removeChild(menu_item);
                }
            });
        }
    }

    // Function to handle level restart
    handle_restart_level() {
        this.restart_confirm_root = document.createElement('div');
        this.restart_confirm_root.id = 'restart_confirm_root';

        var restart_confirm_container = document.createElement('div');
        restart_confirm_container.id = 'restart_confirm_container';
        this.restart_confirm_root.appendChild(restart_confirm_container);
        
        var restart_confirm_header = document.createElement('h1');
        restart_confirm_header.id = 'restart_confirm_header';
        restart_confirm_header.innerHTML = 'Are you sure you want to restart this level?'
        restart_confirm_container.appendChild(restart_confirm_header);
        
        var restart_confirm_buttons = document.createElement('div');
        restart_confirm_buttons.id = 'restart_confirm_buttons';
        
        this.restart_confirm_yes = document.createElement('button');
        this.restart_confirm_yes.id = 'restart_confirm_yes';
        this.restart_confirm_yes.innerHTML = 'YES';
        this.restart_confirm_yes.onclick = this.confirm_restart_level.bind(this);

        this.restart_confirm_no = document.createElement('button');
        this.restart_confirm_no.id = 'restart_confirm_no';
        this.restart_confirm_no.innerHTML = 'NO';
        this.restart_confirm_no.onclick = this.cancel_restart_level.bind(this);
        restart_confirm_buttons.appendChild(this.restart_confirm_yes);
        restart_confirm_buttons.appendChild(this.restart_confirm_no)
        
        restart_confirm_container.appendChild(restart_confirm_buttons);
        document.getElementsByTagName('body')[0].appendChild(this.restart_confirm_root);
    }

    // Function to cancel level restart from confirmation card
    cancel_restart_level() {
        document.getElementsByTagName('body')[0].removeChild(this.restart_confirm_root);
    }

    // Function to confirm level restart from confirmation card
    confirm_restart_level() {
        this.restart_button_function();
        
        if (document.getElementById('restart_confirm_root')) {
            document.getElementsByTagName('body')[0].removeChild(this.restart_confirm_root);
        }
        this.hide_menu(this._pointer_lock_target);
    }

    // Function to manually set the level restart function externally
    set_restart_level_function(func) {
        this.restart_button_function = func.bind(this);
    }

    // Function to manually set the exit function externally
    set_exit_function(func) {
        this.exit_function = func.bind(this);
    }

    // Function to change the sensitivity using the slider
    change_sensitivity(val) {
        // middle is 50%
        var change_val; 
        if (val == 50) {
            change_val = 1
        } 
        if (val < 50) {
            change_val = 1 - (50 - val)/50
        }
        if (val > 50) {
            change_val = 1 + (val-50)/50
        }
        console.log("CHANGED TO ",change_val);
        this.mouse_listener.change_update_speed(change_val);
    }

    // Function to change the FOV using the slider
    change_fov(val) {
        this.camera.change_camera_fov(val);
    }

    // Function to disable the menu
    disable_menu() {
        this.menu_is_active = false;
    }

    // Function to enable the menu
    enable_menu() {
        this.menu_is_active = true;
    }
}

export default MenuController;
