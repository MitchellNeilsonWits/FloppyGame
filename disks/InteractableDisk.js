import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
import physic from "../engine/physic";
import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
import { create_collider_for_disk } from "../engine/function";

class InteractableDisk extends interactableObject {
    constructor(interaction_display, object, distance_threshold, interaction_trigger) {
        super(interaction_display, object, distance_threshold, interaction_trigger);
    }
    
    use_object(controls, object_to_use, level) {
        console.log("using object");
        const prev_action = this._action;
        this._action.stop();

        const fade_from = controls._state_machine._proxy._animations["holding_disk"].action;
        const action = controls._state_machine._proxy._animations["load_disk"].action;
        action.time = 0.0;
        action.enabled = true;
        action.setEffectiveWeight(2);
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.setEffectiveTimeScale(1.0);
        action.setEffectiveWeight(1.0);
        // action.crossFadeFrom(fade_from, 0.1, true);
        
        // See if animation is done
        controls._mixer.addEventListener('finished', (e) => {
            const fade_to = controls._state_machine._proxy._animations[controls._state_machine._current_state.get_name()].action;
            controls.change_ability('sample'); // set the new ability
            e.action.crossFadeTo(fade_to, 1, true); // fade out the animation
            // stop the action after the fade out
            // setTimeout(() => {
                e.action.stop(); // stop the animation
            // }, 0.5)
            controls._mixer.removeEventListener('finished',this); // remove the listener
        })

        this._action = action;        
        this._action.play();
        console.log(this._action);
    }
    
    start_interaction(controls, object_interacted_with, level) {
        console.log(object_interacted_with);
        
        // object_interacted_with.object.collider.setActiveCollisionTypes(ActiveCollisionTypes.FIXED_FIXED);
        physic.removeCollider(object_interacted_with.object.collider);
        // physic.removeRigidBody(object_interacted_with.object.rigidBody);
        level.remove(object_interacted_with.object);

        controls._holding_disk = object_interacted_with;

        // const prev_action = controls._state_machine._proxy._animations[controls._state_machine._current_state.get_name()].action; 
        const action = controls._state_machine._proxy._animations["holding_disk"].action;
        action.time = 0.0;
        action.enabled = true;
        action.setEffectiveWeight(2);
        action.setEffectiveTimeScale(1.0);
        action.setEffectiveWeight(200.0);
        // action.crossFadeFrom(prev_action, 0.4, true);

        this._action = action;

        // Play the animation one time
        // target._state_machine._proxy._animations[target._state_machine._current_state.get_name()].action.stop();

        
        // action.reset();
        // action.enabled = true;
        // action.setEffectiveTimeScale(3);
        // action.setEffectiveWeight(2);
        // action.setLoop(THREE.LoopOnce, 1);
        // action.clampWhenFinished = true;


        
        this._action.play();



        // const time_to_completion = target._state_machine._proxy._animations["load_disk"].action.getClip().duration;
        
        // target._halt_character.time_to_completion =  time_to_completion;
    }

    end_interaction(controls, object_to_drop, level) {
        console.log("drop disk:",object_to_drop);
        
        // change position of object to drop to position of character
        // object_to_drop.object.position.copy(controls._target.position);
        const player_pos = controls._target.position;
        const player_facing = get_cartesian_angle_from_rotation(controls._target.rotation);
        const drop_distance = 0.8;

        const drop_position = {
            x: player_pos.x + drop_distance*Math.sin(player_facing),
            y: player_pos.y,
            z: player_pos.z + drop_distance*Math.cos(player_facing),
        }


        const new_collider = create_collider_for_disk(physic, object_to_drop.object.rigidBody);
        object_to_drop.object.collider = new_collider;
        // physic.removeCollider(object_interacted_with.object.collider);

        // object_to_drop.object.collider.setActiveCollisionTypes(ActiveCollisionTypes.DEFAULT | ActiveCollisionTypes.KINEMATIC_FIXED);
        // object_to_drop.object.initPhysic();
        object_to_drop.object.rigidBody.setAdditionalMass(100);
        object_to_drop.object.position.copy(drop_position);
        object_to_drop.object.rigidBody.setTranslation(drop_position);

        // finally, add back into the level
        level.add(object_to_drop.object);
        
        controls._holding_disk = null;
        this._action.stop();

    }
}

export default InteractableDisk