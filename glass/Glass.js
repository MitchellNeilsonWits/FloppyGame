import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Object3D } from 'three';
import { createGlass, createRigidBodyDynamic, createRigidBodyDynamicDisk, createRigidBodyEntity, createRigidBodyFixed } from '../engine/function';
import physic from '../engine/physic';
// import physic from '../engine/physic';

class Glass extends Object3D {
    collider = null;
    rigidBody = null;  

    constructor(position, rotation, scale) {
        super();
        this.position.copy(position);
        this.rotation.copy(rotation);
        this.gate_open = false;
        // this.scale.copy(scale);
    } 

    async set_glass(physic, mesh) {
        this._glass_mesh = mesh;
        console.log(this._glass_mesh);
        this.position.copy(this._glass_mesh.position);
        this.initPhysic();
        this.initVisual();
        
    }

    initPhysic() {
        const { rigidBody, collider } = createGlass(this._glass_mesh, physic);
        this.rigidBody = rigidBody;
        this.collider = collider;
    }

    initVisual() {
        this._glass_mesh.position.set(0, 0, 0);
        this._glass_mesh.castShadow = true;
        this.add(this._glass_mesh);
    }

    update(time_in_seconds) {
        if (this._mixer) {
            this._mixer.update(time_in_seconds);
        }

        this.updateVisual();
        this.updatePhysic();
    }

    updatePhysic() {

        // this.rigidBody.setLinvel({ x: 0, y: -1, z: 0 }, true);

    }

    updateVisual() {
        this.position.copy(this.rigidBody.translation());
    }
}

export default Glass