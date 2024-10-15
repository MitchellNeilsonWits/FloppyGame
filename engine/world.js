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
    // this.initPhysicDynamic(colliders_dynamic, physic);
    // this.initVisualDynamic(visuals_dynamic);
    
  }

  get_ground_colliders() {
    return this.ground_colliders;
  }

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

  initVisual(meshes) {
    for (const mesh of meshes) {
      mesh.receiveShadow = true
      mesh.castShadow = true
      this.add(mesh)
    }
  }

  // initPhysicDynamic(meshes, physic) {
  //   for (const mesh of meshes) {
  //     // createRigidBodyDynamic(mesh, physic)
  //     // createRigidBodyFixed(mesh, physic)  
  //   }
  // }

  // initVisualDynamic(meshes) {
  //   for (const mesh of meshes) {
  //     mesh.receiveShadow = true
  //     mesh.castShadow = true
  //     this.add(mesh)
  //   }
  // }
}