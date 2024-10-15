import * as THREE from 'three';
import { ConvexObjectBreaker } from 'three-stdlib';

class GlassBreaker {
    constructor(character_controller, scene, camera) {
        this.character_controller = character_controller; 
        this.glassName = "glass";
        this.scene = scene; 
        this.proximityThreshold = 5; 
        this.isPlayerNear = false; 
        this.breaker = new ConvexObjectBreaker();
        this.camera = camera;

        this.interactMessage = document.createElement('div');
        this.interactMessage.style.position = 'absolute';
        this.interactMessage.style.bottom = '20px';
        this.interactMessage.style.left = '50%';
        this.interactMessage.style.transform = 'translateX(-50%)';
        this.interactMessage.style.padding = '10px 20px';
        this.interactMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this.interactMessage.style.color = 'white';
        this.interactMessage.style.fontSize = '16px';
        this.interactMessage.style.display = 'none'; 
        this.interactMessage.innerHTML = 'Press E to break the glass';
        document.body.appendChild(this.interactMessage);


        window.addEventListener('keydown', (event) => {
            if ((event.key === 'e' || event.key === 'E') && this.isPlayerNear) {
                this.breakGlass();
            }
        });
    }

    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const glassMesh = this.scene.getObjectByName(this.glassName);

            if (glassMesh) {
                const glassPos = glassMesh.position.clone();

                const distance = playerPos.distanceTo(glassPos);
                if (distance < this.proximityThreshold) {
                    if (!this.isPlayerNear) {
                        this.showInteractMessage();
                        this.isPlayerNear = true;
                    }
                } else {
                    if (this.isPlayerNear) {
                        this.hideInteractMessage();
                        this.isPlayerNear = false;
                    }
                }
            }
        }
    }

    breakGlass() {
        const glassMesh = this.scene.getObjectByName(this.glassName);
        if (glassMesh) {
            // Calculate impact point and direction
            const impactPoint = glassMesh.position.clone();
            const direction = this.camera.getWorldPosition(new THREE.Vector3()).sub(impactPoint).normalize();

            // Subdivide glass
            const pieces = this.breaker.subdivideByImpact(
                glassMesh,
                impactPoint,
                direction,
                1, // Max pieces
                1  // randomness
            );

            //remove main glass
            this.scene.remove(glassMesh);

            // add pieces into scene
            pieces.forEach((piece) => {
                this.scene.add(piece);
            });

            // Clear message after break
            this.hideInteractMessage();
        } else {
            console.log("Glass mesh not found");
        }
    }

    showInteractMessage() {
        this.interactMessage.style.display = 'block';
    }

    hideInteractMessage() {
        this.interactMessage.style.display = 'none';
    }
}

export default GlassBreaker;
