import * as THREE from 'three';
import { Object3D } from "three";
import physic from "../engine/physic";
import { createRigidBodyDynamicPushbox, createRigidBodyEntity, createRigidBodyFixed, createRigidBodyLeverBase, createRigidBodyLeverHandle } from "../engine/function";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

class Lever extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(position, rotation) {
    super();
    console.log(position);
    this.position.copy(position);
    this.lever_on = false;
    this.lever_busy_changing = false;
    this.current_lever_rotation = 30;
  }

  toggle_lever_on() {
    if (!this.lever_busy_changing) {
      console.log("toggled lever")
      this.lever_on = !this.lever_on;
    } else {
      console.log("BUSY!")
    }
  }

  async set_lever() {
    const gltf = await (new GLTFLoader()).loadAsync("../models/lever2.glb")
    .then((gltf) => {
        console.log(gltf.scene.children);
        
        this._lever_handle = gltf.scene.children[0];
        this._lever_base = gltf.scene.children[1];
        console.log(this._lever_base, this._lever_handle);
        // this._pushbox_mesh = gltf.scene.children[0];
        
        this.initPhysic();
        this.initVisual();
    }) 
  }

  initPhysic() {
    createRigidBodyLeverBase(this._lever_base, this.position, physic);
    const { rigidBody, collider } = createRigidBodyLeverHandle(this._lever_handle, this.position, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  initVisual() {
    this._lever_base.position.set(0, 0, 0);
    // this._lever_handle.position.set(0, 0, 0);
    
    // this.position.copy(this.rigidBody.translation());
    this.add(this._lever_base);
    this.add(this._lever_handle);
  }


  update() {
    this.updateVisual();
  }

  updatePhysic(x_vel, y_vel, z_vel) {
    const x = x_vel;
    const y = this.rigidBody.linvel().y;
    const z = z_vel;
    this.rigidBody.setLinvel({ x, y, z }, true);
  }

  updateVisual() {
    console.log(this._lever_handle.rotation);
    if (this.lever_on && this._lever_handle.rotation.y < 0.37960913505345634) {
        // this.current_lever_rotation -= Math.PI/12; 
        this._lever_handle.rotateY(Math.PI/150);
        this.lever_busy_changing = true;
    } else if (!this.lever_on && this._lever_handle.rotation.y > -0.5235988167115926) {
        // this.current_lever_rotation += Math.PI/12; 
        this._lever_handle.rotateY(-Math.PI/150);
        this.lever_busy_changing = true;
    } else {
      this.lever_busy_changing = false;
    }
    
    this.position.copy(this.rigidBody.translation());
  }
}

export default Lever;