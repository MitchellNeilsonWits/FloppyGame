import * as THREE from 'three';

class ProximityScreenRenderer {
    constructor(player, platformName, screenName, scene) {
        this.player = player; // Reference to the player object
        this.platformName = platformName; // Name of the platform mesh
        this.screenName = screenName; // Name of the screen mesh
        this.scene = scene; // Reference to the Three.js scene
        this.proximityThreshold = 5; // Distance to check proximity
    }

    update() {
        console.log("PLayer pos -test :",this.player);
        const playerPos = this.player.position;
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
