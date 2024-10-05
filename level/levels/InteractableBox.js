import interactableObject from "../../engine/interactableObject";

class InteractableBox extends interactableObject {
    constructor(interaction_display, object) {
        super(interaction_display, object);
    }

    start_interaction() {
        console.log("BOX INTERACTION!");
    }
}

export default InteractableBox