// import { get_cartesian_angle_from_rotation } from "../common/Angle";
import * as THREE from 'three'; 
// import { ConvexObjectBreaker } from "three/examples/jsm/Addons.js";
import { ConvexObjectBreaker } from 'three-stdlib';
import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import Shard from './Shard';
import addOneTimeEventListener from '../common/SingleUseListener';
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
            if (!glassMesh.broken) {
                const action = controls._state_machine._proxy._animations["punch"].action;
                action.time = 0.0;
                action.enabled = true;
                action.setEffectiveWeight(2);
                action.setLoop(THREE.LoopOnce, 1);
                action.clampWhenFinished = true;
                action.setEffectiveTimeScale(1.0);
                action.setEffectiveWeight(200.0);
                addOneTimeEventListener(controls._mixer, 'finished', (e) => {
                    glassMesh.break_glass();
                    e.action.stop();
                })
                this._punch_action = action;        
                this._punch_action.play();

                // glassMesh.broken = true;

                // const breakable_mesh = new THREE.Mesh(glassMesh.children[0].geometry, glassMesh.children[0].material);
                // breaker.prepareBreakableObject(breakable_mesh, 1, new THREE.Vector3(), new THREE.Vector3(), true);

                // // Calculate impact point and direction
                // const impactPoint = new THREE.Vector3().copy(glassMesh.position);
                // // const direction = this.camera.getWorldPosition(new THREE.Vector3()).sub(impactPoint).normalize();
                // console.log(controls);
                // const direction = new THREE.Vector3().copy(controls._target.rotation).sub(impactPoint).normalize();
                // // const direction = controls._target.position.clone().sub(impactPoint).normalize();
                // // Subdivide glass
                // const pieces = breaker.subdivideByImpact(
                //     breakable_mesh,
                //     impactPoint,
                //     direction,
                //     0, // Max pieces
                //     0  // randomness
                // );

                // //remove main glass
                // level.remove(glassMesh);

                // // add pieces into scene
                // console.log(pieces);

                // pieces.forEach((piece) => {
                //     piece.scale.setScalar(0.01);
                //     piece.position.copy(glassMesh.position);
                //     object_interacted_with.object.create_shard(piece, level);
                // })

                // pieces.forEach((piece) => {
                //     piece.scale.setScalar(0.01);
                //     piece.position.copy(glassMesh.position);
                //     const shard = new Shard(piece.position, piece.rotation);
                //     shard.set_shard(piece);
                //     level.add(shard);
                // });
            }

        } else {
            console.log("Glass mesh not found");
        }
    }

    end_interaction(controls, object_to_drop, level) {
        
    }
}

export default InteractableGlass