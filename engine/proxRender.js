import * as THREE from 'three';

class ProximityScreenRenderer {
    constructor(character_controller, scene) {
        this.character_controller = character_controller; 
        this.platformName = "stage_stage5_0_ground"; 
        this.screenName = "screen"; 
        this.scene = scene; 
        this.proximityThreshold = 5; 
        this.platformOffset = new THREE.Vector3(0, 0.5, 0); 
        this.isScreenActive = false; 
        this.isPlayerNear = false; //pLAYER IS NEAR [PL;ATFORM]
        this.videoPlaying = false; // This will change to whatever we want to do -> video is just a place holder for now

        // Create video element
        this.video = document.createElement('video');
        this.video.src = 'assets/test.mp4'; 
        this.video.loop = true; 
        this.video.muted = true; 
        this.video.crossOrigin = 'anonymous'; 
        this.video.style.display = 'none';

        // Create video texture
        this.videoTexture = new THREE.VideoTexture(this.video);
        this.videoTexture.minFilter = THREE.LinearFilter; 
        this.videoTexture.magFilter = THREE.LinearFilter;
        this.videoTexture.format = THREE.RGBAFormat;

        // E interact message popup making
        this.interactMessage = document.createElement('div');
        this.interactMessage.style.position = 'absolute';
        this.interactMessage.style.bottom = '20px';
        this.interactMessage.style.left = '50%';
        this.interactMessage.style.transform = 'translateX(-50%)';
        this.interactMessage.style.padding = '10px 20px';
        this.interactMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this.interactMessage.style.color = 'white';
        this.interactMessage.style.fontSize = '16px';
        this.interactMessage.style.display = 'none'; //Want it hidden first only want to show when on platofrm
        this.interactMessage.innerHTML = 'Press E to interact';
        document.body.appendChild(this.interactMessage);

        //listender for the above key and element we just kmade
        window.addEventListener('keydown', (event) => {
            if (event.key === 'e' || event.key === 'E') {
                if (this.isPlayerNear && !this.videoPlaying) {
                    this.playVideo();
                }
            }
        });
    }

    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const platformMesh = this.scene.getObjectByName(this.platformName);

            if (platformMesh) {
                const platformPos = platformMesh.position.clone().add(this.platformOffset); 
                
                // Check proximity
                const xDiff = Math.abs(playerPos.x - platformPos.x);
                const zDiff = Math.abs(playerPos.z - platformPos.z);
                
                const areaWidth = 5;
                const areaDepth = 5;

                if (xDiff < areaWidth / 2 && zDiff < areaDepth / 2) {
                    if (!this.isPlayerNear) { 
                        console.log("Player is near the platform, press 'E' to play the video");
                        this.showInteractMessage();
                        this.isPlayerNear = true; //PLayer near the platform run what we want to run
                    }
                } else {
                    if (this.isPlayerNear) {
                        this.hideInteractMessage(); //simislar to hiding the video but jsut removes the key poppup and video now
                        this.isPlayerNear = false;
                        if (this.videoPlaying) {
                            this.stopVideo(); // Stop video if they move away
                        }
                    }
                }
            }
        }
    }

    playVideo() {
        const screenMesh = this.scene.getObjectByName(this.screenName);
        
        if (screenMesh) {
            const existingMaterial = screenMesh.material;
    
            if (existingMaterial.map) {
                existingMaterial.map.dispose();
            }
    
            this.videoTexture = new THREE.VideoTexture(this.video);
            this.videoTexture.minFilter = THREE.LinearFilter; 
            this.videoTexture.magFilter = THREE.LinearFilter;
            this.videoTexture.format = THREE.RGBAFormat;
    
            existingMaterial.map = this.videoTexture;
            existingMaterial.needsUpdate = true;
    
            this.video.muted = false; 
            this.video.play(); 
            this.videoPlaying = true;
            this.hideInteractMessage(); // Hide the message after you press E
        } else {
            console.log("Screen mesh not found");
        }
    }

    stopVideo() {
        const screenMesh = this.scene.getObjectByName(this.screenName);
    
        if (screenMesh) {
            const originalMaterial = screenMesh.material; 
            originalMaterial.map = null; 
            originalMaterial.color.set(0xffffff); 
            originalMaterial.needsUpdate = true; 
            
            this.video.pause(); 
            this.video.currentTime = 0;
            this.videoPlaying = false; 
        } else {
            console.log("Screen mesh not found for stopping the video");
        }
    }

    showInteractMessage() {
        this.interactMessage.style.display = 'block';
    }


    hideInteractMessage() {
        this.interactMessage.style.display = 'none';
    }
}

export default ProximityScreenRenderer;
