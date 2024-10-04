import * as THREE from 'three';

class CharacterInteractionController {
    constructor(target) {
        this._target = target; // the player 
        this._raycaster = new THREE.Raycaster();
        this._distance_threshold = 2.5;


        this._showing_message = false;



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
    }

    _show_interact_message() {
        document.body.appendChild(this.interactMessage);        
    }

    _hide_interact_message() {
        document.body.removeChild(document.getElementById('interact_display'));
    }

    _distance_to_object(object) {
        const pos_o = object.position;
        const pos_p = this._target.position;

        const dist = Math.sqrt( Math.pow(pos_o.x - pos_p.x, 2) + Math.pow(pos_o.y - pos_p.y, 2) + Math.pow(pos_o.z - pos_p.z, 2) );
        return dist;
    }

    // Finds the cartesian angle along the x-z plane (easy to work with)
    _find_2d_angle() {
        // need to handle different cases of the euler rotational values
        if (this._target.rotation.x === 0) {
            if (this._target.rotation.y >= 0) {
                return this._target.rotation.y;
            } else {
                return this._target.rotation.y + 2*Math.PI;
            }
        } else {
            if (this._target.rotation.y >= 0) {
                return Math.PI - this._target.rotation.y;
            } else {
                return -1*this._target.rotation.y + Math.PI;
            }
        }
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

    _check_angle_range(desired_angle, current_angle) {
        // if (((desired_angle - Math.PI/100) % 2*Math.PI) <= current_angle <= ((desired_angle + Math.PI/100) % 2*Math.PI)) {
            // return true;
        // }

        const view_range = Math.PI/6;

        const upper_view_range = desired_angle + view_range;
        const lower_view_range = desired_angle - view_range;

        // Handle special case where UPPER > 2PI and LOWER < 2PI
        if (upper_view_range > 2*Math.PI) {
            if (lower_view_range <= 2*Math.PI) {

                // Look from [lower_view_range, 2*PI] and [0, upper_view_range]
                if (lower_view_range <= current_angle ) {
                    if (current_angle <= upper_view_range) {
                        console.log("case 1");
                        return true;
                    }
                }

            }
        } else {
            if (lower_view_range <= current_angle && current_angle <= upper_view_range) {
                console.log("case 2");
                return true;
            }
        }

        return false;

        if (current_angle >= (desired_angle -  view_range)) {
            if (current_angle <= (desired_angle + view_range)) {
                return true;
            }
        }

        return false;
    }

    update(dynamic_objects) {
        if (dynamic_objects) {
            if (this._target) {
                
                // Go through each dynamic object to find if we are close enough and looking at it
                for (const object of dynamic_objects) {
                    
                    // Calculate the euclidean distance from the object
                    const distance = this._distance_to_object(object);

                    // If the distance is within the threshold, we see if the character is facing the object
                    if (distance <= this._distance_threshold) {

                        // Find the desired angle
                        const desired_angle = this._desired_angle_to_object(object);
                        const current_angle = this._find_2d_angle();

                        // Check if the current angle is within range of the desired angle
                        const in_range = this._check_angle_range(desired_angle, current_angle);
                        console.log(`Distance to ${object.children[0].name} is ${distance} with angle ${desired_angle}, so ${in_range}`)

                        if (!this._showing_message) {
                            this._showing_message = true;
                            this._show_interact_message();
                        }
                        return;
                    }
                    // this._raycaster.set(this._target.position, this._target.rotation);
                    // const intersects = this._raycaster.intersectObjects( dynamic_objects, true );
                    // console.log(intersects);
                }

                if (this._showing_message) {
                    const el = document.getElementById('interact_message');
                    if (el) {
                        document.body.removeChild(el);
                    }
                    this._showing_message = false;
                }
            }
        }
    }
}

export default CharacterInteractionController