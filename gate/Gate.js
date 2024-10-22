import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Object3D } from 'three';
import { createRigidBodyDynamic, createRigidBodyDynamicDisk, createRigidBodyEntity, createRigidBodyFixed } from '../engine/function';
import physic from '../engine/physic';
// import physic from '../engine/physic';

class Gate extends Object3D {
    collider = null;
    rigidBody = null;  

    constructor(position, rotation, scale) {
        super();
        this.position.copy(position);
        this.rotation.copy(rotation);
        this.gate_open = false;
        // this.scale.copy(scale);
    } 

    async set_gate(physic) {
        const gltf = await (new GLTFLoader()).loadAsync("../models/force_field.glb")
        .then((gltf) => {

            this._gate_mesh = gltf.scene.children[0];
            

            // console.log(this._disk_mesh);
            // this._gate_mesh.scale.set(this.scale);
            // this._gate_mesh.scale.x = this.scale.x;
            // this._gate_mesh.scale.y = this.scale.y;
            // this._gate_mesh.scale.z = this.scale.z;
            this._gate_mesh.rotation.x = this.rotation.x;
            this._gate_mesh.rotation.y = this.rotation.y;
            this._gate_mesh.rotation.z = this.rotation.z;
            this._gate_mesh.position.x = this.position.x;
            this._gate_mesh.position.y = this.position.y;
            this._gate_mesh.position.z = this.position.z;
            this._mixer = new THREE.AnimationMixer(this);
            
            this._manager = new THREE.LoadingManager();
            this._manager.onLoad = () => {
                // console.log(this._animation.action)
                this._animation.action.time = 0.0;
                this._animation.action.enabled = true;
                this._animation.action.setEffectiveTimeScale(1);
                this._animation.action.setEffectiveWeight(1.0);
                this._animation.action.setLoop(THREE.LoopRepeat)
                this._animation.action.play();
                
            }

            const _on_load_main = (animation_name, animation) => {
                const clip = animation.animations[0];
                const action = this._mixer.clipAction(clip);

                this._animation = {
                    clip: clip,
                    action: action
                }
            }
            
            const loader = new GLTFLoader(this._manager);
            loader.setPath('models/');
            loader.load('force_field_fadeout.glb', (a) => {_on_load_main('wave', a);}); // idle animation
            
            // this._light = new THREE.PointLight(this._color, 5, 0);
            // this._light.translateY(-0.1);
            // this.add(this._light);

            this.position.copy(this._gate_mesh.position);
            this.initPhysic();
            this.initVisual();
        })    //.then(gltf => gltf.scene.children[0])
        
    }

    initPhysic() {
        const { rigidBody, collider } = createRigidBodyFixed(this._gate_mesh, physic);
        this.rigidBody = rigidBody;
        this.collider = collider;
    }

    initVisual() {
        this._gate_mesh.position.set(0, 0, 0);
        this._gate_mesh.castShadow = true;
        this.add(this._gate_mesh);
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

export default Gate