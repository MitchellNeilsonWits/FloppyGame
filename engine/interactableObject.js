/**
 * File: interactableObject.js
 * 
 * Description:
 *  Parent class that is implemented by various objects for interaction handling
 */

class interactableObject {
    constructor(interaction_display, interaction_display_controller,  object, distance_threshold, interaction_trigger) {
        this.interaction_display = interaction_display;
        this.interaction_display_controller = interaction_display_controller;
        this.object = object;
        this.distance_threshold = distance_threshold;
        this.interaction_trigger = interaction_trigger;
    }

    start_interaction() {}

    update() {}
}

export default interactableObject   