/**
 * File: world.js
 * 
 * Description:
 *  Main class to load colliders for the level to the engine
 */

import { Object3D } from 'three'
import { createRigidBodyDynamic, createRigidBodyFixed } from './function'

export default class World extends Object3D {
  constructor(visuals, colliders, visuals_dynamic, colliders_dynamic, physic) {
    super()
    this.all_colliders = [];
    this.all_rigid_bodies = [];
    this.ground_colliders = [];
    this.initPhysic(colliders, physic)
    this.initVisual(visuals)
  }

  // Function to retrieve ground colliders
  get_ground_colliders() {
    return this.ground_colliders;
  }

  // Function to intialize the physic
  initPhysic(meshes, physic) {
    for (const mesh of meshes) {
      const {rigidBody, collider} = createRigidBodyFixed(mesh, physic)
      if (mesh.name.includes("ground")) {
        this.ground_colliders.push(collider);
      }
      this.all_colliders.push(collider);
      this.all_rigid_bodies.push(rigidBody);
    }
  }

  // Function to initialize the visual
  initVisual(meshes) {
    for (const mesh of meshes) {
      mesh.receiveShadow = true
      mesh.castShadow = true
      this.add(mesh)
    }
  }
}