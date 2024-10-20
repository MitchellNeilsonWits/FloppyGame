/**
 * File: main.js
 * 
 * Description:
 *  Top of hierarchy
 *  Will render the scene and contents
 */

import GameController from './game/GameController.js';

// Create the dynamic menu
window.onload = () => {
    // Set up the background image
    document.body.style.backgroundImage = "url('assets/FloopyIntro.jpeg')"; 
    document.body.style.backgroundSize = '100% 100%'; // Ensure it covers the entire viewport
    document.body.style.backgroundPosition = 'center'; // Center the image
    document.body.style.backgroundRepeat = 'no-repeat'; // Prevent the image from repeating
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';

    // Play background music
    const backgroundMusic = new Audio('sounds/TitleSong.mp3'); // Replace with your music file path
    backgroundMusic.loop = true; // Loop the music
    backgroundMusic.volume = 0.5; // Set the volume (optional)
    backgroundMusic.play().catch(error => {
        console.log('Audio playback failed: ', error);
    });

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
        // Stop the background music
        backgroundMusic.pause(); // Pause the music
        backgroundMusic.currentTime = 0; // Reset the music to the beginning

        // Derender the menu (remove HTML elements)
        startButton.style.display = 'none';

        // Start the game by initializing GameController
        new GameController();
    });
};
