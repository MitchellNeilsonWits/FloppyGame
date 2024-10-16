import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Object3D } from 'three';
import { createGlass, createRigidBodyDynamic, createRigidBodyDynamicDisk, createRigidBodyEntity, createRigidBodyFixed } from '../engine/function';
import physic from '../engine/physic';  
import Shard from './Shard';
// import physic from '../engine/physic';

class Glass extends THREE.Group {
    collider = null;
    rigidBody = null;  

    constructor(position, rotation, scale) {
        super();
        this.position.copy(position);
        this.rotation.copy(rotation);
        this.shards = [];
        this.broken = false;
        this.shards_active_time = 0;
        // this.scale.copy(scale);
    } 

    create_glass_collider() {
        const {rigidBody, collider} = createGlass(this.position, physic);
        this.rigidBody = rigidBody;
        this.collider = collider;
        this.add(this._glass_mesh);
    }   

    async set_glass(position) {
        const gltf = await (new GLTFLoader()).loadAsync("../models/glass_unbroken.glb")
        .then(async (gltf) => {
            // Get the colour of the disk ring
            this._glass_mesh = gltf.scene.children[0];
            
            this.create_glass_collider();
        })
        const gltf_2 = await (new GLTFLoader()).loadAsync("../models/glass_v2.glb")
        .then(async (gltf) => {
            // Get the colour of the disk ring
            for (const mesh of gltf.scene.children) {
                this.shards.push(mesh);
            }

            await this.initPhysic().then(() => {
                this.initVisual();
            });
        })
    }

    async initPhysic() {
        let i = 0;
        for (const shard of this.shards) {
            // const pos = new THREE.Vector3(this.position.x + shard.position.x, this.position.y + shard.position.y, this.position.z + shard.position.z)
            const world_offset = new THREE.Vector3(this.position.x, this.position.y, this.position.z);
            const shard_offset = new THREE.Vector3(shard.position.x, shard.position.y, shard.position.z);
            const shard_object = new Shard(world_offset, shard_offset, shard.rotation, shard.scale);
            await shard_object.set_shard(shard).then(() => {
                this.shards[i] = shard_object;
                i+=1;
            });
        }

        // const { rigidBody, collider } = createGlass(this._glass_mesh, physic);
        // this.rigidBody = rigidBody;
        // this.collider = collider;
    }

    break_glass() {
        this.broken = true;
        physic.removeCollider(this.collider);
        this.remove(this._glass_mesh);
        for (const shard of this.shards) {
            this.add(shard);
            shard.activate();
        }
    }

    initVisual() {
        // this._glass_mesh.position.set(0, 0, 0);
        // this._glass_mesh.castShadow = true;
        // this.add(this._glass_mesh);
        // for (const shard of this.shards) {
        //     this.add(shard);
        //     console.log(shard);
        // }

    }

    update(time_in_seconds, callback_delete_glass) {
        if (this.broken) {
            this.shards_active_time = this.shards_active_time + 1;
            if (this.shards_active_time <= 1000) {
                for (const shard of this.shards) {
                
                    shard.update(this.broken);
                }
            } else if (this.shards_active_time === 1001) {
                // Remove shards after some time
                for (const shard of this.shards) {
                    physic.removeCollider(shard.collider);
                    this.remove(shard);
                }
                callback_delete_glass(this);
            }
        }
        

        // this.updateVisual();
        // this.updatePhysic();
    }

    // updatePhysic() {
    //     const x = this.rigidBody.linvel().x;
    //     const y = this.rigidBody.linvel().y;
    //     const z = this.rigidBody.linvel().z;


    //     this.rigidBody.setLinvel({ x: x, y: y, z: z }, true);

    // }

    // updateVisual() {
    //     this.position.copy(this.rigidBody.translation());
    // }
}

export default Glass