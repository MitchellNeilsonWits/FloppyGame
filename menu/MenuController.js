import './Menu.css'

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

        // Sample play button
        var play_button = document.createElement('button');
        play_button.id = 'play_button';
        play_button.textContent = 'Play';
        
        // set play button on-click to be this!
        play_button.onclick = (() => this.hide_menu(this._pointer_lock_target));
        
        // add play button to the base Menu element
        menu_root.appendChild(play_button);
        
        // ------------------------------------------

        this._components = menu_root;
    }

    show_menu() {
        document.exitPointerLock();
        document.getElementsByTagName('body')[0].appendChild(this._components);

        // this._render_menu();
    }

    hide_menu(pointer_lock_target) {
        if (pointer_lock_target) {
                pointer_lock_target.requestPointerLock().then(() => {
                    document.getElementsByTagName('body')[0].removeChild(document.getElementById('menu_root'));
                })                

        }
        
    }
}

export default MenuController