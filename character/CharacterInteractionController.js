/**
 * File: CharacterInteractionController.js
 * 
 * Description:
 *  Controller to handle character interactions with variety of InteractionObject components
 */

import * as THREE from 'three';
import { get_cartesian_angle_from_rotation } from '../common/Angle';
import physic from '../engine/physic';
import hud from '../hud/Hud';

class CharacterInteractionController {

    // Setup some base variables
    constructor(controls, input) {
        this._controls = controls;
        this._level = controls._level;
        this._target = controls._target; // the player
        this._input = input; // input keys 
        this._raycaster = new THREE.Raycaster();
        this._distance_threshold = 2.5;
        
        this.is_pushing = false;


        this.can_interact = false;

        // Create the standard popup message to be displayed
        this.interactMessage = document.createElement('div');
        this.interactMessage.id = 'interact_message';
        this.interactMessage.style.position = 'absolute';
        this.interactMessage.style.bottom = '20px';
        this.interactMessage.style.left = '50%';
        this.interactMessage.style.transform = 'translateX(-50%)';
        this.interactMessage.style.padding = '10px 20px';
        this.interactMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this.interactMessage.style.color = 'white';
        this.interactMessage.style.fontSize = '16px';
        this.interactMessage.innerHTML = 'Press E to interact';



        // initialize a "start interaction" function to not do anything; and state that we are not interacting with an object
        this._start_interaction = () => {};
        this._object_being_interacted_with = null;
    }

    // Function to show an interact message
    _show_interact_message(message) {
        this.interactMessage.innerHTML = `${message}`;
        document.body.appendChild(this.interactMessage);  
    }

    // Function to hide the interact message
    _hide_interact_message() {

        this._start_interaction = () => {};
        const el = document.getElementById('interact_message');
        if (el) {
            document.body.removeChild(el);
        }
    }

    // Function to get the distance to an object
    _distance_to_object(object) {
        const pos_o = object.position;
        const pos_p = this._target.position;

        const dist = Math.sqrt( Math.pow(pos_o.x - pos_p.x, 2) + Math.pow(pos_o.y - pos_p.y, 2) + Math.pow(pos_o.z - pos_p.z, 2) );
        return dist;
    }

    // Finds the cartesian angle along the x-z plane (easy to work with)
    _find_2d_angle() {
        return get_cartesian_angle_from_rotation(this._target.rotation);
    }

    // Function to get desired angle to an object
    _desired_angle_to_object(object) {
        const pos_o = object.position;
        const pos_p = this._target.position;

        const angle = Math.atan((pos_p.z - pos_o.z)/(pos_p.x - pos_o.x));

        if (pos_p.z >= pos_o.z) {
            if (pos_p.x >= pos_o.x) {
                return Math.PI/2 - angle + Math.PI;
            } else {
                return (-1*angle) + (3/2)*Math.PI - Math.PI;
            }
        } else {
            if (pos_p.x >= pos_o.x) {
                return (-1*angle) + Math.PI/2 + Math.PI;
            } else {
                return ( Math.PI/2 - angle) + Math.PI - Math.PI;
            }
        }
    }

    // Function to check angular range is valid
    _check_angle_range(desired_angle, current_angle, view_range) {
        const upper_view_range = desired_angle + view_range;
        const lower_view_range = desired_angle - view_range;

        // Handle special cases
        if (upper_view_range > 2*Math.PI) {
            if (lower_view_range <= 2*Math.PI) {

                // Look from [lower_view_range, 2*PI] and [0, upper_view_range]
                if (lower_view_range <= current_angle ) {
                    return true;
                } else if (current_angle <= upper_view_range) {
                    return true;
                }

            }
        } else if (lower_view_range < 0) {
            if (lower_view_range+2*Math.PI <= current_angle ) {
                return true;
            } else if (current_angle <= upper_view_range) {
                return true;
            }
        } else {
            if (lower_view_range <= current_angle && current_angle <= upper_view_range) {
                return true;
            }
        }

        return false;
    }

    // Function to determine whether the character is able to interact
    get_can_interact() {
        return this.can_interact;
    }

