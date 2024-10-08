class interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        this.interaction_display = interaction_display;
        this.object = object;
        this.distance_threshold = distance_threshold;
        this.interaction_trigger = interaction_trigger;
    }

    start_interaction() {}

    update() {}
}

export default interactableObject   