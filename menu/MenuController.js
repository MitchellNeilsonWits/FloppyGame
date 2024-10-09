import './Menu.css';

class MenuController {
    constructor(pointer_lock_target) {
        this._init();
        this._pointer_lock_target = pointer_lock_target;
    }

    _init() {
        // --------- SETUP COMPONENTS HERE ----------
        
        // Base Menu element
        var menu_root = document.createElement('div');
        menu_root.id = 'menu_root';

        // Continue Game button
        var continue_game_button = document.createElement('button');
        continue_game_button.id = 'continue_game_button';
        continue_game_button.textContent = 'Continue Game';
        continue_game_button.onclick = this.continue_game.bind(this);

        // Restart Level button
        var restart_button = document.createElement('button');
        restart_button.id = 'restart_button';
        restart_button.textContent = 'Restart Level';
        restart_button.onclick = this.restart_level.bind(this);

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
        fov_slider.min = '60';
        fov_slider.max = '120';
        fov_slider.value = '90';
        fov_slider.ondrag = 'none';
        var fov_value = document.createElement('span');
        fov_value.className='fov_value';
        fov_value.textContent = fov_slider.value;
        fov_slider.oninput = () => {
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
        menu_root.appendChild(continue_game_button);
        menu_root.appendChild(restart_button);
        menu_root.appendChild(sensitivity_container);
        menu_root.appendChild(fov_container);
        menu_root.appendChild(exit_button);
        
        // ------------------------------------------

        this._components = menu_root;
    }

    // Placeholder methods for buttons
    continue_game() {
        console.log('Continuing the game...');
        this.hide_menu(this._pointer_lock_target);
    }

    restart_level() {
        console.log('Restarting the level...');
    }

    exit_to_lobby() {
        console.log('Exiting to the lobby...');
    }

    show_menu() {
        document.exitPointerLock();
        document.getElementsByTagName('body')[0].appendChild(this._components);
        
        // Trigger the animation
        const menu = document.getElementById('menu_root');
        menu.style.opacity = '0'; // Ensure it's hidden at first
        setTimeout(() => {
            menu.style.opacity = '1'; // Animate in
        }, 100); // Small delay to ensure DOM update
    }
    

    hide_menu(pointer_lock_target) {
        if (pointer_lock_target) {
            pointer_lock_target.requestPointerLock().then(() => {
                document.getElementsByTagName('body')[0].removeChild(document.getElementById('menu_root'));
            });
        }
    }
}

export default MenuController;
