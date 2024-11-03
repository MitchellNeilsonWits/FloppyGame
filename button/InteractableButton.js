/**
 * File: InteractableButton.js
 * 
 * Description:
 *  Interactable component to link button to player interactions
 */

import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
import physic from "../engine/physic";
import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
import { create_collider_for_disk } from "../engine/function";
import addOneTimeEventListener from "../common/SingleUseListener";
import hud from "../hud/Hud";
import timer from "../timer/Timer";

class InteractableButton extends interactableObject {
    constructor(interaction_display, object) {
        const distance_threshold = 1.5;
        const interaction_trigger = 'button';
        super(interaction_display, object, distance_threshold, interaction_trigger);
        this.start_interaction = this.start_interaction_static.bind(this);
        this.end_interaction = this.end_interaction_static.bind(this);
        this.use_object = this.use_object_static.bind(this);

    }
    
    // No requirement for using the object
    use_object_static(controls, object_to_use, level) {
        
    }
    
    // Start interaction will start the placement matters level timer and declare that the button is pressed
    start_interaction_static(controls, object_interacted_with, level) {
        timer.show_timer();
        timer.update_time(20);
        object_interacted_with.object.pressed = true;
    }

    // No requirement for ending the interaction
    end_interaction_static(controls, object_to_drop, level) {
        
    }
}

export default InteractableButton