import { Object3D } from 'three'
import { createRigidBodyDynamic, createRigidBodyFixed } from './function'

export default class World extends Object3D {
  constructor(visuals, colliders, visuals_dynamic, colliders_dynamic, physic) {
    super()
    this.initPhysic(colliders, physic)
    this.initVisual(visuals)
    // this.initPhysicDynamic(colliders_dynamic, physic);
    // this.initVisualDynamic(visuals_dynamic);
  }

  initPhysic(meshes, physic) {
    for (const mesh of meshes) {
      createRigidBodyFixed(mesh, physic)
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