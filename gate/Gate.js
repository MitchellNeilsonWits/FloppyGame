/**
 * File: Gate.js
 * 
 * Description:
 *  Gate object that is controlled by levers
 */

import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Object3D } from 'three';
import { createRigidBodyDynamic, createRigidBodyDynamicDisk, createRigidBodyEntity, createRigidBodyFixed } from '../engine/function';
import physic from '../engine/physic';

class Gate extends Object3D {
    collider = null;
    rigidBody = null;  

    constructor(position, rotation, scale) {
        super();
        this.position.copy(position);
        this.rotation.copy(rotation);
        this.gate_open = false;
    } 

    // Function to set the object using async
    async set_gate(physic) {
        const gltf = await (new GLTFLoader()).loadAsync("../models/force_field.glb")
        .then((gltf) => {

            this._gate_mesh = gltf.scene.children[0];
            
            this._gate_mesh.rotation.x = this.rotation.x;
            this._gate_mesh.rotation.y = this.rotation.y;
            this._gate_mesh.rotation.z = this.rotation.z;
            this._gate_mesh.position.x = this.position.x;
            this._gate_mesh.position.y = this.position.y;
            this._gate_mesh.position.z = this.position.z;
            this._mixer = new THREE.AnimationMixer(this);
            
            // Handle animation setup
            this._manager = new THREE.LoadingManager();
            this._manager.onLoad = () => {
                this._animation.action.time = 0.0;
                this._animation.action.enabled = true;
                this._animation.action.setEffectiveTimeScale(1);
                this._animation.action.setEffectiveWeight(1.0);
                this._animation.action.setLoop(THREE.LoopRepeat)
                this._animation.action.play();                
            }

            // Loading animation
            const _on_load_main = (animation_name, animation) => {
                const clip = animation.animations[0];
                const action = this._mixer.clipAction(clip);

                this._animation = {
                    clip: clip,
                    action: action
                }
            }
            
            // Load the animation file
            const loader = new GLTFLoader(this._manager);
            loader.setPath('models/');
            loader.load('force_field_fadeout.glb', (a) => {_on_load_main('wave', a);}); // idle animation
            
            this.position.copy(this._gate_mesh.position);
            this.initPhysic();
            this.initVisual();
        })
        
    }

    // Function to initialze the physic
    initPhysic() {
        const { rigidBody, collider } = createRigidBodyFixed(this._gate_mesh, physic);
        this.rigidBody = rigidBody;
        this.collider = collider;
    }

    // Function to initialize the visual
    initVisual() {
        this._gate_mesh.position.set(0, 0, 0);
        this._gate_mesh.castShadow = true;
        this.add(this._gate_mesh);
    }

    // Function to update the gate animation
    update(time_in_seconds) {
        if (this._mixer) {
            this._mixer.update(time_in_seconds);
        }

        this.updateVisual();
        this.updatePhysic();
    }

    // Update the physic
    updatePhysic() {

    }

    // Function to update the visual
    updateVisual() {
        this.position.copy(this.rigidBody.translation());
    }
}

export default Gate