import * as THREE from 'three';
import colors from "../disks/disk_colors";

class CharacterPowerController {
    constructor(target) {
        this.loaded_disk = null;
        this.power = "none";
        this.target = target;
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
    }

    get_loaded_disk() {
        return this.loaded_disk;
    }

    clear_loaded_disk() {
        this.loaded_disk = null;
        this.power = "none";
    }
}

export default CharacterPowerController;