/**
 * File: Button.js
 * 
 * Description:
 *  A button used in the Placement Matters level
 */

import { Object3D } from 'three';
import physic from '../engine/physic';
import { createRigidBodyFixed } from '../engine/function';

class Button extends Object3D {

  constructor(mesh) {
    super();
    this.mesh = mesh;
    this.position.copy(mesh.position);
    this.pressed = false;
  }

  // Function to set the button using async
  async set_button() {
    this.initPhysic(physic);
    this.initVisual();
  }

  // Create the physics
  initPhysic(physic) {
    const { rigidBody, collider } = createRigidBodyFixed(this.mesh, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  // Create the visuals
  initVisual() {
    this.mesh.position.set(0, 0, 0);
    this.mesh.castShadow = true;
    this.add(this.mesh);
  }

  // Update function (not used but is implemented)
  update(x_vel, y_vel, z_vel) {
    
  }
}


export default Button;