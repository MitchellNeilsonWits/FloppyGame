import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
import physic from "../engine/physic";
import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
import { create_collider_for_disk } from "../engine/function";
import addOneTimeEventListener from "../common/SingleUseListener";
import hud from "../hud/Hud";

class InteractableDisk extends interactableObject {
    constructor(interaction_display, object) {
        const distance_threshold = 1.5;
        const interaction_trigger = 'disk';
        super(interaction_display, object, distance_threshold, interaction_trigger);
        this.start_interaction = this.start_interaction_static.bind(this);
        this.end_interaction = this.end_interaction_static.bind(this);
        this.use_object = this.use_object_static.bind(this);

    }
    
    use_object_static(controls, object_to_use, level) {
        controls.busy_loading_disk = true;
        console.log(this);
        if (this._disk_action) {
            this._disk_action.stop();
        }

        
        // action.crossFadeFrom(fade_from, 0.1, true);
        
        const currently_loaded_disk = controls.power_controller.get_loaded_disk();
        console.log("after check, the currently loaded disk is",currently_loaded_disk);
        // if (currently_loaded_disk) {
            // currently_loaded_disk.interactable_object.end_interaction(controls, currently_loaded_disk, level);
        controls._holding_disk = currently_loaded_disk;//object_to_use; // Swap the old disk to be the new one
        // }

        

        if (!currently_loaded_disk) {
            const action = controls._state_machine._proxy._animations["load_disk"].action;
            action.time = 0.0;
            action.enabled = true;
            action.setEffectiveWeight(2);
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true;
            action.setEffectiveTimeScale(1.0);
            action.setEffectiveWeight(1.0);
            

            addOneTimeEventListener(controls._mixer, 'finished', (e) => {
                controls.power_controller.set_loaded_disk(object_to_use); // Change the disk and power of our character                       
                console.log("currently loading:",object_to_use);
                controls.skin_controller.change_skin(object_to_use.power);
                e.action.stop(); // stop the animation
                if (currently_loaded_disk) {
                    currently_loaded_disk.interactable_object.start_interaction(controls, currently_loaded_disk, level);            
                }
                hud.update_loaded_disk(object_to_use.power);
                hud.update_holding_disk(null);
                
                controls.busy_loading_disk = false;

            })
            this._disk_action = action;        
            this._disk_action.play();
        } else {
            const action = controls._state_machine._proxy._animations["swap_disks"].action;
            action.time = 0.0;
            action.enabled = true;
            action.setEffectiveWeight(2);
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true;
            action.setEffectiveTimeScale(1.0);
            action.setEffectiveWeight(200.0);
            console.log(currently_loaded_disk);
            

            addOneTimeEventListener(controls._mixer, 'finished', (e) => {
                controls.power_controller.set_loaded_disk(object_to_use); // Change the disk and power of our character                       
                console.log("currently loading:",object_to_use);
                controls.skin_controller.change_skin(object_to_use.power);
                e.action.stop(); // stop the animation
                if (currently_loaded_disk) {
                    currently_loaded_disk.interactable_object.start_interaction(controls, currently_loaded_disk, level);
                }
                controls.busy_loading_disk = false;
                hud.update_loaded_disk(object_to_use.power);
                hud.update_holding_disk(currently_loaded_disk.power);
            })
            this._disk_action = action;        
            this._disk_action.play();
        }

        
            
        
        
        
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
        hud.update_holding_disk(object_interacted_with.power);

        console.log(object_interacted_with)
        const disk_color = object_interacted_with.object._color; 
        controls._target.children[0].children[0].children[2].material.emissive = new THREE.Color(disk_color.r,disk_color.g,disk_color.b);
        controls._target.children[0].children[0].children[2].material.emissiveIntensity = 0.15;

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
        
        
    }
}

export default InteractableDisk