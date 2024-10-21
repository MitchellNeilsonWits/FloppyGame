import physic from "../engine/physic";

class CharacterHeightController {
    constructor(controls) {
        this.controls = controls;
    }

    update(ground_colliders) {

        
        let has_touched_ground = false;
        for (const collider of ground_colliders) {
            // console.log(this.controls._target.foot_collider.translation(), collider.translation());
            physic.contactPair(this.controls._target.collider, collider, (manifold, flipped) => {
            
                // Now check that the normal of contact is directly up
                const normal = manifold.normal();
                const rounded = {
                    x: Math.abs(Math.round(normal.x)),
                    y: Math.abs(Math.round(normal.y)),
                    z: Math.abs(Math.round(normal.z)),
                }

                if (rounded.x == 0 && rounded.y == 1 && rounded.z == 0) {
                    
                    this.controls.height_state = "on ground";
                    has_touched_ground = true;
                    return;
                }                
            })
        }
        if (!has_touched_ground) {
            this.controls.height_state = "in air";
        }
    }
}

export default CharacterHeightController;