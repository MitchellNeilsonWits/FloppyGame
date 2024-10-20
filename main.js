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

// Create the dynamic menu
const load_menu = () => { 
    // Set up the background image
    document.body.style.backgroundImage = "url('assets/FloopyIntro.jpeg')"; 
    document.body.style.backgroundSize = '100% 100%'; // Ensure it covers the entire viewport
    document.body.style.backgroundPosition = 'center'; // Center the image
    document.body.style.backgroundRepeat = 'no-repeat'; // Prevent the image from repeating
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';

    music_controller.load_music('sounds/TitleSong.mp3');
    music_controller.play_music();

    // Create the "Start Game" button
    const startButton = document.createElement('button');
    startButton.innerText = 'Start Game';
    startButton.style.position = 'absolute';
    startButton.style.top = '50%';
    startButton.style.left = '50%';
    startButton.style.transform = 'translate(-50%, -50%)';
    startButton.style.padding = '20px';
    startButton.style.fontSize = '24px';
    startButton.style.cursor = 'pointer';
    startButton.style.backgroundColor = 'black'; // Make background transparent
    startButton.style.color = 'white';
    startButton.style.border = '2px solid white'; // Add a border for visibility
    startButton.style.borderRadius = '10px';
    startButton.style.transition = 'background-image 0.5s ease, color 0.5s ease'; // Smooth transition for hover
    startButton.style.display = 'flex';
    startButton.style.alignItems = 'center';
    startButton.style.justifyContent = 'center';

    // Add hover effect for the floppy disk icon
    startButton.addEventListener('mouseover', () => {
        startButton.style.backgroundImage = "url('assets/floppyDisk.png')"; 
        startButton.style.backgroundSize = 'contain'; // Make sure it fits the button
        startButton.style.backgroundRepeat = 'no-repeat'; // Prevent repetition
        startButton.style.color = 'transparent'; // Hide text
        startButton.style.backgroundPosition = 'center'; // Center the image
    });

    startButton.addEventListener('mouseout', () => {
        startButton.style.backgroundImage = ''; // Remove the background image
        startButton.style.color = 'white'; // Restore text color
    });

    document.body.appendChild(startButton);
    // Add event listener for "Start Game" button
    startButton.addEventListener('click', () => {
        // Derender the menu (remove HTML elements)
        startButton.style.display = 'none';
        music_controller.change_volume(0);
        // Start the game by initializing GameController
        new GameController();
    });
};

const container = document.createElement('div');
container.style.width = '100dvw';
container.style.height = '100dvh';
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
