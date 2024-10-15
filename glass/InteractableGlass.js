// import { get_cartesian_angle_from_rotation } from "../common/Angle";
import * as THREE from 'three'; 
// import { ConvexObjectBreaker } from "three/examples/jsm/Addons.js";
import { ConvexObjectBreaker } from 'three-stdlib';
import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
// import physic from "../engine/physic";
// import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
// import { create_collider_for_disk } from "../engine/function";

class InteractableGlass extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
    }

    // createConvexGeometry(mesh) {
    //     const geometry = mesh.geometry;
    //     const vertices = [];
        
    //     const positionArray = geometry.attributes.position.array;
      
    //     for (let i = 0; i < positionArray.length; i += 3) {
    //       const vertex = new THREE.Vector3(
    //         positionArray[i],
    //         positionArray[i + 1],
    //         positionArray[i + 2]
    //       );
    //       vertices.push(vertex);
    //     }
        
    //     const convexGeometry = new ConvexBufferGeometry(vertices);
    //     return convexGeometry;
    // }
    

    use_object(controls, object_to_use, level) {
        
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
            const pieces = this.breaker.subdivideByImpact(
                glassMesh,
                impactPoint,
                direction,
                10,  // Max pieces (can adjust based on desired effect)
                1    // randomness
            );
    
            // Remove the original glass mesh from the scene
            this.scene.remove(glassMesh);
    
            // Add each piece to the scene and physics engine
            pieces.forEach((piece) => {
                this.scene.add(piece);  // Add piece to the scene
    
                // Create physics bodies for each piece
                const { rigidBody, collider } = createRigidBodyDynamic(piece, this.physics); // Assuming `this.physics` is your Rapier instance
            });
    
            // Clear message after break
            this.hideInteractMessage();
        } else {
            console.log("Glass mesh not found");
        }
    }

    end_interaction(controls, object_to_drop, level) {
        
    }
}

export default InteractableGlass