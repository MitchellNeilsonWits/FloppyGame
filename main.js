/**
 * File: main.js
 * 
 * Description:
 *  Top of hierarchy
 *  Will render the scene and contents
 */

import addOneTimeEventListener from './common/SingleUseListener.js';
import GameController from './game/GameController.js';
import music_controller from './music/MusicController.js';
import './main.css'
import main_menu from './main_menu/MainMenu.js';

// Create the dynamic menu
const load_menu = () => { 
    main_menu.load_menu();
};


const container = document.createElement('div');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';

const text = document.createElement('div');
text.innerHTML = "CLICK THE SCREEN TO START";
text.style.color = 'white';
text.style.textAlign = 'center';
text.style.fontSize = '25px';
text.style.fontWeight = '500';

container.appendChild(text);
document.body.appendChild(container);

addOneTimeEventListener(window, 'click', () => {
    document.body.removeChild(container);
    load_menu();
});
