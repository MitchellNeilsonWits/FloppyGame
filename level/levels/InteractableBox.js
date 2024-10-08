import interactableObject from "../../engine/interactableObject";

class InteractableBox extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
    }

    start_interaction() {
        console.log("BOX INTERACTION!");
    }
}

export default InteractableBox