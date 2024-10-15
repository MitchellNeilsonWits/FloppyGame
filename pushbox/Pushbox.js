import * as THREE from 'three';
import { Object3D } from "three";
import physic from "../engine/physic";
import { createRigidBodyDynamicPushbox, createRigidBodyEntity } from "../engine/function";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

class Pushbox extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(position, rotation) {
    super();
    this.position.copy(position);
    // this.rotation.copy(rotation);
    // this.setRotationFromQuaternion(rotation);
    // this.initPhysic(physic);
    // this.initVisual(mesh);
  }

  async set_pushbox() {
    const gltf = await (new GLTFLoader()).loadAsync("../models/pushbox.glb")
    .then((gltf) => {
        console.log(gltf.scene.children);
        this._pushbox_mesh = gltf.scene.children[0];
        // this._pushbox_mesh.position.y = 8;
        // this._pushbox_mesh.position.z = 22;
        this._pushbox_mesh.position.x = this.position.x;
        this._pushbox_mesh.position.y = this.position.y;
        this._pushbox_mesh.position.z = this.position.z;

        // this._mixer = new THREE.AnimationMixer(this);
        
        // this._manager = new THREE.LoadingManager();
        // this._manager.onLoad = () => {
        //     console.log(this._animation.action)
        //     this._animation.action.time = 0.0;
        //     this._animation.action.enabled = true;
        //     this._animation.action.setEffectiveTimeScale(0.5);
        //     this._animation.action.setEffectiveWeight(1.0);
        //     this._animation.action.setLoop(THREE.LoopRepeat)
        //     this._animation.action.play();
            
        // }


        // const _on_load = (animation_name, animation) => {
        //     const clip = animation.animations[0];
        //     const action = this._mixer.clipAction(clip);

        //     this._animation = {
        //         clip: clip,
        //         action: action
        //     }
        // }
        
        // const loader = new GLTFLoader(this._manager);
        // loader.setPath('../models/');
        // loader.load('disk_org_anim.glb', (a) => {_on_load('floating', a);}); // idle animation

        // this._light = new THREE.PointLight(0x0000ff, 5, 0);
        // this._light.translateY(-0.1);
        // this.add(this._light);

        // this.position.copy(this._pushbox_mesh.position);
        this.initPhysic();
        this.initVisual();
    }) 
  }

  initPhysic() {
    const { rigidBody, collider } = createRigidBodyDynamicPushbox(this._pushbox_mesh.position, this._pushbox_mesh.rotation, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  initVisual() {
    this._pushbox_mesh.position.set(0, 0, 0);
    this._pushbox_mesh.castShadow = true;
    this.position.copy(this.rigidBody.translation());
    this.add(this._pushbox_mesh);
  }

  move_pushbox(x_vel, y_vel, z_vel) {
    this.updatePhysic(x_vel, y_vel, z_vel);
  }

  update(x_vel, y_vel, z_vel) {
    this.updateVisual();
  }

  updatePhysic(x_vel, y_vel, z_vel) {
    const x = x_vel;
    const y = this.rigidBody.linvel().y;
    const z = z_vel;
    this.rigidBody.setLinvel({ x, y, z }, true);
  }

  updateVisual() {
    this.position.copy(this.rigidBody.translation());
  }
}

export default Pushbox;