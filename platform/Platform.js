/**
 * File: Platform.js
 * 
 * Description:
 *  Object for the end-of-level platform to go to next level
 */

import { Object3D } from 'three';
import physic from '../engine/physic';
import { createRigidBodyFixed } from '../engine/function';

class Platform extends Object3D {

  constructor(mesh) {
    super();
    this.mesh = mesh;
    this.position.copy(mesh.position);
    this.pressed = false;
  }

  // Function to set object using async
  async set_platform() {
    this.initPhysic(physic);
    this.initVisual();
  }

  // Function to initialize the physic for the platform
  initPhysic(physic) {
    const { rigidBody, collider } = createRigidBodyFixed(this.mesh, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  // Function to initialize the visual for the platform
  initVisual() {
    this.mesh.position.set(0, 0, 0);
    this.mesh.castShadow = true;
    this.add(this.mesh);
  }

  // Function to update the object
  update(x_vel, y_vel, z_vel) {
  }

  // Function to update the physic for the platform
  updatePhysic(x_vel, y_vel, z_vel) {
  }

  // Function to update the visual for the platform
  updateVisual() {
  }
}


export default Platform;