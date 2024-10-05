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

function createColliderGeo(rigidBody, physic, mesh) {
  const geo = mesh.geometry;
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
  const colliderDesc = ColliderDesc.trimesh(vertices, indices).setMass(0.5)
  
  // SET POSITION
  // colliderDesc.translation = mesh.position;

  // SET ROTATATION
  const quaternion = new THREE.Quaternion();
  quaternion.setFromEuler(mesh.rotation);
  colliderDesc.rotation = quaternion;

  return physic.createCollider(colliderDesc, rigidBody)
}

export function createRigidBodyFixed(mesh, physic) {
  console.log(`Creating fixed rigid body for mesh ${mesh.name}`)
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.fixed()
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  // console.log("rigid_body = ",rigidBody)
  createColliderGeo(rigidBody, physic, mesh)
}

export function createRigidBodyDynamic(mesh, physic) {
  console.log("creating rigid dynamic body")
  console.log(mesh)
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(0);
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderGeo(rigidBody, physic, mesh)
  return { rigidBody, collider }
}

export function createRigidBodyEntity(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(1)
  console.log("Position:",position)
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderBall(0.25, rigidBody, physic)
  return { rigidBody, collider }
}

function createColliderDisk(physic, rigidBody) {
  const colliderDesc = ColliderDesc.cuboid(0.4,0.3,0.4);
  return physic.createCollider(colliderDesc, rigidBody)
}

export function createRigidBodyDynamicDisk(mesh, physic) {
  console.log("creating rigid dynamic body")
  console.log(mesh)
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(0);
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderDisk(physic, rigidBody)
  return { rigidBody, collider }
}