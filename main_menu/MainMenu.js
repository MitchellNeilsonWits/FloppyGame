import GameController from "../game/GameController";
import music_controller from "../music/MusicController";
import './MainMenu.css'

class MainMenu {
    constructor() {

    }

    load_menu = () => { 

        // Play music for main menu
        music_controller.load_music('sounds/TitleSong.mp3');
        music_controller.play_music();
    
        const start_menu = document.createElement('div');
        // Set up the background image
        start_menu.style.width = '100dvw';
        start_menu.style.height = '100dvh';
    
        // start_menu.style.backgroundImage = "url('assets/FloopyIntro.jpeg')"; 
        start_menu.style.background = "black";
        start_menu.style.backgroundSize = '100% 100%'; // Ensure it covers the entire viewport
        start_menu.style.backgroundPosition = 'center'; // Center the image
        start_menu.style.backgroundRepeat = 'no-repeat'; // Prevent the image from repeating
        start_menu.style.margin = '0';
        start_menu.style.padding = '0';
        start_menu.style.overflow = 'hidden';
        start_menu.style.display = 'flex';
        start_menu.style.flexDirection = 'column';
        start_menu.style.alignItems = 'center';
        start_menu.style.justifyContent = 'center';
    
        document.body.appendChild(start_menu);
    
        // Container for header and floppy
        const top_container = document.createElement('div');
        top_container.style.display = 'flex';
        top_container.style.flexDirection = 'column';
        top_container.style.alignItems = 'center';
        top_container.style.marginTop = '12px';
        top_container.style.gap = '15px 0px';
        start_menu.appendChild(top_container);
    
        const header = document.createElement('img');
        header.src = 'main_menu/header.svg';
        header.style.scale = 0.8;
        header.className = 'main-menu-header';
    
        const floppy = document.createElement('img');
        floppy.src = 'main_menu/floppy_image.png';
        floppy.style.width = '120px';
        floppy.style.height = '120px';
    
        top_container.appendChild(header);
        top_container.appendChild(floppy);
    
        // Middle container to contain disks and start button
        const mid_container = document.createElement('div');
        mid_container.style.display = 'flex';
        mid_container.style.flexDirection = 'column';
        mid_container.style.alignItems = 'center';
        mid_container.style.marginTop = '12px';
        mid_container.style.gap = '8px 0px';
        start_menu.appendChild(mid_container);
    
        // Create the "Start Game" button
        const startButton = document.createElement('button');
        startButton.innerText = 'Start Game';
        startButton.style.padding = '20px';
        startButton.style.fontSize = '24px';
        startButton.style.cursor = 'pointer';
        // startButton.style.backgroundColor = 'black'; // Make background transparent
        startButton.style.color = 'white';
        startButton.style.border = '2px solid white'; // Add a border for visibility
        startButton.style.borderRadius = '10px';
        startButton.style.transition = '0.5s'; // Smooth transition for hover
        startButton.style.display = 'flex';
        startButton.style.alignItems = 'center';
        startButton.style.justifyContent = 'center';
        startButton.style.background = 'black';
        start_menu.style.transition = '1s';
    
        // Add hover effect for the floppy disk icon
        startButton.addEventListener('mouseover', () => {
            // startButton.style.backgroundImage = "url('assets/floppyDisk.png')"; 
            // startButton.style.backgroundSize = 'contain'; // Make sure it fits the button
            // startButton.style.backgroundRepeat = 'no-repeat'; // Prevent repetition
            startButton.style.color = 'black';
            startButton.style.background = 'white';
            // startButton.style.backgroundPosition = 'center'; // Center the image
        });
    
        startButton.addEventListener('mouseout', () => {
            startButton.style.backgroundImage = ''; // Remove the background image
            startButton.style.color = 'white'; // Restore text color
            startButton.style.background = 'black';
        });
    
        mid_container.appendChild(startButton);   
        // Add event listener for "Start Game" button
        startButton.addEventListener('click', () => {
            // Hide the start button and play the intro video
            startButton.style.display = 'none';
            document.body.removeChild(start_menu);
            music_controller.pause_music();
            this.play_intro_video();
        });
    
        // Container for disks
        const disk_container = document.createElement('div');
        disk_container.style.display = 'flex';
        disk_container.style.flexDirection = 'row';
        disk_container.style.alignItems = 'center';
        disk_container.style.marginTop = '40px';
        disk_container.style.gap = '0px 40px';
        mid_container.appendChild(disk_container);
    
        // Create each disk
        const strength = document.createElement('img');
        strength.src = 'main_menu/strength_resized_v2.png';
        strength.style.width = '55px';
        strength.style.height = '55px';
        strength.className = "main-menu-strength";
        disk_container.appendChild(strength);

        strength.addEventListener('mouseover', () => {
            start_menu.style.background = "#51091B";
        })
        strength.addEventListener('mouseout', () => {
            start_menu.style.background = "black";
        })
    
        const flight = document.createElement('img');
        flight.src = 'main_menu/flight_resized_v2.png';
        flight.style.width = '55px';
        flight.style.height = '55px';
        flight.className = "main-menu-flight";
        disk_container.appendChild(flight);

        flight.addEventListener('mouseover', () => {
            start_menu.style.background = "#0F3F29";
        })
        flight.addEventListener('mouseout', () => {
            start_menu.style.background = "black";
        })
    
        const shrink = document.createElement('img');
        shrink.src = 'main_menu/shrink_resized_v2.png';
        shrink.style.width = '55px';
        shrink.style.height = '55px';
        shrink.className = "main-menu-shrink";
        disk_container.appendChild(shrink);

        shrink.addEventListener('mouseover', () => {
            start_menu.style.background = "#3B0044";
        })
        shrink.addEventListener('mouseout', () => {
            start_menu.style.background = "black";
        })
    
    
        // Add empty div to even out contents
        // const empty_div = document.createElement('div');
        // empty_div.style.height = '227px';
        // start_menu.appendChild(empty_div);
    };
    
    play_intro_video = () => {
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
}

const main_menu = new MainMenu();
export default main_menu;