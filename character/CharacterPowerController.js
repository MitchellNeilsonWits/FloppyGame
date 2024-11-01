/**
 * File: CharacterPowerController.js
 * 
 * Description:
 *  Controller to handle power changes for character
 */

import * as THREE from 'three';
import colors from "../disks/disk_colors";

class CharacterPowerController {

    // Initialize important variables
    constructor(controls) {
        this.controls = controls;
        this.loaded_disk = null;
        this.power = "none";
        this.target = controls._target;
        this.change_scale_to = null;
        this.change_scale_increments = null;
    }

    // Change the currently loaded disk
    set_loaded_disk(disk) {
        this.loaded_disk = disk;
        this.power = disk.power;

        const disk_color = colors[this.power];

        // Change colour and emission of the disk object
        this.target.children[0].children[0].children[3].material.emissive = new THREE.Color(disk_color.r,disk_color.g,disk_color.b);
        this.target.children[0].children[0].children[3].material.emissiveIntensity = 0.15;
        
        // Updates for flight
        if (this.power === "flight") {
            this.target.rigidBody.setGravityScale(0);
        } else {
            this.target.rigidBody.setGravityScale(1);
        }

        // Updates for shrink
        if (this.power === "shrink") {
            this.change_scale_increments = -0.1;
            this.change_scale_to = 0.4;
            this.target.collider.setRadius(0.4*0.18);
        } else {
            this.change_scale_increments = 0.1;
            this.change_scale_to = 1;
            this.target.collider.setRadius(1*0.18);
        }
    }

    // Function to get the currently loaded disk
    get_loaded_disk() {
        return this.loaded_disk;
    }

    // Function to clear the loaded disk
    clear_loaded_disk() {
        // Reset variables and player colliders and gravity
        this.loaded_disk = null;
        this.power = "none";
        this.target.collider.setRadius(1*0.18);
        this.controls.skin_controller.change_skin("default");
        this.change_scale_increments = 0.1;
        this.change_scale_to = 1;
        this.target.rigidBody.setGravityScale(1);
    }

    // Function update power controller
    // - mainly used to gradually change player scale so it looks animated
    update() {
        // Update the scale of the player as needed
        if (this.change_scale_to) {
            const curr_scale = this.target.scale.x;
            if (Math.round(curr_scale*10)/10 != this.change_scale_to) {
                const update_val = curr_scale + this.change_scale_increments;
                this.target.scale.setScalar(update_val);
            } else {
                this.change_scale_to = null;
            }
        }
    }
}

export default CharacterPowerController;