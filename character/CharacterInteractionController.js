import * as THREE from 'three';
import { get_cartesian_angle_from_rotation } from '../common/Angle';
import physic from '../engine/physic';

class CharacterInteractionController {
    constructor(controls, input) {
        this._controls = controls;
        this._level = controls._level;
        this._target = controls._target; // the player
        this._input = input; // input keys 
        this._raycaster = new THREE.Raycaster();
        this._distance_threshold = 2.5;


        this.can_interact = false;

        // E interact message popup making
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
        // this.interactMessage.style.display = 'none'; //Want it hidden first only want to show when on platofrm
        this.interactMessage.innerHTML = 'Press E to interact';



        // initialize a "start interaction" function to not do anything
        this._start_interaction = () => {};

        this._object_being_interacted_with = null;
    }

    _show_interact_message(message) {

        this.interactMessage.innerHTML = `${message}`;
        document.body.appendChild(this.interactMessage);  
    }

    _hide_interact_message() {

        this._start_interaction = () => {};
        const el = document.getElementById('interact_message');
        if (el) {
            document.body.removeChild(el);
        }
        // document.body.removeChild(document.getElementById('interact_display'));
    }

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

    get_can_interact() {
        return this.can_interact;
    }

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
                const view_range = Math.PI/6;
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

    update(interactable_objects) {

        // If user is able to interact with some object, handle inputs based on the trigger of the interaction available
        if (this.can_interact) {
            if (!this._controls.busy_loading_disk) {    
                if (this._input) {
                    const interaction_trigger = this._object_to_interact_with.interactable_object.interaction_trigger;
                    
                    if (this._input._keys) {
                        if (interaction_trigger === 'press_e') {
                            // press_e objects will start an interaction only when E is pressed on keyboard
                            if (this._input._keys.interact) {
                                this._object_being_interacted_with = this._object_to_interact_with;
                                this._end_interaction = this._object_to_interact_with.interactable_object.end_interaction;
                                this._use_object = this._object_to_interact_with.interactable_object.use_object;
                                
                                this._start_interaction(this._controls, this._object_being_interacted_with, this._level);
                                // this._object_to_interact_with = null;
                                this.can_interact = false;
                                this._hide_interact_message();
                            }
                        } else if (interaction_trigger === 'push') {
                            if (this._controls.power_controller.power === "strength") {
                            
                                // Ensure that y values are good enough to work with
                                const object_y = this._object_to_interact_with.object.position.y;
                                const player_y = this._target.position.y;
                                const vertical_distance = Math.abs(player_y - object_y);
                                const vertical_distance_threshold = 0.35;

                                if (vertical_distance < vertical_distance_threshold) {
                                    const desired_angle = this._desired_angle_to_object(this._object_to_interact_with.object);
                                    const current_angle = this._find_2d_angle();
                                    const view_range = Math.PI/8;

                                    const correct_direction = this._check_angle_range(desired_angle, current_angle, view_range);
                                    if (!this._controls._input._keys.shift && (this._controls._input._keys.forward || this._controls._input._keys.backward || this._controls._input._keys.left || this._controls._input._keys.right)) {
                                        if (correct_direction) {
                                            this._start_interaction(this._controls, this._object_to_interact_with, this._level);
                                        } else {
                                            this._end_interaction(this._controls, this._object_to_interact_with, this._level);
                                        }
                                    } else {
                                        this._end_interaction(this._controls, this._object_to_interact_with, this._level);
                                    }
                                } else {
                                    this._end_interaction(this._controls, this._object_to_interact_with, this._level);
                                }
                            }
                        }
                    }
                }
            }
        }

        if (this._controls.power_controller.loaded_disk) {
            if (this._input._keys.unload_disk) {
                const loaded_disk = this._controls.power_controller.loaded_disk;
                
                loaded_disk.interactable_object.end_interaction(this._controls, loaded_disk, this._level);

                this._controls.power_controller.loaded_disk = null;
                this._controls.power_controller.clear_loaded_disk();
            }
        }

        if (this._controls._holding_disk) {

            if (!this._controls.busy_loading_disk) {    
                // If character is holding a disk, handle the dropping and using of the disk
                // -- cannot interact with other objects if holding an objects already
                // this._object_being_interacted_with = this._controls._holding_disk;
                if (this._input._keys.drop) {
                    // if (this._object_being_interacted_with) {
                        this._end_interaction = this._controls._holding_disk.interactable_object.end_interaction;
                        this._end_interaction(this._controls, this._controls._holding_disk, this._level);
                        this._controls._holding_disk = null;

                    // }
                    this._object_being_interacted_with = null;
                    this.can_interact = false;
                } else if (this._input._keys.use) {
                    // if (this._object_being_interacted_with) {
                        this._use_object = this._controls._holding_disk.interactable_object.use_object;
                        this._use_object(this._controls, this._controls._holding_disk, this._level);
                    // }
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

                        // We test the type of interaction to occur:
                        // - touch
                        // - pickup
                        const trigger = interactable_objects[key].interactable_object.interaction_trigger;

                        if (trigger === "press_e") {
                            const interaction_started = this.handle_press_e_interaction(interactable_objects[key]);
                            if (interaction_started) {
                                return;
                            };
                        } else if (trigger === "push") {
                            const interaction_started = this.handle_touch_interaction(interactable_objects[key]);
                            if (interaction_started) {
                                return;
                            };
                            
                        }
                        
                    }

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