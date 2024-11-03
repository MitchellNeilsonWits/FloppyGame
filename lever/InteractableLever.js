/**
 * File: InteractableLever.js
 * 
 * Description:
 *  Interactable lever to handle interactions with the object
 */


import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';

class InteractableLever extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
    }

    // No interaction for using the object
    use_object(controls, object_to_use, level) {
        
    }
    
    // Start interaction: toggle the interaction
    start_interaction(controls, object_interacted_with, level) {
        const lever = object_interacted_with.object
        // Change lever status to be the opposite of what it is now
        lever.toggle_lever_on();

    }
    
    // End interaction
    end_interaction(controls, object_to_drop, level) {
        
    }
}

export default InteractableLever