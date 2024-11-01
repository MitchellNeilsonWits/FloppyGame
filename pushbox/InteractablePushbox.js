/**
 * File: InteractablePushbox.js
 * 
 * Description:
 *  Interactable pushbox that implements interactableObject to allow character interaction with a pushbox
 */

import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";

class InteractablePushbox extends interactableObject {

    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        super(interaction_display, object, distance_threshold, interaction_trigger);

        this.end_interaction = this.end_interaction_static.bind(this);
        this.start_interaction = this.start_interaction_static.bind(this);
        this.use_object = this.use_object_static.bind(this);

    }

    // Use the object: none
    use_object_static(controls, object_to_use, level) {
        
    }
    
    // Start interaction: move the pushbox
    start_interaction_static(controls, object_interacted_with, level) {
        
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


        if (!this._action) {
            // Play the pushing animation of the character
            const action = controls._state_machine._proxy._animations["pushing"].action;
            action.time = 0.0;
            action.enabled = true;
            action.setEffectiveTimeScale(1.0);
            action.setEffectiveWeight(200.0);

            this._action = action;
        }
        
        
        this._action.play();
    }

    // End itneraction: stop the pushing animation
    end_interaction_static(controls, object_to_drop, level) {
        if (this._action) {
            this._action.stop();
        }
    }
}

export default InteractablePushbox