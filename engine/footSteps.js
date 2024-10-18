import * as THREE from 'three';

class FootstepSound {
    constructor(character_controller, level, audioListener, audioLoader, footstepSoundFilePath, jumpSoundFilePath) {
        this.character_controller = character_controller;
        this.level = level;
        this.isPlayerOnObject = null;
        this.isPlaying = false;  

        // Footsteps
        this.sound = new THREE.Audio(audioListener); 
        audioLoader.load(footstepSoundFilePath, (buffer) => {
            this.sound.setBuffer(buffer);
            this.sound.setLoop(true); 
            this.sound.setVolume(0.2);  
        });

        // Jump sound
        this.jumpSound = new THREE.Audio(audioListener);
        audioLoader.load(jumpSoundFilePath, (buffer) => {
            this.jumpSound.setBuffer(buffer);
            this.jumpSound.setLoop(false); // Play once
            this.jumpSound.setVolume(0.2);
        });

        this.raycaster = new THREE.Raycaster();

        window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(event) {
        if (event.code === 'Space') {
            event.preventDefault(); 
            this.triggerJump();
        }
    }

    triggerJump() {
        this.playJumpSound();
    }

    update() {
        console.log("Character controller: ", this.character_controller);

        // No footsteps on idle state
        if (this.character_controller._state_machine._current_name === 'idle') {
            console.log('Character is idle, stopping footstep sound');
            this.stopFootstepSound();
            return;  
        }

        // Running -> make play faster
        const isRunning = this.character_controller._state_machine._current_name.includes('run');
        const playbackRate = isRunning ? 1.75 : 1.0; 

        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;

            // Loop through all objects in the level
            const objectsInLevel = this.level.children[2].children; 
            console.log('Objects in level: ', objectsInLevel);
            let isOnSurface = false;

            for (let obj of objectsInLevel) {
                if (obj.name.includes('_ground')) {
                    
                    if (this.checkIfOnSurface(playerPos, obj)) {
                        isOnSurface = true;  // Player is on a ground surface
                        if (this.isPlayerOnObject !== obj.name) {
                            this.isPlayerOnObject = obj.name;
                            this.playFootstepSound(playerPos, playbackRate); 
                        } else if (!this.sound.isPlaying) {
                            this.playFootstepSound(playerPos, playbackRate);
                        } else {
                            this.updatePlaybackRate(playbackRate);
                        }
                    }
                }
            }

            if (!isOnSurface && this.isPlayerOnObject) {
                // Player moved off all ground surfaces
                this.isPlayerOnObject = null;
                this.stopFootstepSound();
            }
        }
    }
    //GPT CODE XD
    checkIfOnSurface(playerPos, targetObject) {
        const rayOrigin = new THREE.Vector3(playerPos.x, playerPos.y + 1, playerPos.z);
        const rayDirection = new THREE.Vector3(0, -1, 0);  
        this.raycaster.set(rayOrigin, rayDirection);

        const intersects = this.raycaster.intersectObject(targetObject, true); 
        
        if (intersects.length > 0) {
            const closestIntersection = intersects[0];
            const distance = closestIntersection.distance;
            const onSurfaceThreshold = 1.2;  
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
            this.sound.position.copy(playerPos); 
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
