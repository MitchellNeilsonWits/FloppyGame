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

// Create the dynamic menu
const load_menu = () => { 

    const start_menu = document.createElement('div');
    // Set up the background image
    start_menu.style.width = '100dvw';
    start_menu.style.height = '100dvh';

    start_menu.style.backgroundImage = "url('assets/FloopyIntro.jpeg')"; 
    start_menu.style.backgroundSize = '100% 100%'; // Ensure it covers the entire viewport
    start_menu.style.backgroundPosition = 'center'; // Center the image
    start_menu.style.backgroundRepeat = 'no-repeat'; // Prevent the image from repeating
    start_menu.style.margin = '0';
    start_menu.style.padding = '0';
    start_menu.style.overflow = 'hidden';

    document.body.appendChild(start_menu);
    

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

    start_menu.appendChild(startButton);   
    // Add event listener for "Start Game" button
    startButton.addEventListener('click', () => {
        // Hide the start button and play the intro video
        startButton.style.display = 'none';
        document.body.removeChild(start_menu);
        music_controller.pause_music();
        play_intro_video();
    });
};

const play_intro_video = () => {
    // Create the video element
    const video = document.createElement('video');
    video.src = 'Videos/FLoppyVideo.mp4'; // Replace with your video file path
    video.style.position = 'absolute';
    video.style.top = '50%';
    video.style.left = '50%';
    video.style.transform = 'translate(-50%, -50%)';
    video.style.width = '100%'; // Adjust size as needed
    video.style.height = 'auto';
    video.autoplay = true;
    video.muted = false; // Mute the video if it has sound
    video.controls = false; // Disable video controls if you don't want them
    video.volume = 0.5; // Adjust volume as needed

    // Create the skip button
    const skipButton = document.createElement('button');
    skipButton.innerText = 'Skip';
    skipButton.style.position = 'absolute';
    skipButton.style.bottom = '20px'; // Adjust position as needed
    skipButton.style.right = '20px';
    skipButton.style.padding = '10px';
    skipButton.style.fontSize = '20px';
    skipButton.style.cursor = 'pointer';
    skipButton.style.backgroundColor = '#f44336'; // Red color for the skip button
    skipButton.style.color = 'white';
    skipButton.style.border = 'none';
    skipButton.style.borderRadius = '5px';

    // Add event listener to skip button
    skipButton.addEventListener('click', () => {
        document.body.removeChild(video); // Remove the video
        document.body.removeChild(skipButton); // Remove the skip button
        music_controller.change_volume(0); // Stop the background music
        new GameController(); // Start the game
    });

    document.body.appendChild(video);
    document.body.appendChild(skipButton);

    // Optional: When video ends, auto start the game
    video.addEventListener('ended', () => {
        document.body.removeChild(video); // Remove the video
        document.body.removeChild(skipButton); // Remove the skip button
        music_controller.change_volume(0); // Stop the background music
        new GameController(); // Start the game
    });
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
