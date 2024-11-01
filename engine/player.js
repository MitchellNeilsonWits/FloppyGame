/**
 * File: player.js
 * 
 * Description:
 *  Class to set up character physics and visuals
 */

import { Object3D } from 'three';
import { createFoot, createRigidBodyEntity } from './function';
import physic from './physic';

const SPEED = 3;

export default class Player extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(mesh) {
    super();
    this.position.copy(mesh.position);
  }

  // Function to set the player using async
  async set_player(mesh) {
    this.initPhysic(physic);
    this.initVisual(mesh);
  }

  // Initialize the physics
  initPhysic(physic) {
    const { rigidBody, collider } = createRigidBodyEntity(this.position, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
    this.charController = physic.createCharacterController(0);
  }

  // Initialize the visuals
  initVisual(mesh) {
    mesh.position.set(0, 0.05, 0);
    mesh.castShadow = true;
    this.add(mesh);
  }

  // Update the characters physic and visuals
  update(x_vel, y_vel, z_vel) {
    
    this.updatePhysic(x_vel, y_vel, z_vel);
    this.updateVisual();
  }

  // Update the physic
  updatePhysic(x_vel, y_vel, z_vel) {

    var x = x_vel;
    var y = y_vel;
    const z = z_vel;

    // Handle terminal velocity
    const terminal_y_velocity = -4;
    if (y < terminal_y_velocity) {
      y = terminal_y_velocity;
    }

    // Update linear and angular velocity
    this.rigidBody.setLinvel({x: x, y: y, z: z}, true);
    this.rigidBody.setAngvel({x:0,y:0,z:0},true);
  }

  // Update the visual
  updateVisual() {
    this.position.copy(this.rigidBody.translation());
  }
}
