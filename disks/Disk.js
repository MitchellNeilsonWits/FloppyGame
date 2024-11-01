/**
 * File: Disk.js
 * 
 * Description:
 *  Disk object for physics, animation and visuals
 */

import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Object3D } from 'three';
import { createRigidBodyDynamic, createRigidBodyDynamicDisk, createRigidBodyEntity } from '../engine/function';
import physic from '../engine/physic';
import colors from './disk_colors';

class Disk extends Object3D {
    collider = null;
    rigidBody = null;  

    constructor() {
        super();
    }

    // Function to set the object with async
    async set_disk(disk_type, physic, position) {
        const gltf = await (new GLTFLoader()).loadAsync("../models/disk_org_anim_remastered.glb")
        .then((gltf) => {
            // Get the colour of the disk ring
            const disk_color = colors[disk_type];
            this._color = new THREE.Color(disk_color.r, disk_color.g, disk_color.b);


            // console.log(gltf.scene.children);
            this._disk_mesh = gltf.scene.children[0];

            // Extract the skinned material so we can set the colour directly
            this._colour_ring = this._disk_mesh.children[0].children[1];
            this._colour_ring.material.emissive = this._color;
            

            // console.log(this._disk_mesh);
            this._disk_mesh.scale.setScalar(0.2);
            this._disk_mesh.position.x = position.x;
            this._disk_mesh.position.y = position.y;
            this._disk_mesh.position.z = position.z;
            this._mixer = new THREE.AnimationMixer(this);
            
            this._manager = new THREE.LoadingManager();
            this._manager.onLoad = () => {
                // console.log(this._animation.action)
                this._animation.action.time = 0.0;
                this._animation.action.enabled = true;
                this._animation.action.setEffectiveTimeScale(0.5);
                this._animation.action.setEffectiveWeight(1.0);
                this._animation.action.setLoop(THREE.LoopRepeat)
                this._animation.action.play();
                
            }


            // Animation handler function
            const _on_load = (animation_name, animation) => {
                const clip = animation.animations[0];
                const action = this._mixer.clipAction(clip);

                this._animation = {
                    clip: clip,
                    action: action
                }
            }
            
            // Load the disk model
            const loader = new GLTFLoader(this._manager);
            loader.setPath('models/');
            loader.load('disk_org_anim.glb', (a) => {_on_load('floating', a);}); // idle animation

            // Create a light for the disk
            this._light = new THREE.PointLight(this._color, 5, 0);
            this._light.translateY(-0.1);
            this.add(this._light);

            this.position.copy(this._disk_mesh.position);
            this.initPhysic();
            this.initVisual();
        })
        
    }

    // Function to create the physic
    initPhysic() {
        const { rigidBody, collider } = createRigidBodyDynamicDisk(this._disk_mesh, physic);
        this.rigidBody = rigidBody;
        this.collider = collider;
    }

    // Function to create the visual
    initVisual() {
        this._disk_mesh.position.set(0, 0, 0);
        this._disk_mesh.castShadow = true;
        this.add(this._disk_mesh);
    }

    // Function to handle animation updates
    update(time_in_seconds) {
        if (this._mixer) {
            this._mixer.update(time_in_seconds);
        }

        this.updateVisual();
        this.updatePhysic();
    }

    // Function to handle velocity reset (for level reset)
    reset_velocity() {
        this.rigidBody.setLinvel({x: 0, y: 0, z: 0}, true);
    }

    // Function to update the physic
    updatePhysic() {
        this.rigidBody.setLinvel({ x: 0, y: -1, z: 0 }, true);

    }

    // Function to update the visual
    updateVisual() {
        this.position.copy(this.rigidBody.translation());
    }
}

export default Disk