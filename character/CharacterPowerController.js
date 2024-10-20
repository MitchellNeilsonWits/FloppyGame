import * as THREE from 'three';
import colors from "../disks/disk_colors";
import physic from '../engine/physic';
import { createColliderBall } from '../engine/function';
import physic from '../engine/physic';
import { createColliderBall } from '../engine/function';

class CharacterPowerController {
    constructor(controls) {
        this.controls = controls;
        this.loaded_disk = null;
        this.power = "none";
        this.target = controls._target;
        this.change_scale_to = null;
        this.change_scale_increments = null;
    }

    set_loaded_disk(disk) {
        this.loaded_disk = disk;
        this.power = disk.power;

        const disk_color = colors[this.power];
        // this.target.children[0].children[0].children[2].material.emissive.blendColor = new THREE.Color(1,0,0);
        // this.target.children[0].children[0].children[2].material.emissive.blendAlpha = 0;

        // Change colour and emission of the disk object
        this.target.children[0].children[0].children[3].material.emissive = new THREE.Color(disk_color.r,disk_color.g,disk_color.b);
        this.target.children[0].children[0].children[3].material.emissiveIntensity = 0.15;
        console.log(this.target.children[0].children[0].children[2]);
        
        // this.disk_meshes.disk_1.material.emissive = new THREE.Color(disk_color.r,disk_color.g,disk_color.b);
        // this.disk_meshes.disk_1.material.emissiveIntensity = 20;

        console.log(this.target.rigidBody);
        console.log(this.target.rigidBody);
        if (this.power === "flight") {
            this.target.rigidBody.setGravityScale(0);
        } else {
            this.target.rigidBody.setGravityScale(1);
        }

        if (this.power === "shrink") {
            // this.target.scale.setScalar(0.4);
            this.change_scale_increments = -0.1;
            this.change_scale_to = 0.4;
            // physic.removeCollider(this.target.collider);
            // this.target.collider = createColliderBall(0.4*0.18, this.target.rigidBody, physic);
            // console.log(this.target.collider);
            // this.target.collider.setRadius(0.4*0.18);
        } else {
            // this.target.scale.setScalar(1);
            this.change_scale_increments = 0.1;
            this.change_scale_to = 1;
            // this.target.rigidBody.setTranslation(this.target.rigidBody.translation().x, this.target.rigidBody.translation().y + 0.4, this.target.rigidBody.translation().z);
            // physic.removeCollider(this.target.collider);
            // this.target.collider = createColliderBall(0.18, this.target.rigidBody, physic);
            // console.log(this.target.collider);
            // this.target.collider.setTranslation(0,0.18,0);
            this.target.collider.setRadius(1*0.18);
        }
    }

    get_loaded_disk() {
        return this.loaded_disk;
    }

    clear_loaded_disk() {
        this.loaded_disk = null;
        this.power = "none";
        // physic.removeCollider(this.target.collider);
        this.target.collider.setRadius(1*0.18);

        // this.target.collider = createColliderBall(0.18, this.target.rigidBody, physic);
        this.controls.skin_controller.change_skin("default");
        this.change_scale_increments = 0.1;
        this.change_scale_to = 1;
        this.target.rigidBody.setGravityScale(1);
        
        
    }

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