    // Function to handle "E" interactions
    handle_press_e_interaction(interactable_object) {
        // Get the object of the interactable object
        const object = interactable_object.object;

        // Calculate the euclidean distance from the object
        const distance = this._distance_to_object(object);

        const distance_threshold = interactable_object.interactable_object.distance_threshold;

        // If the distance is within the threshold, we see if the character is facing the object
        if (distance <= distance_threshold) {

            // Find the desired angle
            const desired_angle = this._desired_angle_to_object(object);
            const current_angle = this._find_2d_angle();

            // Check if the current angle is within range of the desired angle
            const view_range = Math.PI/6;
            const in_range = this._check_angle_range(desired_angle, current_angle, view_range);

            if (in_range) {
                if (!this.can_interact) {
                    this.can_interact = true;
                    this._object_to_interact_with = interactable_object; 
                    this._start_interaction = interactable_object.interactable_object.start_interaction;

                    
                    this._show_interact_message(interactable_object.interactable_object.interaction_display);
                }
                return true;
            }
        }
    }

    // Function to handle "push" (touch) interaction
    handle_touch_interaction(interactable_object) {
        // Get the object of the interactable object
        const object = interactable_object.object;

        let touching_object_side = false;
        physic.contactPair(this._target.collider, object.collider, (manifold, flipped) => {
            const normal = manifold.normal();
            const rounded = {
                x: Math.round(normal.x),
                y: Math.round(normal.y),
                z: Math.round(normal.z),
            }

            if ((Math.abs(rounded.x) === 0 && Math.abs(rounded.y) === 0 & Math.abs(rounded.z) === 1) || (Math.abs(rounded.x) === 1 && Math.abs(rounded.y) === 0 & Math.abs(rounded.z) === 0)) {
                touching_object_side = true;
            }
        });

        // If player is touching the side of the object
        if (touching_object_side) {
            // Calculate the euclidean distance from the object
            const distance = this._distance_to_object(object);
            
            const distance_threshold = interactable_object.interactable_object.distance_threshold;
            
            // If the distance is within the threshold, we see if the character is facing the object
            if ((distance <= distance_threshold)) {

                // Find the desired angle
                const desired_angle = this._desired_angle_to_object(object);
                const current_angle = this._find_2d_angle();
                // const current_angle = this._controls._direction_of_offset()

                // Check if the current angle is within range of the desired angle
                const view_range = Math.PI/8;
                const in_range = this._check_angle_range(desired_angle, current_angle, view_range);

                if (in_range) {
                    if (!this.can_interact) {
                        this.can_interact = true;
                        this._object_to_interact_with = interactable_object; 
                        this._end_interaction = interactable_object.interactable_object.end_interaction;

                        if (this._controls.power_controller.power === "strength") {
                            this._start_interaction = interactable_object.interactable_object.start_interaction;
                            this._show_interact_message(interactable_object.interactable_object.interaction_display);
                        } else {
                            this._show_interact_message("You cannot push objects without the strength floppy disk");
                        }
                    }
                    return true;
                }
            }
        }
    }

    // Function to handle right click interactions
    handle_right_click_interaction(interactable_object) {
        // Get the object of the interactable object
        const object = interactable_object.object;

        // Calculate the euclidean distance from the object
        const distance = this._distance_to_object(object);

        const distance_threshold = interactable_object.interactable_object.distance_threshold;

        // If the distance is within the threshold, we see if the character is facing the object
        if (distance <= distance_threshold) {

            // Find the desired angle
            const desired_angle = this._desired_angle_to_object(object);
            const current_angle = this._find_2d_angle();

            // Check if the current angle is within range of the desired angle
            const view_range = Math.PI/6;
            const in_range = this._check_angle_range(desired_angle, current_angle, view_range);

            if (in_range) {
                if (!this.can_interact) {
                    this.can_interact = true;
                    this._object_to_interact_with = interactable_object; 
                    
                    if (this._controls.power_controller.power === "strength") {
                        this._start_interaction = interactable_object.interactable_object.start_interaction;
                        this._show_interact_message(interactable_object.interactable_object.interaction_display);
                    } else {
                        this._show_interact_message("You cannot pull levers without the strength floppy disk");
                    }
                }
                return true;
            }
        }
    }

