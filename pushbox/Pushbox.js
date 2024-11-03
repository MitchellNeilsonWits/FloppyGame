/**
 * File: Pushbox.js
 * 
 * Description:
 *  Pushbox object
 */

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
    this.rotation.copy(rotation);
  }

  // Function to set the object using async
  async set_pushbox() {
    // Setup the model
    const gltf = await (new GLTFLoader()).loadAsync("../models/pushbox.glb")
    .then((gltf) => {
        this._pushbox_mesh = gltf.scene.children[0];
        this._pushbox_mesh.position.x = this.position.x;
        this._pushbox_mesh.position.y = this.position.y;
        this._pushbox_mesh.position.z = this.position.z;

        this.initPhysic();
        this.initVisual();
    }) 
  }

  // Function to initialize the physic
  initPhysic() {
    const { rigidBody, collider } = createRigidBodyDynamicPushbox(this._pushbox_mesh.position, this._pushbox_mesh.rotation, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }
  // Function to initialize the visual
  initVisual() {
    this._pushbox_mesh.position.set(0, 0, 0);
    this._pushbox_mesh.castShadow = true;
    this.position.copy(this.rigidBody.translation());
    this.add(this._pushbox_mesh);
  }

  // Function to move the pushbox (external use)
  move_pushbox(x_vel, y_vel, z_vel) {
    this.updatePhysic(x_vel, y_vel, z_vel);
  }

  // Function to update the pushbox
  update(x_vel, y_vel, z_vel) {
    this.updateVisual();
  }

  // Function to update the pushbox physic
  updatePhysic(x_vel, y_vel, z_vel) {
    const x = x_vel;
    const y = this.rigidBody.linvel().y;
    const z = z_vel;
    this.rigidBody.setLinvel({ x, y, z }, true);
    this.rigidBody.setAngvel({x: 0, y: 0, z: 0}, true);
  }

  // Function to update the pushbox visual
  updateVisual() {
    this.position.copy(this.rigidBody.translation());
  }
}

export default Pushbox;