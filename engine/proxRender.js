import * as THREE from 'three';

class ProximityScreenRenderer {
    constructor(character_controller, scene) {
        this.character_controller = character_controller; 
        this.platformName = "stage_stage5_0"; 
        this.screenName = "screen"; 
        this.scene = scene; 
        this.proximityThreshold = 5; 
        this.platformOffset = new THREE.Vector3(0, 0.5, 0); 
        this.isScreenActive = false; 


        // Create video element
        this.video = document.createElement('video');
        this.video.src = 'assets/test.mp4'; 
        this.video.loop = true; 
        this.video.muted = true; 
        this.video.crossOrigin = 'anonymous'; 
        this.video.style.display = 'none';

        // Create video texture initially
        this.videoTexture = new THREE.VideoTexture(this.video);
        this.videoTexture.minFilter = THREE.LinearFilter; // smooth rendering?
        this.videoTexture.magFilter = THREE.LinearFilter;
        this.videoTexture.format = THREE.RGBAFormat; //RGBA format
    }

    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const platformMesh = this.scene.getObjectByName(this.platformName);

            if (platformMesh) {
                const platformPos = platformMesh.position.clone().add(this.platformOffset); // Adjust the platform position for height
                
                // Check proximity
                const xDiff = Math.abs(playerPos.x - platformPos.x);
                const zDiff = Math.abs(playerPos.z - platformPos.z);
                
                console.log("Platform pos:", platformPos);

                //BASCIALLY A BOX COLLIDER
                const areaWidth = 5;
                const areaDepth = 5;

                if (xDiff < areaWidth / 2 && zDiff < areaDepth / 2) {
                    if (!this.isScreenActive) { 
                        console.log("Player is near the platform");
                        this.renderOnScreen();
                        this.isScreenActive = true; 
                    }
                } else {
                    if (this.isScreenActive) { //derender when move away
                        this.removeFromScreen();
                        this.isScreenActive = false;
                    }
                }
            }
        }
    }

    renderOnScreen() {
        const screenMesh = this.scene.getObjectByName(this.screenName);
        
        if (screenMesh) {
            // Access the existing material
            const existingMaterial = screenMesh.material;
    
            if (existingMaterial.map) {
                existingMaterial.map.dispose();
            }
    
            this.videoTexture = new THREE.VideoTexture(this.video);
            this.videoTexture.minFilter = THREE.LinearFilter; 
            this.videoTexture.magFilter = THREE.LinearFilter;
            this.videoTexture.format = THREE.RGBAFormat;
    
    
            existingMaterial.map = this.videoTexture;
            existingMaterial.needsUpdate = true;//need to update the material
    
            // Set video texture repeat to (1, 1) to prevent stretching
            // this.videoTexture.repeat.set(1, 1);
            

            this.videoTexture.offset.set(0, 0); // Center the video
    
            // Play the video
            this.video.muted = false; 
            this.video.play(); 
        } else {
            console.log("Screen mesh not found"); 
        }
    }
    
    
    removeFromScreen() {
        const screenMesh = this.scene.getObjectByName(this.screenName);
    
        if (screenMesh) {
            // Reset to the original material or a simple color
            const originalMaterial = screenMesh.material; // Keep the original material
            originalMaterial.map = null; // Remove the video texture
            originalMaterial.color.set(0xffffff); // Set to white or any color you want
            originalMaterial.needsUpdate = true; // Notify Three.js that the material needs updating
            
            this.video.pause(); // Pause the video
            this.video.currentTime = 0; // Reset the video to the start
        } else {
            console.log("Screen mesh not found for removal"); // Log if not found
        }
    }
}

export default ProximityScreenRenderer;
