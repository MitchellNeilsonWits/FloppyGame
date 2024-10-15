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
    
    use_object(controls, object_to_use, level) {
        
    }
    
    start_interaction(controls, object_interacted_with, level) {
        const breaker = new ConvexObjectBreaker();
        const glassMesh = object_interacted_with.object;
        
        console.log(glassMesh.geometry.attributes.position);

        if (glassMesh) {
            // Calculate impact point and direction
            const impactPoint = glassMesh.position.clone();
            // const direction = this.camera.getWorldPosition(new THREE.Vector3()).sub(impactPoint).normalize();
            console.log(controls);
            const direction = new THREE.Vector3().copy(controls._target.rotation).sub(impactPoint).normalize();
            
            // Subdivide glass
            const pieces = breaker.subdivideByImpact(
                glassMesh,
                impactPoint,
                direction,
                1, // Max pieces
                1  // randomness
            );

            //remove main glass
            level.remove(glassMesh);

            // add pieces into scene
            pieces.forEach((piece) => {
                level.add(piece);
            });

        } else {
            console.log("Glass mesh not found");
        }
    }

    end_interaction(controls, object_to_drop, level) {
        
    }
}

export default InteractableGlass