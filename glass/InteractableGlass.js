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
            const breakable_mesh = new THREE.Mesh(glassMesh.children[0].geometry, glassMesh.children[0].material);
            breaker.prepareBreakableObject(breakable_mesh, 1, new THREE.Vector3(), new THREE.Vector3(), true);

            // Calculate impact point and direction
            const impactPoint = new THREE.Vector3().copy(glassMesh.position);
            // const direction = this.camera.getWorldPosition(new THREE.Vector3()).sub(impactPoint).normalize();
            console.log(controls);
            const direction = new THREE.Vector3().copy(controls._target.rotation).sub(impactPoint).normalize();
            // const direction = controls._target.position.clone().sub(impactPoint).normalize();
            // Subdivide glass
            const pieces = breaker.subdivideByImpact(
                breakable_mesh,
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