/**
 * File: CharacterHeightController.js
 * 
 * Description:
 *  Controller to handle whether character is on ground or in air for accurate animations and movement
 */
import physic from "../engine/physic";

class CharacterHeightController {
    constructor(controls) {
        this.controls = controls;
    }

    update(ground_colliders) {

        // Check if character is in contact with any ground colliders
        let has_touched_ground = false;
        for (const collider of ground_colliders) {
            physic.contactPair(this.controls._target.collider, collider, (manifold, flipped) => {
            
                // Now check that the normal of contact is directly up
                const normal = manifold.normal();
                const rounded = {
                    x: Math.abs(Math.round(normal.x)),
                    y: Math.abs(Math.round(normal.y)),
                    z: Math.abs(Math.round(normal.z)),
                }

                // If normal of contact is up, state that character is on ground
                if (rounded.x == 0 && rounded.y == 1 && rounded.z == 0) {
                    this.controls.height_state = "on ground";
                    has_touched_ground = true;
                    return;
                }                
            })
        }

        // If character has not touched ground, state that character is in air
        if (!has_touched_ground) {
            this.controls.height_state = "in air";
        }
    }
}

export default CharacterHeightController;