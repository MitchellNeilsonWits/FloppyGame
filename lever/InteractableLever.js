// import { get_cartesian_angle_from_rotation } from "../common/Angle";
import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
// import physic from "../engine/physic";
// import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
// import { create_collider_for_disk } from "../engine/function";

class InteractableLever extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
    }
    
    use_object(controls, object_to_use, level) {
        
    }
    
    start_interaction(controls, object_interacted_with, level) {
        const lever = object_interacted_with.object
        // Change lever status to be the opposite of what it is now
        lever.toggle_lever_on();

        console.log(object_interacted_with)
    }

    end_interaction(controls, object_to_drop, level) {
        
    }
}

export default InteractableLever