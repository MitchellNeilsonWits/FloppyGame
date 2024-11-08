/**
 * File: InteractableGlass.js
 * 
 * Description:
 *  Interactable object to handle glass interactions
 */

import * as THREE from 'three'; 
import { ConvexObjectBreaker } from 'three-stdlib';
import Cannon from 'cannon'; // Import Cannon.js
import interactableObject from "../engine/interactableObject";
import Shard from './Shard';
import addOneTimeEventListener from '../common/SingleUseListener';
// import physic from "../engine/physic";
// import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
// import { create_collider_for_disk } from "../engine/function";

class InteractableGlass extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger, physicsWorld) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
        this.physicsWorld = physicsWorld; // Reference to the Cannon.js physics world
    }

    // Start interaction: breaking the glass
    start_interaction(controls, object_interacted_with, level) {
        const glassMesh = object_interacted_with.object;

        if (glassMesh) {
            if (!glassMesh.broken) {
                // Play the punch animation
                const action = controls._state_machine._proxy._animations["punch"].action;
                action.time = 0.0;
                action.enabled = true;
                action.setEffectiveWeight(2);
                action.setLoop(THREE.LoopOnce, 1);
                action.clampWhenFinished = true;
                action.setEffectiveTimeScale(1.0);
                action.setEffectiveWeight(200.0);

                // When punch done, break the glass
                addOneTimeEventListener(controls._mixer, 'finished', (e) => {
                    glassMesh.break_glass();
                    e.action.stop();
                })
                this._punch_action = action;        
                this._punch_action.play();
            }

            // Clear interaction message after break
            this.hideInteractMessage();
        } else {
            // console.log("Glass mesh not found");
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

    // End interaction
    end_interaction(controls, object_to_drop, level) {
        // Cleanup if necessary
    }
}

export default InteractableGlass;
