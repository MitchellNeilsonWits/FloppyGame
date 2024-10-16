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
    // this.position.copy(position);
    // this.rotation.copy(rotation);
    // this.scale.copy(scale);
    console.log(scale);
  }

  async set_shard(mesh) {
    this._shard_mesh = mesh;
    // this.initPhysic();
    // this.initVisual();
    this.inactive_initialization();
  }

  inactive_initialization() {
    this._shard_mesh.position.set(0, 0, 0);
    this._shard_mesh.castShadow = true;
    const new_pos = new THREE.Vector3(this._shard_pos.x, this._shard_pos.y, this._shard_pos.z )
    this.position.copy(new_pos);
    this.add(this._shard_mesh);
    // this._shard_reflector = new Reflector(this._shard_mesh.geometry, {
    //   clipBias: 0.003,
    //   textureWidth: window.innerWidth * window.devicePixelRatio,
    //   textureHeight: window.innerHeight * window.devicePixelRatio,
    //   color: 0xb5b5b5
    // })
    // this.add(this._shard_reflector);
  }

  initPhysic() {
    const rigid_body_pos = new THREE.Vector3(this._world_offset.x + this._shard_pos.x, this._world_offset.y + this._shard_pos.y, this._world_offset.z + this._shard_pos.z);
    const { rigidBody, collider } = createShard(rigid_body_pos, this._shard_mesh, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  initVisual() {
    this._shard_mesh.position.set(0, 0, 0);
    this._shard_mesh.castShadow = true;
    const new_pos = new THREE.Vector3(this.rigidBody.translation().x - this._world_offset.x, this.rigidBody.translation().y - this._world_offset.y, this.rigidBody.translation().z - this._world_offset.z )
    this.position.copy(new_pos);
    this.add(this._shard_mesh);
  }

  update() {
    if (this.is_active) {
      this.updatePhysic();
      this.updateVisual();
    }
  }

  updatePhysic(broken_status) {
    if (this.is_active) { 
      // const x = this.rigidBody.linvel().y;
      // const y = this.rigidBody.linvel().y;
      // const z = this.rigidBody.linvel().y;
      // this.rigidBody.setLinvel({ x:x , y: y, z: z }, true);
      if (this.added_forces) {
        this.rigidBody.resetForces(true);
        this.added_forces = false;
      }
    } else {
      this.rigidBody.setLinvel({ x:0 , y: 0, z: 0 }, true);
    }
  }

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

  updateVisual() {
    const new_pos = new THREE.Vector3(this.rigidBody.translation().x - this._world_offset.x, this.rigidBody.translation().y - this._world_offset.y, this.rigidBody.translation().z - this._world_offset.z )
    this.position.copy(new_pos);
  }
}

export default Shard;