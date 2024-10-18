import * as THREE from 'three';

class FootstepSound {
    constructor(character_controller, level, audioListener, audioLoader, footstepSoundFilePath, jumpSoundFilePath) {
        this.character_controller = character_controller;
        this.level = level;
        this.isPlayerOnObject = null;
        this.isPlaying = false;  // Track whether the footstep sound is playing

        this.targetObjectName = "firstPlatform_ground";

        // Create a positional audio for footstep sounds
        this.sound = new THREE.PositionalAudio(audioListener); 
        audioLoader.load(footstepSoundFilePath, (buffer) => {
            this.sound.setBuffer(buffer);
            this.sound.setLoop(true); 
            this.sound.setVolume(1);  
        });

        // Create a positional audio for jump sounds
        this.jumpSound = new THREE.Audio(audioListener);
        audioLoader.load(jumpSoundFilePath, (buffer) => {
            this.jumpSound.setBuffer(buffer);
            this.jumpSound.setLoop(false);  // No need to loop jump sound
            this.jumpSound.setVolume(1);
        });

        // Raycaster for precise surface checks
        this.raycaster = new THREE.Raycaster();

        // Bind the key down event
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(event) {
        if (event.code === 'Space') {
            event.preventDefault(); // Prevent default space behavior (like scrolling)
            this.triggerJump();
        }
    }

    triggerJump() {
        this.playJumpSound();
    }

    update() {
        console.log("Character controller: ", this.character_controller);

        // Check if the character is idle; if so, stop the footstep sound
        if (this.character_controller._state_machine._current_name === 'idle') {
            console.log('Character is idle, stopping footstep sound');
            this.stopFootstepSound();
            return;  // Exit if idle
        }

        // Check if the player is moving (walking or sprinting)
        const isRunning = this.character_controller._state_machine._current_name.includes('run');
        const playbackRate = isRunning ? 1.75 : 1.0;  // Faster for running states

        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const targetObject = this.level.getObjectByName(this.targetObjectName);

            if (targetObject) {
                // Use raycasting to check if the player is on top of the surface
                const isOnSurface = this.checkIfOnSurface(playerPos, targetObject);

                if (isOnSurface) {
                    if (this.isPlayerOnObject !== this.targetObjectName) {
                        // Player moved onto the object
                        this.isPlayerOnObject = this.targetObjectName;
                        this.playFootstepSound(playerPos, playbackRate);  // Play sound at player's position
                    } else if (!this.sound.isPlaying) {
                        // If the player is on the object but sound is not playing, restart the sound
                        this.playFootstepSound(playerPos, playbackRate);
                    } else {
                        // Update playback rate if already playing
                        this.updatePlaybackRate(playbackRate);
                    }
                } else {
                    if (this.isPlayerOnObject === this.targetObjectName) {
                        // Player moved off the object
                        this.isPlayerOnObject = null;
                        this.stopFootstepSound();
                    }
                }
            }
        }
    }

    /**
     * Checks if the player is standing on top of the surface using raycasting.
     * @param {THREE.Vector3} playerPos - The position of the player.
     * @param {THREE.Object3D} targetObject - The target object (mesh) to check against.
     * @returns {boolean} - True if the player is on top of the object.
     */
    checkIfOnSurface(playerPos, targetObject) {
        // Set the raycaster to cast downwards from the player's position
        const rayOrigin = new THREE.Vector3(playerPos.x, playerPos.y + 1, playerPos.z);
        const rayDirection = new THREE.Vector3(0, -1, 0);  // Ray pointing down
        this.raycaster.set(rayOrigin, rayDirection);

        // Check intersections with the target object's geometry
        const intersects = this.raycaster.intersectObject(targetObject, true);  // Recursive check
        
        if (intersects.length > 0) {
            const closestIntersection = intersects[0];
            const distance = closestIntersection.distance;

            // Define a threshold for "on surface" check
            const onSurfaceThreshold = 1.2;  // Distance threshold (adjust as needed)
            console.log(`Distance to surface: ${distance}`);
            if (distance < onSurfaceThreshold) {
                console.log('Player is on surface, exact intersection found.');
                return true;
            }
        }

        return false;
    }

    playFootstepSound(playerPos, playbackRate) {
        this.updatePlaybackRate(playbackRate);

        if (!this.sound.isPlaying) {
            this.sound.position.copy(playerPos);  // Play sound at player's position
            this.sound.play();
            this.isPlaying = true;
            console.log(`Playing footstep sound at player position`);
        }
    }

    stopFootstepSound() {
        if (this.sound.isPlaying) {
            this.sound.stop();
            this.isPlaying = false;
            console.log('Stopping footstep sound');
        }
    }

    updatePlaybackRate(rate) {
        if (this.sound.playbackRate !== rate) {
            console.log(`Updating playback rate to: ${rate}`);
            this.sound.setPlaybackRate(rate);

            if (this.isPlaying) {
                // Restart the sound with the new playback rate if already playing
                this.sound.stop();
                this.sound.play();
            }
        }
    }

    playJumpSound() {
        if (!this.jumpSound.isPlaying) {
            this.jumpSound.play();
            console.log('Playing jump sound');
        }
    }
}

export default FootstepSound;
