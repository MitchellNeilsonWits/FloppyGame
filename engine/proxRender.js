import * as THREE from 'three';

class ProximityScreenRenderer {
    constructor(character_controller, scene) {
        this.character_controller = character_controller; // Reference to the player object
        this.platformName = "stage_stage5_0"; // Name of the platform mesh
        this.screenName = "screen_screen.001_0"; // Name of the screen mesh
        this.scene = scene; // Reference to the Three.js scene
        this.proximityThreshold = 5; // Distance to check proximity
    }

    update() {
        
        console.log("PLayer pos -test :",this.character_controller._target);
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const platformMesh = this.scene.getObjectByName(this.platformName);

            if (platformMesh) {
                const platformPos = platformMesh.position;
                console.log("Platform pos:", platformPos);
                const distance = playerPos.distanceTo(platformPos);
                console.log("Distance:", distance);
                if (distance < this.proximityThreshold) {
                    this.renderOnScreen();
                }
            }
        }
    }

    renderOnScreen() {
        const screenMesh = this.scene.getObjectByName(this.screenName);

        if (screenMesh) {
            // Create a basic green material
            const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green color
            screenMesh.material = greenMaterial;
        }
    }
}

export default ProximityScreenRenderer;
