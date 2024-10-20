import * as THREE from 'three';

class FootstepSound {
    constructor(character_controller, level, audioListener, audioLoader, metalSoundFilePath, jumpSoundFilePath, grassSoundFilePath, woodSoundFilePath, rockSoundFilePath) {
        this.character_controller = character_controller;
        this.level = level;
        this.isPlayerOnObject = null;
        this.isPlaying = false;  

        // Metal footsteps
        this.metalSound = new THREE.Audio(audioListener); 
        audioLoader.load(metalSoundFilePath, (buffer) => {
            this.metalSound.setBuffer(buffer);
            this.metalSound.setLoop(true); 
            this.metalSound.setVolume(0.2);  
        });

        // Grass footsteps
        this.grassSound = new THREE.Audio(audioListener);
        audioLoader.load(grassSoundFilePath, (buffer) => {
            this.grassSound.setBuffer(buffer);
            this.grassSound.setLoop(true); 
            this.grassSound.setVolume(0.2);
        });

        // Wood footsteps
        this.woodSound = new THREE.Audio(audioListener); 
        audioLoader.load(woodSoundFilePath, (buffer) => {
            this.woodSound.setBuffer(buffer);
            this.woodSound.setLoop(true); 
            this.woodSound.setVolume(0.2);  
        });

        // Rock footsteps
        this.rockSound = new THREE.Audio(audioListener);
        audioLoader.load(rockSoundFilePath, (buffer) => {
            this.rockSound.setBuffer(buffer);
            this.rockSound.setLoop(true); 
            this.rockSound.setVolume(0.2);  
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
                if (obj.name.includes('_metal') || obj.name.includes('_grass') || obj.name.includes('_wood') || obj.name.includes('_rock')) {
                    let surfaceType = null;

                    if (obj.name.includes('_metal')) {
                        surfaceType = 'metal';
                    } else if (obj.name.includes('_grass')) {
                        surfaceType = 'grass';
                    } else if (obj.name.includes('_wood')) {
                        surfaceType = 'wood';
                    } else if (obj.name.includes('_rock')) {
                        surfaceType = 'rock';
                    }

                    if (this.checkIfOnSurface(playerPos, obj)) {
                        isOnSurface = true;  // Player is on a surface (metal, grass, wood, or rock)

                        // Play the appropriate sound based on surface type
                        if (this.isPlayerOnObject !== obj.name) {
                            this.isPlayerOnObject = obj.name;
                            this.playFootstepSound(playerPos, playbackRate, surfaceType); 
                        } else if (!this.getSoundBySurfaceType(surfaceType).isPlaying) {
                            this.playFootstepSound(playerPos, playbackRate, surfaceType);
                        } else {
                            this.updatePlaybackRate(playbackRate, surfaceType);
                        }
                    }
                }
            }

            if (!isOnSurface && this.isPlayerOnObject) {
                // Player moved off all surfaces
                this.isPlayerOnObject = null;
                this.stopFootstepSound();
            }
        }
    }

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

    playFootstepSound(playerPos, playbackRate, surfaceType) {
        const sound = this.getSoundBySurfaceType(surfaceType);
        this.updatePlaybackRate(playbackRate, surfaceType);

        if (!sound.isPlaying) {
            sound.position.copy(playerPos); 
            sound.play();
            this.isPlaying = true;
            console.log(`Playing ${surfaceType} footstep sound at player position`);
        }
    }

    stopFootstepSound() {
        // Stop all sounds in case any is playing
        if (this.metalSound.isPlaying) {
            this.metalSound.stop();
        }
        if (this.grassSound.isPlaying) {
            this.grassSound.stop();
        }
        if (this.woodSound.isPlaying) {
            this.woodSound.stop();
        }
        if (this.rockSound.isPlaying) {
            this.rockSound.stop();
        }

        this.isPlaying = false;
        console.log('Stopping footstep sound');
    }

    updatePlaybackRate(rate, surfaceType) {
        const sound = this.getSoundBySurfaceType(surfaceType);

        if (sound.playbackRate !== rate) {
            console.log(`Updating playback rate to: ${rate} for ${surfaceType} surface`);
            sound.setPlaybackRate(rate);

            if (this.isPlaying) {
                sound.stop();
                sound.play();
            }
        }
    }

    playJumpSound() {
        if (!this.jumpSound.isPlaying) {
            this.jumpSound.play();
            console.log('Playing jump sound');
        }
    }

    getSoundBySurfaceType(surfaceType) {
        switch (surfaceType) {
            case 'metal':
                return this.metalSound;
            case 'grass':
                return this.grassSound;
            case 'wood':
                return this.woodSound;
            case 'rock':
                return this.rockSound;
            default:
                return this.metalSound; //Default - incase
        }
    }
}

export default FootstepSound;
