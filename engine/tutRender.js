import * as THREE from 'three';

class TutRender {
    constructor(character_controller, level, onStartTutorial) {
        this.character_controller = character_controller;
        this.targetObjectName = "tut"; // Object player should approach
        this.level = level;
        this.proximityThreshold = 7; 
        this.isPlayerNear = false; 
        this.onStartTutorial = onStartTutorial; // Callback for starting the tutorial

        // Create tutorial HTML element
        this.tutorialMessage = document.createElement('div');
        this.tutorialMessage.style.position = 'absolute';
        this.tutorialMessage.style.top = '50%';
        this.tutorialMessage.style.left = '50%';
        this.tutorialMessage.style.transform = 'translate(-50%, -50%)';
        this.tutorialMessage.style.padding = '20px';
        this.tutorialMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.tutorialMessage.style.color = 'white';
        this.tutorialMessage.style.fontSize = '24px';
        this.tutorialMessage.style.textAlign = 'center';
        this.tutorialMessage.style.display = 'none'; // Hide initially
        this.tutorialMessage.innerHTML = '<p>Press E go to the tutorial level</p>';
        document.body.appendChild(this.tutorialMessage);

    }

    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const targetObject = this.level.getObjectByName(this.targetObjectName);

            if (targetObject) {
                const targetPos = targetObject.position.clone();

                // Check proximity
                const distance = playerPos.distanceTo(targetPos);
                
                console.log(distance);
                if (distance < this.proximityThreshold) {
                    if (!this.isPlayerNear) {
                        console.log("Player is near the tutorial object, press 'E' to start the tutorial");
                        this.isPlayerNear = true;
                        this.showTutorialMessage();
                    }
                    if (this.isPlayerNear) {
                        if (this.character_controller._input._keys.interact) {
                            this.hideTutorialMessage();
                            this.onStartTutorial();
                        }
                    }
                } else {
                    if (this.isPlayerNear) {
                        this.isPlayerNear = false;
                        this.hideTutorialMessage();
                    }
                }
            }
        }
    }

    showTutorialMessage() {
        this.tutorialMessage.style.display = 'block';
    }

    hideTutorialMessage() {
        this.tutorialMessage.style.display = 'none';
    }
}

export default TutRender;
