import { ColliderDesc, RigidBodyDesc } from '@dimforge/rapier3d-compat'
import * as THREE from 'three';

export function getCanvas() {
  const canvas = document.getElementsByTagName('canvas')[0]
  canvas.width = innerWidth
  canvas.height = innerHeight
  return canvas
}

function createColliderBall(radius, rigidBody, physic) {
  const colliderDesc = ColliderDesc.ball(radius)
  return physic.createCollider(colliderDesc, rigidBody)
}

function createColliderGeo(geo, rigidBody, physic, mesh) {
  // console.log(position);
  const vertices = new Float32Array(geo.attributes.position.array)
  const indices = new Float32Array(geo.index.array)

  // SET SCALE
  for (let i = 0; i < vertices.length; i += 3) {
    vertices[i] *= mesh.scale.x;     // Scale X
    vertices[i + 1] *= mesh.scale.y; // Scale Y
    vertices[i + 2] *= mesh.scale.z; // Scale Z
  }
  
  // CREATE COLLIDER
  const colliderDesc = ColliderDesc.trimesh(vertices, indices)
  
  // SET POSITION
  colliderDesc.translation = mesh.position;

  // SET ROTATATION
  const quaternion = new THREE.Quaternion();
  quaternion.setFromEuler(mesh.rotation);
  colliderDesc.rotation = quaternion;

  return physic.createCollider(colliderDesc, rigidBody)
}

export function createRigidBodyFixed(mesh, physic) {
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.fixed()
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  console.log("rigid_body = ",rigidBody)
  createColliderGeo(mesh.geometry, rigidBody, physic, mesh)
}

export function createRigidBodyEntity(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.dynamic()
  console.log("Position:",position)
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderBall(0.25, rigidBody, physic)
  return { rigidBody, collider }
}