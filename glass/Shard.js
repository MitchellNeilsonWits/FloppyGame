/**
 * File: Shard.js
 * 
 * Description:
 *  Shard object
 */

import * as THREE from 'three';
import { Object3D } from "three";
import physic from "../engine/physic";
import { createRigidBodyDynamic, createRigidBodyDynamicPushbox, createRigidBodyEntity, createShard } from "../engine/function";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Reflector } from 'three-stdlib';

class Shard extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(world_offset, shard_position, rotation, scale) {
    super();
    this._world_offset = world_offset;
    this._shard_pos = shard_position;
    this._shard_rotation = rotation;
    this.is_active = false;
    this.added_forces = false;
  }

  // Function to set the object with async
  async set_shard(mesh) {
    this._shard_mesh = mesh;
    this.inactive_initialization();
  }

  // Function to intialze inactive shards
  inactive_initialization() {
    this._shard_mesh.position.set(0, 0, 0);
    this._shard_mesh.castShadow = true;
    const new_pos = new THREE.Vector3(this._shard_pos.x, this._shard_pos.y, this._shard_pos.z )
    this.position.copy(new_pos);
    this.add(this._shard_mesh);
  }

  // Function to initialize the physic
  initPhysic() {
    const rigid_body_pos = new THREE.Vector3(this._world_offset.x + this._shard_pos.x, this._world_offset.y + this._shard_pos.y, this._world_offset.z + this._shard_pos.z);
    const { rigidBody, collider } = createShard(rigid_body_pos, this._shard_mesh, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  // Function to initialize the visual
  initVisual() {
    this._shard_mesh.position.set(0, 0, 0);
    this._shard_mesh.castShadow = true;
    const new_pos = new THREE.Vector3(this.rigidBody.translation().x - this._world_offset.x, this.rigidBody.translation().y - this._world_offset.y, this.rigidBody.translation().z - this._world_offset.z )
    this.position.copy(new_pos);
    this.add(this._shard_mesh);
  }

  // Function to update the shard physic and visual
  update() {
    if (this.is_active) {
      this.updatePhysic();
      this.updateVisual();
    }
  }

  // Function to update physic
  updatePhysic(broken_status) {
    if (this.is_active) { 
      if (this.added_forces) {
        this.rigidBody.resetForces(true);
        this.added_forces = false;
      }
    } else {
      this.rigidBody.setLinvel({ x:0 , y: 0, z: 0 }, true);
    }
  }

  // Function to activate the shard
  activate() {
    this.initPhysic();
    
    this.is_active = true;
    this.rigidBody.setGravityScale(1);
    this.rigidBody.setAdditionalMass(0);

    const random_x = (Math.random() <= 0.5 ? -1 : 1) * Math.random()*500;
    const random_y = Math.random()*100;
    const random_z = (Math.random() <= 0.5 ? -1 : 1) * Math.random()*500;

    this.rigidBody.addForce({x: random_x, y: random_y, z: random_z}, true);
    this.added_forces = true;
  }

  // Function to update the visual
  updateVisual() {
    const new_pos = new THREE.Vector3(this.rigidBody.translation().x - this._world_offset.x, this.rigidBody.translation().y - this._world_offset.y, this.rigidBody.translation().z - this._world_offset.z )
    this.position.copy(new_pos);
  }
}

export default Shard;