    // Function to handle interactions with a gate
    handle_gate_interaction(interactable_object) {
        // Get the object of the interactable object
        const object = interactable_object.object;

        // Calculate the euclidean distance from the object
        const distance = this._distance_to_object(object);

        const distance_threshold = interactable_object.interactable_object.distance_threshold;

        // If the distance is within the threshold, we see if the character is facing the object
        if (distance <= distance_threshold) {
            if (!this.can_interact) {
                    // console.log("CLOSE");
                    this.can_interact = true;
                    this._object_to_interact_with = interactable_object; 
                    this._start_interaction = interactable_object.interactable_object.start_interaction;

                    
                    this._show_interact_message(interactable_object.interactable_object.interaction_display);
                }
                return true;
            
        }
    }

    // Function to handle interactions with glass
    handle_glass_interaction(interactable_object) {
        // Get the object of the interactable object
        const object = interactable_object.object;

        // Calculate the euclidean distance from the object
        const distance = this._distance_to_object(object);

        const distance_threshold = interactable_object.interactable_object.distance_threshold;

        // If the distance is within the threshold, we see if the character is facing the object
        if (distance <= distance_threshold) {

            // Find the desired angle
            const desired_angle = this._desired_angle_to_object(object);
            const current_angle = this._find_2d_angle();

            // Check if the current angle is within range of the desired angle
            const view_range = Math.PI/6;
            const in_range = this._check_angle_range(desired_angle, current_angle, view_range);

            if (in_range) {
                if (!this.can_interact) {
                    this.can_interact = true;
                    this._object_to_interact_with = interactable_object; 
                    
                    if (this._controls.power_controller.power === "strength") {
                        this._start_interaction = interactable_object.interactable_object.start_interaction;
                        this._show_interact_message(interactable_object.interactable_object.interaction_display);
                    } else {
                        this._show_interact_message("You cannot break glass without the strength floppy disk");
                    }

                    
                }
                return true;
            }
        }
    }

    // Function to handle interactions with an NPC
    handle_npc_interaction(interactable_object) {
        // Get the object of the interactable object
        const object = interactable_object.object;

        // Calculate the euclidean distance from the object
        const distance = this._distance_to_object(object);

        const distance_threshold = interactable_object.interactable_object.distance_threshold;

        // If the distance is within the threshold, we see if the character is facing the object
        if (distance <= distance_threshold) {

            // Find the desired angle
            const desired_angle = this._desired_angle_to_object(object);
            const current_angle = this._find_2d_angle();

            // Check if the current angle is within range of the desired angle
            const view_range = Math.PI/6;
            const in_range = this._check_angle_range(desired_angle, current_angle, view_range);

            if (in_range) {
                if (!this.can_interact) {
                    this.can_interact = true;
                    this._object_to_interact_with = interactable_object; 
                    this._start_interaction = interactable_object.interactable_object.start_interaction;

                    
                    this._show_interact_message(interactable_object.interactable_object.interaction_display);
                }
                return true;
            }
        }
    }

    // Function to handle interactions with a button
    handle_button_interaction(interactable_object) {
        // Get the object of the interactable object
        const object = interactable_object.object;

        // Calculate the euclidean distance from the object
        const distance = this._distance_to_object(object);

        const distance_threshold = interactable_object.interactable_object.distance_threshold;

        // If the distance is within the threshold, we see if the character is facing the object
        if (distance <= distance_threshold) {

            // Find the desired angle
            const desired_angle = this._desired_angle_to_object(object);
            const current_angle = this._find_2d_angle();

            // Check if the current angle is within range of the desired angle
            const view_range = Math.PI/6;
            const in_range = this._check_angle_range(desired_angle, current_angle, view_range);

            if (in_range) {
                if (!this.can_interact) {
                    this.can_interact = true;
                    this._object_to_interact_with = interactable_object; 
                    this._start_interaction = interactable_object.interactable_object.start_interaction;

                    
                    this._show_interact_message(interactable_object.interactable_object.interaction_display);
                }
                return true;
            }
        }
    }

