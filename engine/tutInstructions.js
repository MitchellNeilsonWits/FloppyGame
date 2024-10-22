import * as THREE from 'three';

class TutInstructions {
    constructor(character_controller, level) {
        this.character_controller = character_controller;
        this.level = level;
        this.isPlayerOnObject = null; // Track which object the player is currently on

        this.targetObjects = {
            "tut_1": "<strong>Welcome to the tutorial! Use WASD to move!</strong>",
            "tut_2": "<strong>Now, try jumping to reach the next platform. Press Space to jump and Shift to sprint.</strong>",
            "tut_3": "<strong>Hmmm, this gap is too wide to jump across. Press E to pick up the flight disk! We can hold 2 disks at once. Press Q to swith the disks while you have a disk loaded! Press Space to ascend and C to descend!</strong>",
            "tut_4": "<strong>Great! Press Z to drop the disk and continue!</strong>",
            "tut_5": "<strong>Oh no! We can't get through! Have strength disk equiped by pressing Q and break through the walls!</strong>",
            "tut_6": "<strong>Another obstacle! Pick up the shrink disk to shrink down and get through!</strong>",
            "tut_7": "<strong>Great! All levels will have the same goal as in front of you. Good luck!</strong>",
            "tut_8": "<strong>Oh no! We can't get through! Pick up the strength disk and equip it to push the box out of the way!</strong>",
            "tut_9": "<strong>Alas! We cannot move the lever without our strength disk! Walk up to the strength disk and press E to pick it up. Press Q to equip it!<strong>"
        };

        // Create tutorial HTML element
        this.tutorialMessage = document.createElement('div');
        this.tutorialMessage.style.position = 'absolute';
        this.tutorialMessage.style.bottom = '10%'; // Position it near the bottom of the screen
        this.tutorialMessage.style.left = '50%';
        this.tutorialMessage.style.transform = 'translateX(-50%)'; // Center horizontally
        this.tutorialMessage.style.padding = '15px 30px';
        this.tutorialMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.tutorialMessage.style.color = 'white';
        this.tutorialMessage.style.fontSize = '20px'; // Slightly smaller for a cleaner look
        this.tutorialMessage.style.fontWeight = 'bold';
        this.tutorialMessage.style.textAlign = 'center';
        this.tutorialMessage.style.borderRadius = '10px'; // Add rounded corners
        this.tutorialMessage.style.zIndex = '1000'; // Ensure it's on top of other elements
        this.tutorialMessage.style.display = 'none'; // Hidden initially
        document.body.appendChild(this.tutorialMessage);

        // console.log('Tutorial message DOM element:', this.tutorialMessage); // Check if it's added to the DOM
    }

    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;

            // Loop through each target object to check if the player is standing on it
            let playerIsOnAnyObject = false;
            for (let targetName in this.targetObjects) {
                const targetObject = this.level.getObjectByName(targetName);

                if (targetObject) {
                    const targetPos = targetObject.position.clone();

                    // Check if the player is close enough to the object
                    const distance = playerPos.distanceTo(targetPos);
                    const showThreshold = 5; // Distance to show message
                    const hideThreshold = 6; // Distance to hide message

                    if (distance < showThreshold) {
                        if (this.isPlayerOnObject !== targetName) {
                            // Player has moved onto a new object
                            this.isPlayerOnObject = targetName;
                            this.showTutorialMessage(targetName);
                        }
                        playerIsOnAnyObject = true;
                        break;
                    } else if (distance >= hideThreshold && this.isPlayerOnObject === targetName) {
                        // Player has moved off the current object
                        this.isPlayerOnObject = null;
                        this.hideTutorialMessage();
                    }
                }
            }

            // If player is not on any object, reset the state
            if (!playerIsOnAnyObject && this.isPlayerOnObject !== null) {
                this.isPlayerOnObject = null;
                this.hideTutorialMessage();
            }
        }
    }

    showTutorialMessage(targetName) {
        const message = this.targetObjects[targetName];
        this.tutorialMessage.innerHTML = `<p>${message}</p>`;
        this.tutorialMessage.style.display = 'block';
        // console.log(`Showing tutorial message for ${targetName}: ${message}`); // Debug log
    }

    hideTutorialMessage() {
        this.tutorialMessage.style.display = 'none';
        // console.log('Hiding tutorial message'); // Debug log
    }
}

export default TutInstructions;
