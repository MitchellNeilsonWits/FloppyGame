class MusicController {
    constructor() {

    }

    load_music(filename) {
        const backgroundMusic = new Audio(filename); // Replace with your music file path
        backgroundMusic.loop = true; // Loop the music
        backgroundMusic.volume = 0.5; // Set the volume (optional)
        this.music = backgroundMusic;
    }

    play_music() {  
        this.music.play().catch(error => {
            console.log('Audio playback failed: ', error);
        });
    }

    pause_music() {
        // Stop the background music
        this.music.pause(); // Pause the music
        this.music.currentTime = 0; // Reset the music to the beginning
    }

    change_volume(new_volumne) {
        this.music.volume = new_volumne;
    }
}

const music_controller = new MusicController();
export default music_controller;