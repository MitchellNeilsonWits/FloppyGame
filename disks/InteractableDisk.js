/**
 * File: InteractableDisk.js
 * 
 * Description:
 *  Class for disk to allow character interactions
 */

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
    
    // Use disk:
    // - load disk into back or swap disks of a disk is already loaded
    use_object_static(controls, object_to_use, level) {
        controls.busy_loading_disk = true;
        if (this._disk_action) {
            this._disk_action.stop();
        }

        
        // Get if there is a disk loaded
        const currently_loaded_disk = controls.power_controller.get_loaded_disk();
        
        // Which disk will we be loading now
        controls._holding_disk = currently_loaded_disk;
        
        // If there is no disk loaded, play simple load disk animation
        if (!currently_loaded_disk) {
            const action = controls._state_machine._proxy._animations["load_disk"].action;
            action.time = 0.0;
            action.enabled = true;
            action.setEffectiveWeight(2);
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true;
            action.setEffectiveTimeScale(1.0);
            action.setEffectiveWeight(1.0);
            
            // SOUND.PLAY()
            const audioListener = new THREE.AudioListener();
            const load_disk_sound = new THREE.Audio(audioListener);
            const audioLoader = new THREE.AudioLoader();

            audioLoader.loadAsync('sounds/zapsplat_science_fiction_robot_power_up_60619.mp3').then((buffer) => {
                load_disk_sound.setBuffer(buffer);
                load_disk_sound.setLoop(false); 
                load_disk_sound.setVolume(0.05);  
            }).then(() => {
                load_disk_sound.play();
            });

            // When disk animation finishes, update the current power and set variables
            addOneTimeEventListener(controls._mixer, 'finished', (e) => {
                controls.power_controller.set_loaded_disk(object_to_use); // Change the disk and power of our character                       
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
        // If there is a disk loaded, play the swap disks animation
            const action = controls._state_machine._proxy._animations["swap_disks"].action;
            action.time = 0.0;
            action.enabled = true;
            action.setEffectiveWeight(2);
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true;
            action.setEffectiveTimeScale(1.0);
            action.setEffectiveWeight(200.0);
            // console.log(currently_loaded_disk);

            // SOUND.PLAY()
            const audioListener = new THREE.AudioListener();
            const load_disk_sound = new THREE.Audio(audioListener);
            const audioLoader = new THREE.AudioLoader();

            audioLoader.loadAsync('sounds/zapsplat_fantasy_magic_water_rush_magic_swirl_fast_003_71751.mp3').then((buffer) => {
                load_disk_sound.setBuffer(buffer);
                load_disk_sound.setLoop(false); 
                load_disk_sound.setVolume(0.05);  
            }).then(() => {
                load_disk_sound.play();
            });

            // When animation finishes, update the character powers and and set variables
            addOneTimeEventListener(controls._mixer, 'finished', (e) => {
                controls.power_controller.set_loaded_disk(object_to_use); // Change the disk and power of our character                       
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
    }
    
    // Start interaction to pickup a disk
    start_interaction_static(controls, object_interacted_with, level) {

        // PLAY THE AUDIO
        const audioListener = new THREE.AudioListener();
        const load_disk_sound = new THREE.Audio(audioListener);
        const audioLoader = new THREE.AudioLoader();

        audioLoader.loadAsync('sounds/zapsplat_household_aerosol_metal_insect_spray_can_grab_pick_up_001_98511.mp3').then((buffer) => {
            load_disk_sound.setBuffer(buffer);
            load_disk_sound.setLoop(false); 
            load_disk_sound.setVolume(0.08);  
        }).then(() => {
            load_disk_sound.play();
        });
        
        if (this._disk_action) {
            this._disk_action.stop();
        }
        
        // Remove from the scene 
        physic.removeCollider(object_interacted_with.object.collider);
        level.remove(object_interacted_with.object);

        // Play the holding disk animation
        const action = controls._state_machine._proxy._animations["holding_disk"].action;
        action.time = 0.0;
        action.enabled = true;
        action.setEffectiveWeight(2);
        action.setEffectiveTimeScale(1.0);
        action.setEffectiveWeight(200.0); // Set the effective weight to be a lot: force the animation for the arms

        this._disk_action = action;
        this._disk_action.play();

        controls._holding_disk = object_interacted_with;
        hud.update_holding_disk(object_interacted_with.power);

        // Set the disk colour
        const disk_color = object_interacted_with.object._color; 
        controls._target.children[0].children[0].children[2].material.emissive = new THREE.Color(disk_color.r,disk_color.g,disk_color.b);
        controls._target.children[0].children[0].children[2].material.emissiveIntensity = 0.15;
    }

    // End interaction: drop a disk (either from hand or reader)
    end_interaction_static(controls, object_to_drop, level) {
        if (this._disk_action) {
            this._disk_action.stop();
        }
        
        // SOUND.PLAY()
        const audioListener = new THREE.AudioListener();
        const load_disk_sound = new THREE.Audio(audioListener);
        const audioLoader = new THREE.AudioLoader();

        audioLoader.loadAsync('sounds/zapsplat_science_fiction_robot_failure_glitch_shutdown_001_26447.mp3').then((buffer) => {
            load_disk_sound.setBuffer(buffer);
            load_disk_sound.setLoop(false); 
            load_disk_sound.setVolume(0.05);  
        }).then(() => {
            load_disk_sound.play();
        });

        // change position of object to drop to position of character
        // object_to_drop.object.position.copy(controls._target.position);
        const player_pos = controls._target.position;
        const player_facing = get_cartesian_angle_from_rotation(controls._target.rotation);
        const drop_distance = 0.8;

        const drop_position = {
            x: player_pos.x + drop_distance*Math.sin(player_facing),
            y: player_pos.y + 0.4,
            z: player_pos.z + drop_distance*Math.cos(player_facing),
        }


        // Add the disk back to the level
        const new_collider = create_collider_for_disk(physic, object_to_drop.object.rigidBody);
        object_to_drop.object.collider = new_collider;
        object_to_drop.object.rigidBody.setAdditionalMass(100);
        object_to_drop.object.position.copy(drop_position);
        object_to_drop.object.rigidBody.setTranslation(drop_position);
        level.add(object_to_drop.object); 
    }
}

export default InteractableDisk