/**
 * File: dynamicObject.js
 * 
 * Description:
 *  Create a simple dynamic object in the level (generic object)
 */

import { Object3D } from 'three';
import { createRigidBodyDynamic, createRigidBodyEntity } from './function';


export default class DynamicObject extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(mesh, physic) {
    super();
    this.position.copy(mesh.position);
    this.initPhysic(mesh, physic);
    this.initVisual(mesh);
  }

  // Initialize the physics
  initPhysic(mesh, physic) {
    const { rigidBody, collider } = createRigidBodyDynamic(mesh, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  // Initialize the visuals
  initVisual(mesh) {
    mesh.position.set(0, 0, 0);
    mesh.castShadow = true;
    this.add(mesh);
  }

  // Update the visuals and physics
  update() {
    this.updateVisual();
    this.updatePhysic();
  }

  // Update the physic
  updatePhysic() {
    // -- 
  }

  // Update the visual
  updateVisual() {
    this.position.copy(this.rigidBody.translation());
  }
}
