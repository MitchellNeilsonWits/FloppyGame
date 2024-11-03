/**
 * File: Menu.js
 * 
 * Description:
 *  Handles display and functionality of pause menu
 */

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
        var continue_game_button = document.createElement('button');
        continue_game_button.id = 'continue_game_button';
        continue_game_button.textContent = 'Continue Game';
        continue_game_button.onclick = this.continue_game.bind(this);

        // Restart Level button
        this.restart_button = document.createElement('button');
        this.restart_button.id = 'restart_button';
        this.restart_button.textContent = 'Restart Level';
        this.restart_button.onclick = this.restart_level.bind(this);

        // Sensitivity slider
        var sensitivity_container = document.createElement('div');
        var sensitivity_label = document.createElement('label');
        sensitivity_label.textContent = 'Sensitivity: ';
        var sensitivity_slider = document.createElement('input');
        sensitivity_slider.type = 'range';
        sensitivity_slider.id = 'sensitivity_slider';
        sensitivity_slider.min = '0';
        sensitivity_slider.max = '100';
        sensitivity_slider.value = '50';
        sensitivity_slider.ondrag = 'none';

        var sensitivity_value = document.createElement('span');
        sensitivity_value.className='sensitivity_value';
        sensitivity_value.textContent = sensitivity_slider.value;
        sensitivity_slider.oninput = () => {
            this.change_sensitivity(sensitivity_slider.value);
            sensitivity_value.textContent = sensitivity_slider.value;
        };
        sensitivity_container.appendChild(sensitivity_label);
        sensitivity_container.appendChild(sensitivity_slider);
        sensitivity_container.appendChild(sensitivity_value);

        // Field of View slider
        var fov_container = document.createElement('div');
        var fov_label = document.createElement('label');
        fov_label.textContent = 'Field of View: ';
        var fov_slider = document.createElement('input');
        fov_slider.type = 'range';
        fov_slider.id = 'fov_slider';
        fov_slider.min = '30';
        fov_slider.max = '110';
        fov_slider.value = '70';
        fov_slider.ondrag = 'none';
        var fov_value = document.createElement('span');
        fov_value.className='fov_value';
        fov_value.textContent = fov_slider.value;
        fov_slider.oninput = () => {
            this.change_fov(fov_slider.value);
            fov_value.textContent = fov_slider.value;
        };
        fov_container.appendChild(fov_label);
        fov_container.appendChild(fov_slider);
        fov_container.appendChild(fov_value);

        // Exit to Lobby button
        var exit_button = document.createElement('button');
        exit_button.id = 'exit_button';
        exit_button.textContent = 'Exit to Lobby';
        exit_button.onclick = this.exit_to_lobby.bind(this);

        // Add components to the base Menu element
        this.menu_root.appendChild(continue_game_button);
        this.menu_root.appendChild(this.restart_button);
        this.menu_root.appendChild(sensitivity_container);
        this.menu_root.appendChild(fov_container);
        this.menu_root.appendChild(exit_button);
        
        // ------------------------------------------

        this._components = this.menu_root;
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
            this.hide_menu();
            this.exit_function();
        }
    }

    // Function to show the pause menu
    show_menu() {
        if (this.menu_is_active) {
            document.exitPointerLock();
            document.getElementsByTagName('body')[0].appendChild(this._components);
            
            // Trigger the animation
            const menu = document.getElementById('menu_root');
            menu.style.opacity = '0'; // Ensure it's hidden at first
            setTimeout(() => {
                menu.style.opacity = '1'; // Animate in
            }, 100); // Small delay to ensure DOM update
        }
    }
    
    // Function to hide the pause menu
    hide_menu(pointer_lock_target) {
        if (pointer_lock_target) {
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
        document.getElementsByTagName('body')[0].removeChild(this.restart_confirm_root);
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