    // Update to handle interactability with various objects
    update(interactable_objects) {
        this.is_pushing = false;

        // If user is able to interact with some object, handle inputs based on the trigger of the interaction available
        if (this.can_interact) {
            if (this._input) {
                const interaction_trigger = this._object_to_interact_with.interactable_object.interaction_trigger;
                
                if (this._input._keys) {
                    if (interaction_trigger === 'disk') {
                        // DISK INTERACTION
                        // press_e objects will start an interaction only when E is pressed on keyboard
                        if (this._input._keys.interact) {
                            this._object_being_interacted_with = this._object_to_interact_with;
                            this._end_interaction = this._object_to_interact_with.interactable_object.end_interaction;
                            this._use_object = this._object_to_interact_with.interactable_object.use_object;
                            
                            if (!this._controls.busy_loading_disk) {
                                this._start_interaction(this._controls, this._object_being_interacted_with, this._level);
                                // this._object_to_interact_with = null;
                                this.can_interact = false;
                                this._hide_interact_message();
                            }
                        }
                    } else if (interaction_trigger === 'pushbox') {
                        // PUSHBOX INTERACTION
                        this._object_to_interact_with.interactable_object.end_interaction(this._controls, this._object_to_interact_with, this._level);
                        if (this._controls.power_controller.power === "strength") {
                        
                            // Ensure that y values are good enough to work with
                            const object_y = this._object_to_interact_with.object.position.y;
                            const player_y = this._target.position.y;
                            const vertical_distance = Math.abs(player_y - object_y);
                            const vertical_distance_threshold = 0.5;

                            const collider = this._object_to_interact_with.object.collider;

                            var is_pushing = false;
                            physic.contactPair(this._controls._target.collider, collider, (manifold, flipped) => {
            
                                // Now check that the normal of contact is directly up
                                const normal = manifold.normal();
                                const rounded = {
                                    x: Math.abs(Math.round(normal.x)),
                                    y: Math.abs(Math.round(normal.y)),
                                    z: Math.abs(Math.round(normal.z)),
                                }
                
                                if ((rounded.x == 1 && rounded.y == 0 && rounded.z == 0) || (rounded.x == 0 && rounded.y == 0 && rounded.z == 1)) {
                                    // console.log("now only touching");
                                    is_pushing = true;
                                    this._start_interaction(this._controls, this._object_to_interact_with, this._level);
                                } else {
                                    this._end_interaction(this._controls, this._object_to_interact_with, this._level);
                                }           
                            })
                            if (!is_pushing) {
                                this._end_interaction(this._controls, this._object_to_interact_with, this._level);
                            } else {
                                this.is_pushing = true;
                            }
                        }
                    } else if (interaction_trigger === "lever") {
                        // LEVER INTERACTION
                        if (this._input._keys.interact) {
                            this._start_interaction(this._controls, this._object_to_interact_with, this._level);
                        }
                    } else if (interaction_trigger === "gate") {
                        // GATE INTERACTION
                        // nothing to trigger for a gate
                    } else if (interaction_trigger === "glass") {
                        // GLASS INTERACTION
                        if (this._input._keys.left_click) {
                            this._start_interaction(this._controls, this._object_to_interact_with, this._level);
                        }
                    } else if (interaction_trigger === "npc") {
                        // NPC INTERACTION
                        if (!this._controls._currently_reading_npc) { 
                            if (this._input._keys.interact) {
                                this._start_interaction(this._controls, this._object_to_interact_with, this._level);
                                this._hide_interact_message();
                            }
                        }
                    } else if (interaction_trigger === "button") {
                        // BUTTON INTERACTION
                        if (this._input._keys.interact) {
                            this._start_interaction(this._controls, this._object_to_interact_with, this._level);
                            this._hide_interact_message();
                        }
                        
                    }
                }
            }
        }

        // Check if a disk is currently loaded, and handle if the user wishes to unload the disk
        if (this._controls.power_controller.loaded_disk) {
            if (this._input._keys.unload_disk) {
                const loaded_disk = this._controls.power_controller.loaded_disk;
                
                hud.update_loaded_disk(null);
                loaded_disk.interactable_object.end_interaction(this._controls, loaded_disk, this._level);

                this._controls.power_controller.loaded_disk = null;
                this._controls.power_controller.clear_loaded_disk();
            }
        }

        // Check if holding a disk, and handle if want to drop the disk or use the disk
        if (this._controls._holding_disk) {

            if (!this._controls.busy_loading_disk) {    
                // If character is holding a disk, handle the dropping and using of the disk
                // -- cannot interact with other objects if holding an objects already
                if (this._input._keys.drop) {
                    this._end_interaction = this._controls._holding_disk.interactable_object.end_interaction;
                    this._end_interaction(this._controls, this._controls._holding_disk, this._level);
                    this._controls._holding_disk = null;
                    hud.update_holding_disk(null);
                    
                    this._object_being_interacted_with = null;
                    this.can_interact = false;
                } else if (this._input._keys.use) {
                    this._use_object = this._controls._holding_disk.interactable_object.use_object;
                    this._use_object(this._controls, this._controls._holding_disk, this._level);
                    this._object_being_interacted_with = null;
                    this.can_interact = false;
                }
            }

        } else {
            // If character is not holding a disk, check to see if we can run interactions for the user

            if (interactable_objects) {
                if (this._target) {
                    // Go through each dynamic object
                    for (var key in interactable_objects) {

                        const trigger = interactable_objects[key].interactable_object.interaction_trigger;

                        if (trigger === "disk") {
                            // DISK INTERACTION
                            if (!this._controls.busy_loading_disk) {
                                const interaction_started = this.handle_press_e_interaction(interactable_objects[key]);
                                if (interaction_started) {
                                    return;
                                };
                            }
                        } else if (trigger === "pushbox") {
                            // PUSHBOX INTERACTION
                            const interaction_started = this.handle_touch_interaction(interactable_objects[key]);
                            if (interaction_started) {
                                return;
                            };
                            if (this.is_pushing == false) {
                                interactable_objects[key].interactable_object.end_interaction(this._controls, this._object_to_interact_with, this._level);
                            }
                        } else if (trigger === "lever") {
                            // LEVER INTERACTIOn
                            const interaction_started = this.handle_right_click_interaction(interactable_objects[key]);
                            if (interaction_started) {
                                return;
                            }
                        }  else if (trigger === "gate") {
                            // GATE INTERACTION
                            // Check if the lever is pulled
                            const lever_name = `lever_${interactable_objects[key].name.split('_')[1]}`;
                            const lever = interactable_objects[lever_name];
                            const is_lever_on = lever.object.lever_on;

                            // Only handle display if lever is off
                            if (!is_lever_on) {
                                const interaction_started = this.handle_gate_interaction(interactable_objects[key]);
                                if (interaction_started) {
                                    return;
                                }
                            }
                        } else if (trigger === "glass") {
                            // GLASS INTERACTION
                            if (!interactable_objects[key].object.broken) {
                                const interaction_started = this.handle_glass_interaction(interactable_objects[key]);
                                if (interaction_started) {
                                    return;
                                }
                            }
                        } else if (trigger === "npc") {
                            // NPC INTERACTION
                            const interaction_started = this.handle_npc_interaction(interactable_objects[key]);
                            if (interaction_started) {
                                return;
                            }
                            
                        } else if (trigger === "button") {
                            // BUTTON INTERACTION
                            const interaction_started = this.handle_button_interaction(interactable_objects[key]);
                            if (interaction_started) {
                                return;
                            }
                            
                        }
                        
                    }

                    // If user can interact, and they haven't interacted with the above, then it means they don't want to
                    // or have moved away: so disable the message and reset the interactions
                    if (this.can_interact) {
                        this.can_interact = false;
                        this._hide_interact_message();
                        return false;
                    }
                }
            }
        }
        
    }
}

export default CharacterInteractionController