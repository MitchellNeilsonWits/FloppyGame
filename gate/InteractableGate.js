import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
import physic from "../engine/physic";
import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
import { create_collider_for_disk } from "../engine/function";
import addOneTimeEventListener from "../common/SingleUseListener";
import hud from "../hud/Hud";

class InteractableGate extends interactableObject {
    constructor(interaction_display, object) {
        const distance_threshold = 2;
        const interaction_trigger = 'gate';
        super(interaction_display, object, distance_threshold, interaction_trigger);
        this.start_interaction = this.start_interaction_static.bind(this);
        this.end_interaction = this.end_interaction_static.bind(this);
        this.use_object = this.use_object_static.bind(this);

    }
    
    use_object_static(controls, object_to_use, level) {
        
    }
    
    start_interaction_static(controls, object_interacted_with, level) {
      
    }

    end_interaction_static(controls, object_to_drop, level) {
        
    }
}

export default InteractableGate