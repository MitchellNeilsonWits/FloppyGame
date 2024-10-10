import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
import physic from "../engine/physic";
import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
import { create_collider_for_disk } from "../engine/function";

class InteractableDisk extends interactableObject {
    constructor(interaction_display, object) {
        const distance_threshold = 1.5;
        const interaction_trigger = 'press_e';
        super(interaction_display, object, distance_threshold, interaction_trigger);
        this.start_interaction = this.start_interaction_static.bind(this);
        this.end_interaction = this.end_interaction_static.bind(this);
        this.use_object = this.use_object_static.bind(this);

    }

    _addOneTimeEventListener(element, event, callback) {
        // const wrapper = e => {
        //     try {callback(e)} finally {
        //         element.removeEventListener(event, wrapper);
        //     };
        // }
        let handler = (e) => {
            callback(e);
            element.removeEventListener(event, handler);
        }
        element.addEventListener(event, handler);
    }
    
    use_object_static(controls, object_to_use, level) {
        controls.busy_loading_disk = true;
        console.log(this);
        if (this._disk_action) {
            this._disk_action.stop();
        }

        const action = controls._state_machine._proxy._animations["load_disk"].action;
        action.time = 0.0;
        action.enabled = true;
        action.setEffectiveWeight(2);
        action.setLoop(THREE.LoopOnce, 1);
        action.clampWhenFinished = true;
        action.setEffectiveTimeScale(1.0);
        action.setEffectiveWeight(1.0);
        // action.crossFadeFrom(fade_from, 0.1, true);
        
        const currently_loaded_disk = controls.power_controller.get_loaded_disk();
        console.log("after check, the currently loaded disk is",currently_loaded_disk);
        // if (currently_loaded_disk) {
            // currently_loaded_disk.interactable_object.end_interaction(controls, currently_loaded_disk, level);
        controls._holding_disk = currently_loaded_disk;//object_to_use; // Swap the old disk to be the new one
        // }

        controls.power_controller.set_loaded_disk(object_to_use); // Change the disk and power of our character                       
        this._addOneTimeEventListener(controls._mixer, 'finished', (e) => {
            console.log("currently loading:",object_to_use);
            e.action.stop(); // stop the animation
            if (currently_loaded_disk) {
                currently_loaded_disk.interactable_object.start_interaction(controls, currently_loaded_disk, level);
            }
            controls.busy_loading_disk = false;

        })
            
        
        
        
        // See if animation is done
        // controls._mixer.addEventListener('finished', (e) => {

            
        //     console.log("currently loading:",object_to_use);
        //     controls.power_controller.set_loaded_disk(object_to_use); // Change the disk and power of our character                       
        //     e.action.stop(); // stop the animation
        //     if (currently_loaded_disk) {
        //         currently_loaded_disk.interactable_object.start_interaction(controls, currently_loaded_disk, level);
        //     }
        //     controls._mixer.removeEventListener('finished',this); // remove the listener
        // })

        this._disk_action = action;        
        this._disk_action.play();

        // controls._holding_disk = null;
    }
    
    start_interaction_static(controls, object_interacted_with, level) {
        // console.log(object_interacted_with.object.collider);
        console.log("starting interaction, with this=",this);
        if (this._disk_action) {
            this._disk_action.stop();
        }
        
        // object_interacted_with.object.collider.setActiveCollisionTypes(ActiveCollisionTypes.FIXED_FIXED);
        physic.removeCollider(object_interacted_with.object.collider);
        // physic.removeRigidBody(object_interacted_with.object.rigidBody);
        console.log(level);
        level.remove(object_interacted_with.object);


        // const prev_action = controls._state_machine._proxy._animations[controls._state_machine._current_state.get_name()].action; 
        const action = controls._state_machine._proxy._animations["holding_disk"].action;
        action.time = 0.0;
        action.enabled = true;
        action.setEffectiveWeight(2);
        action.setEffectiveTimeScale(1.0);
        action.setEffectiveWeight(200.0);
        // action.crossFadeFrom(prev_action, 0.4, true);

        this._disk_action = action;

        // Play the animation one time
        // target._state_machine._proxy._animations[target._state_machine._current_state.get_name()].action.stop();

        
        // action.reset();
        // action.enabled = true;
        // action.setEffectiveTimeScale(3);
        // action.setEffectiveWeight(2);
        // action.setLoop(THREE.LoopOnce, 1);
        // action.clampWhenFinished = true;


        
        this._disk_action.play();



        // const time_to_completion = target._state_machine._proxy._animations["load_disk"].action.getClip().duration;
        
        // target._halt_character.time_to_completion =  time_to_completion;

        controls._holding_disk = object_interacted_with;

    }

    end_interaction_static(controls, object_to_drop, level) {
        if (this._disk_action) {
            this._disk_action.stop();
        }
        
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
        
    }
}

export default InteractableDisk