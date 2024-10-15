import * as THREE from 'three'; 
import { ConvexObjectBreaker } from 'three-stdlib';
import Cannon from 'cannon'; // Import Cannon.js
import interactableObject from "../engine/interactableObject";

class InteractableGlass extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger, physicsWorld) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
        this.physicsWorld = physicsWorld; // Reference to the Cannon.js physics world
    }

    start_interaction(controls, object_interacted_with, level) {
        const breaker = new ConvexObjectBreaker();
        const glassMesh = object_interacted_with.object;
        console.log(glassMesh);

        if (glassMesh) {
            // Calculate impact point and direction
            const impactPoint = glassMesh.position.clone();
            const playerPos = this.character_controller._target.position.clone(); 
            const direction = playerPos.sub(impactPoint).normalize();

            // Subdivide glass into pieces
            const pieces = breaker.subdivideByImpact(
                glassMesh,
                impactPoint,
                direction,
                10,  // Max pieces (adjust based on desired effect)
                1    // randomness
            );

            // Remove the original glass mesh from the scene
            this.scene.remove(glassMesh);

            // Add each broken piece to the scene and Cannon.js physics world
            pieces.forEach((piece) => {
                this.scene.add(piece);  // Add the broken piece to the scene

                // Create a physics body for each piece
                const shape = this.createConvexShape(piece.geometry); // Create Cannon.js shape based on geometry
                const mass = 1; // Set mass for the broken piece
                const body = new Cannon.Body({ mass, shape });

                // Set initial position and rotation from the piece's three.js mesh
                body.position.set(piece.position.x, piece.position.y, piece.position.z);
                body.quaternion.set(piece.quaternion.x, piece.quaternion.y, piece.quaternion.z, piece.quaternion.w);

                // Add the body to the Cannon.js world
                this.physicsWorld.addBody(body);
            });

            // Clear interaction message after break
            this.hideInteractMessage();
        } else {
            console.log("Glass mesh not found");
        }
    }

    // Create a Cannon.js convex polyhedron shape from a three.js geometry
    createConvexShape(geometry) {
        const position = geometry.attributes.position;
        const vertices = [];
        const faces = [];

        // Extract vertices
        for (let i = 0; i < position.count; i++) {
            const vertex = new THREE.Vector3().fromBufferAttribute(position, i);
            vertices.push(new Cannon.Vec3(vertex.x, vertex.y, vertex.z));
        }

        // Extract faces (assuming triangles)
        for (let i = 0; i < geometry.index.count; i += 3) {
            faces.push([
                geometry.index.array[i],
                geometry.index.array[i + 1],
                geometry.index.array[i + 2]
            ]);
        }

        return new Cannon.ConvexPolyhedron({ vertices, faces });
    }

    end_interaction(controls, object_to_drop, level) {
        // Cleanup if necessary
    }
}

export default InteractableGlass;
