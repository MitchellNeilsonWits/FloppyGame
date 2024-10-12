// import { get_cartesian_angle_from_rotation } from "../common/Angle";
import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
// import physic from "../engine/physic";
// import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
// import { create_collider_for_disk } from "../engine/function";

class InteractablePushbox extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
    }
    
    use_object(controls, object_to_use, level) {
        
    }
    
    start_interaction(controls, object_interacted_with, level) {
        console.log("started pushing");

        const direction_of_player = get_cartesian_angle_from_rotation(controls._target.rotation);

        // Check which direction to push the object: will be the most prominent direction of the player
        const sine = Math.sin(direction_of_player);
        const cosine = Math.cos(direction_of_player);
        const velocity = {x:0,y:0,z:0};
        if (Math.abs(sine) >= Math.abs(cosine)) {
            velocity.x = sine;
        } else {
            velocity.z = cosine;
        }

        object_interacted_with.object.move_pushbox(velocity.x,velocity.y,velocity.z);

        const action = controls._state_machine._proxy._animations["pushing"].action;
        action.time = 0.0;
        action.enabled = true;
        action.setEffectiveTimeScale(1.0);
        action.setEffectiveWeight(200.0);

        this._action = action;
        
        this._action.play();
    }

    end_interaction(controls, object_to_drop, level) {
        console.log("stopped pushing");
        if (this._action) {
            this._action.stop();
        }
    }
}

export default InteractablePushbox