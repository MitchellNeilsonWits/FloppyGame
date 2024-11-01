/**
 * File: function.js
 * 
 * Description:
 *  Main file to hold all functions for rigid body and collider creation
 */

import { ActiveCollisionTypes, ActiveEvents, ColliderDesc, RigidBodyDesc } from '@dimforge/rapier3d-compat'
import * as THREE from 'three';

export function getCanvas() {
  const canvas = document.getElementsByTagName('canvas')[0]
  canvas.width = innerWidth
  canvas.height = innerHeight
  return canvas
}

// Create a ball collider
export function createColliderBall(radius, rigidBody, physic) {
  const colliderDesc = ColliderDesc.ball(radius).setTranslation(0,0,0);
  return physic.createCollider(colliderDesc, rigidBody)
}

// Create a complex geo collider based on vertex information
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
  
  // SET ROTATATION
  const quaternion = new THREE.Quaternion();
  quaternion.setFromEuler(mesh.rotation);
  colliderDesc.rotation = quaternion;

  return physic.createCollider(colliderDesc, rigidBody)
}

// Function to create a simple fixed rigid body
export function createRigidBodyFixed(mesh, physic) {
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.fixed()
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderGeo(rigidBody, physic, mesh)
  return { rigidBody, collider }
}

// Function to create lever base rigid body
export function createRigidBodyLeverBase(mesh, position, physic) {
  const rigidBodyDesc = RigidBodyDesc.fixed();
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  const collider = createColliderGeo(rigidBody, physic, mesh);
  return { rigidBody, collider }
}

// Function to create collider for lever handle
export function createColliderLeverHandle(rigidBody, physic, mesh) {
  const collider = createColliderGeo(rigidBody, physic, mesh);
  return collider;
}

// Function to create rigid body for lever handle
export function createRigidBodyLeverHandle(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.kinematicPositionBased();
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc);
  return rigidBody
}

// Function to create the lever handle
export function createLeverHandle(mesh, position, physic) {
  const rigidBody = createRigidBodyLeverHandle(position, physic);
  const collider = createColliderLeverHandle(rigidBody, physic, mesh);
  return { rigidBody, collider }
}

// Function to create a simple dynamic rigid body
export function createRigidBodyDynamic(mesh, physic) {
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(0);
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderGeo(rigidBody, physic, mesh)
  return { rigidBody, collider }
}

// Function to create a rigid body for the character entity
export function createRigidBodyEntity(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(1)
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const collider = createColliderBall(0.18, rigidBody, physic)
  return { rigidBody, collider }
}

// Function to create a player foot
export function createFoot(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.kinematicVelocityBased().setAdditionalMass(0);
  rigidBodyDesc.setTranslation(position.x,position.y,position.z);
  const rigidBody = physic.createRigidBody(rigidBodyDesc)

  const colliderDesc = ColliderDesc.cuboid(0.001,0.25,0.001).setMass(0);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}

// Function to create collider for disk
function createColliderDisk(physic, rigidBody) {
  const colliderDesc = ColliderDesc.cuboid(0.4,0.3,0.4).setMass(1).setActiveEvents(ActiveEvents.CONTACT_FORCE_EVENTS).setActiveCollisionTypes(ActiveCollisionTypes.DYNAMIC_DYNAMIC);
  return physic.createCollider(colliderDesc, rigidBody)
}

// Function to create rigid body for disk
export function create_rigid_body_for_disk(mesh, physic) {
  const position = mesh.position;
  const rigidBodyDesc = RigidBodyDesc.dynamic();
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  rigidBody.setAdditionalMass(0);
  return rigidBody;
}

// Function to create the collider for disk (relay function)
export function create_collider_for_disk(physic, rigidBody) {
  return createColliderDisk(physic, rigidBody);
}

// Function to create a disk
export function createRigidBodyDynamicDisk(mesh, physic) {
  
  const rigidBody = create_rigid_body_for_disk(mesh, physic);

  const collider = create_collider_for_disk(physic, rigidBody);

  return { rigidBody, collider }
}

// Function to create rigid body for pushbox 
export function createRigidBodyDynamicPushbox(position, rotation, physic) {
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(0);
  rigidBodyDesc.setTranslation(...position);
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const colliderDesc = ColliderDesc.cuboid(0.48,0.48,0.48).setMass(10000);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}

// Function to create collider for glass shards
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

// Function to create glass
export function createGlass(position, physic) {
  const rigidBodyDesc = RigidBodyDesc.fixed();
  rigidBodyDesc.setTranslation(...position)
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const colliderDesc = ColliderDesc.cuboid(1,1,1);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}

// Function to create a shard
export function createShard(position, mesh, physic) {
  const rigidBodyDesc = RigidBodyDesc.dynamic().setAdditionalMass(10000);// set mass to be very heavy so we cannot just move the shards
  rigidBodyDesc.setTranslation(...position)
  rigidBodyDesc.setGravityScale(0) // don't just move the objects
  const rigidBody = physic.createRigidBody(rigidBodyDesc)
  const colliderDesc = ColliderDesc.cuboid(0.105,0.105,0.105).setMass(1);
  const collider = physic.createCollider(colliderDesc, rigidBody);
  return { rigidBody, collider }
}
