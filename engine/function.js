import { ActiveCollisionTypes, ActiveEvents, ColliderDesc, RigidBodyDesc } from '@dimforge/rapier3d-compat'
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
  return createColliderGeo(rigidBody, physic, mesh)
}

export function createRigidBodyLeverBase(mesh, position, physic) {
  const rigidBodyDesc = RigidBodyDesc.fixed();
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  const collider = createColliderGeo(rigidBody, physic, mesh);
  return { rigidBody, collider }
}

export function createRigidBodyLeverHandle(mesh, position, physic) {
  const rigidBodyDesc = RigidBodyDesc.kinematicPositionBased();
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  const collider = createColliderGeo(rigidBody, physic, mesh);
  return { rigidBody, collider }
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
  const collider = createColliderBall(0.20, rigidBody, physic)
  return { rigidBody, collider }
}

export function createFoot(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.kinematicVelocityBased().setAdditionalMass(0);
  rigidBodyDesc.setTranslation(position.x,position.y,position.z);
  const rigidBody = physic.createRigidBody(rigidBodyDesc)

  const colliderDesc = ColliderDesc.cuboid(0.001,0.25,0.001).setMass(0);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}

function createColliderDisk(physic, rigidBody) {
  const colliderDesc = ColliderDesc.cuboid(0.4,0.3,0.4).setMass(1).setActiveEvents(ActiveEvents.CONTACT_FORCE_EVENTS).setActiveCollisionTypes(ActiveCollisionTypes.DYNAMIC_DYNAMIC);
  return physic.createCollider(colliderDesc, rigidBody)
}

export function create_rigid_body_for_disk(mesh, physic) {
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.dynamic();
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  rigidBody.setAdditionalMass(0);
  return rigidBody;
}

export function create_collider_for_disk(physic, rigidBody) {
  return createColliderDisk(physic, rigidBody);
}

export function createRigidBodyDynamicDisk(mesh, physic) {
  
  const rigidBody = create_rigid_body_for_disk(mesh, physic);

  const collider = create_collider_for_disk(physic, rigidBody);

  return { rigidBody, collider }
}



export function createRigidBodyDynamicPushbox(position, rotation, physic) {
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(0);
  rigidBodyDesc.setTranslation(...position);
  // rigidBodyDesc.setRotation(rotation);
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const colliderDesc = ColliderDesc.cuboid(0.48,0.48,0.48).setMass(100);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}