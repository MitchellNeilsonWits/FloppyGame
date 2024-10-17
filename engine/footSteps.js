import * as THREE from 'three';

class FootstepSound {
    constructor(character_controller, level, audioListener, audioLoader, soundFilePath) {
        this.character_controller = character_controller;
        this.level = level;
        this.isPlayerOnObject = null;

       
        this.targetObjectName = "59310309__5071P_Level_0_ground";

    
        this.sound = new THREE.PositionalAudio(audioListener); 
        audioLoader.load(soundFilePath, (buffer) => {
            this.sound.setBuffer(buffer);
            this.sound.setLoop(true); 
            this.sound.setVolume(1);  
        });
    }

    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const targetObject = this.level.getObjectByName(this.targetObjectName);

            if (targetObject) {
                const targetPos = targetObject.position.clone();

               
                const distance = playerPos.distanceTo(targetPos);
                const onObjectThreshold = 0.5; 

                if (distance < onObjectThreshold) {
                    if (this.isPlayerOnObject !== this.targetObjectName) {
                        // Player moved onto the object
                        this.isPlayerOnObject = this.targetObjectName;
                        this.playFootstepSound(targetObject);
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

    playFootstepSound(targetObject) {
        if (!this.sound.isPlaying) {
            
            this.sound.position.copy(targetObject.position);
            this.sound.play();
            console.log(`Playing footstep sound for ${targetObject.name}`);
        }
    }

    stopFootstepSound() {
        if (this.sound.isPlaying) {
            this.sound.stop();
            console.log('Stopping footstep sound');
        }
    }
}

export default FootstepSound;
