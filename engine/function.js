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
  const collider = createColliderGeo(rigidBody, physic, mesh)
  return { rigidBody, collider }
}

export function createRigidBodyLeverBase(mesh, position, physic) {
  const rigidBodyDesc = RigidBodyDesc.fixed();
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  const collider = createColliderGeo(rigidBody, physic, mesh);
  return { rigidBody, collider }
}

export function createColliderLeverHandle(rigidBody, physic, mesh) {
  const collider = createColliderGeo(rigidBody, physic, mesh);
  return collider;
}

export function createRigidBodyLeverHandle(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.kinematicPositionBased();
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  return rigidBody
}

export function createLeverHandle(mesh, position, physic) {
  const rigidBody = createRigidBodyLeverHandle(position, physic);
  const collider = createColliderLeverHandle(rigidBody, physic, mesh);
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
  console.log("CREATING ENTITY!!!!");
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(1)
  console.log("Position:",position)
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderBall(0.18, rigidBody, physic)
  // const colliderDesc = ColliderDesc.capsule(0.18, 0.5);
  // const collider = physic.createCollider(colliderDesc, rigidBody);
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
  const colliderDesc = ColliderDesc.cuboid(0.48,0.48,0.48).setMass(10000);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}


// export function createGlass(mesh, physic) { 
//   const rigidBodyDesc = RigidBodyDesc.dynamic();
//   rigidBodyDesc.setTranslation(...mesh.position);
//   const rigidBody = physic.createRigidBody(rigidBodyDesc)
//   const collider = createColliderGeo(rigidBody, physic, mesh)
//   return { rigidBody, collider }
// }

function createShardCollider(rigidBody, physic, mesh) {
  const geo = mesh.geometry;
  // console.log(position);
  const vertices = new Float32Array(geo.attributes.position.array)

  // SET SCALE
  for (let i = 0; i < vertices.length; i += 3) {
    vertices[i] *= mesh.scale.x;     // Scale X
    vertices[i + 1] *= mesh.scale.y; // Scale Y
    vertices[i + 2] *= mesh.scale.z; // Scale Z
  }
  
  // CREATE COLLIDER
  const colliderDesc = ColliderDesc.convexMesh(geo.attributes.position.array)

  // SET ROTATATION
  const quaternion = new THREE.Quaternion();
  quaternion.setFromEuler(mesh.rotation);
  colliderDesc.rotation = quaternion;

  return physic.createCollider(colliderDesc, rigidBody)
}

export function createGlass(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.fixed();
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const colliderDesc = ColliderDesc.cuboid(1,1,1);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}

export function createShard(position, mesh, physic) {
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(10000);// set mass to be very heavy so we cannot just move the shards
  rigidBodyDesc.setTranslation(...position)
  rigidBodyDesc.setGravityScale(0) // don't just move the objects
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const colliderDesc = ColliderDesc.cuboid(0.105,0.105,0.105).setMass(1);
  // const colliderDesc = ColliderDesc.ball(mesh.scale/2).setMass(1000);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  // const collider = createColliderGeoNoIndices(rigidBody, physic, mesh)
  // const collider = physic.createCollider(colliderDesc, rigidBody);
  // const collider = createShardCollider(rigidBody, physic, mesh);
  return { rigidBody, collider }
}