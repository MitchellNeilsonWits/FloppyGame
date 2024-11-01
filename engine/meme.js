/**
 * File: meme.js
 * 
 * Description:
 *  Handles meme display on big screen
 */

import * as THREE from 'three';

class meme {
    constructor(character_controller, level) {
        this.character_controller = character_controller;
        this.targetObjectName = "meme"; // Object player should approach
        this.level = level;
        this.proximityThreshold = 7; 
        this.isPlayerNear = false; 
        this.videoPlaying = false;

        // Create video element
        this.video = document.createElement('video');
        this.video.src = 'assets/meme.mp4'; 
        this.video.loop = true; 
        this.video.muted = false; 
        this.video.crossOrigin = 'anonymous'; 
        this.video.style.display = 'none';

        // Create video texture
        this.videoTexture = new THREE.VideoTexture(this.video);
        this.videoTexture.minFilter = THREE.LinearFilter;
        this.videoTexture.magFilter = THREE.LinearFilter;
        this.videoTexture.format = THREE.RGBAFormat;

        // Message popup for interaction
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
        this.tutorialMessage.innerHTML = '<p>Press E to view.</p>';
        document.body.appendChild(this.tutorialMessage);

        // Listener for the "E" key
        window.addEventListener('keydown', (event) => {
            if (event.key === 'e' || event.key === 'E') {
                if (this.isPlayerNear && !this.videoPlaying) {
                    this.playVideo();
                }
            }
        });
    }

    // Function to update message showing based on character distance
    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const targetObject = this.level.getObjectByName(this.targetObjectName);

            if (targetObject) {
                const targetPos = targetObject.position.clone();
                const distance = playerPos.distanceTo(targetPos);

                if (distance < this.proximityThreshold) {
                    if (!this.isPlayerNear) {
                        this.isPlayerNear = true;
                        this.showTutorialMessage();
                    }
                } else {
                    if (this.isPlayerNear) {
                        this.isPlayerNear = false;
                        this.hideTutorialMessage();
                        if (this.videoPlaying) {
                            this.stopVideo();
                        }
                    }
                }
            }
        }
    }

    // Function to play the video
    playVideo() {
        const targetObject = this.level.getObjectByName(this.targetObjectName);

        if (targetObject) {
            const material = targetObject.material;
            if (material.map) {
                material.map.dispose();
            }

            material.map = this.videoTexture;
            material.needsUpdate = true;

            // // Adjust UVs if necessary
            const uvAttribute = targetObject.geometry.attributes.uv;
            for (let i = 0; i < uvAttribute.count; i++) {
                const u = uvAttribute.getX(i);
                const v = uvAttribute.getY(i);
                uvAttribute.setXY(i, 1- v, 1-u); // 90-degree rotation and flip
            }
            uvAttribute.needsUpdate = false;

            this.video.play();
            this.videoPlaying = true;
            this.hideTutorialMessage();
        }
    }

    // Function to stop the video
    stopVideo() {
        const targetObject = this.level.getObjectByName(this.targetObjectName);

        if (targetObject) {
            const material = targetObject.material;
            material.map = null; // Remove the video texture
            material.color.set(0xffffff); // Reset color if needed
            material.needsUpdate = true;

            this.video.pause();
            this.video.currentTime = 0; // Reset video
            this.videoPlaying = false;
        }
    }

    // Function to show the message
    showTutorialMessage() {
        this.tutorialMessage.style.display = 'block';
    }

    // Function to hide the message
    hideTutorialMessage() {
        this.tutorialMessage.style.display = 'none';
    }
}

export default meme;
