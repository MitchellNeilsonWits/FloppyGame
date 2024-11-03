/**
 * File: Lever.js
 * 
 * Description:
 *  Lever object
 */

import * as THREE from 'three';
import { Object3D } from "three";
import physic from "../engine/physic";
import { createColliderLeverHandle, createLeverHandle, createRigidBodyDynamicPushbox, createRigidBodyEntity, createRigidBodyFixed, createRigidBodyLeverBase, createRigidBodyLeverHandle } from "../engine/function";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

class Lever extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(position, rotation, gate, level) {
    super();
    this.position.copy(position);
    this.lever_on = false;
    this.lever_busy_changing = false;
    this.current_lever_rotation = 30;
    this.paired_gate = gate;
    this.level = level;
  }

  // Function to remove the attached gate from the level
  remove_gate_from_level() {
    physic.removeCollider(this.paired_gate.collider);
    this.level.remove(this.paired_gate);
  }

  // Function to add the attached gate to the level
  add_gate_to_level() {
    const new_collider = createColliderLeverHandle(this.paired_gate.rigidBody, physic, this.paired_gate._gate_mesh);
    this.paired_gate.collider = new_collider;
    this.level.add(this.paired_gate);
  }

  // Function to toggle the lever status
  toggle_lever_on() {
    if (!this.lever_busy_changing) {
      this.lever_on = !this.lever_on;
      if (this.lever_on) {
        this.remove_gate_from_level();
      } else {
        this.add_gate_to_level();
      }
    } else {
      // --
    }
  }

  // Function to set the object using async
  async set_lever() {
    const gltf = await (new GLTFLoader()).loadAsync("../models/lever2.glb")
    .then((gltf) => {;
        
        this._lever_handle = gltf.scene.children[0];
        this._lever_base = gltf.scene.children[1];
        
        this.initPhysic();
        this.initVisual();
    }) 
  }

  // Function to initialize the physic
  initPhysic() {
    createRigidBodyLeverBase(this._lever_base, this.position, physic);
    const { rigidBody, collider } = createLeverHandle(this._lever_handle, this.position, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  // Function to initialize the visual
  initVisual() {
    this._lever_base.position.set(0, 0, 0);
    this.add(this._lever_base);
    this.add(this._lever_handle);
  }

  // Function to make updates
  update() {
    this.updateVisual();
  }

  // Update the physic
  updatePhysic(x_vel, y_vel, z_vel) {
    const x = x_vel;
    const y = this.rigidBody.linvel().y;
    const z = z_vel;
    this.rigidBody.setLinvel({ x, y, z }, true);
  }

  // Update the visual
  updateVisual() {
    if (this.lever_on && this._lever_handle.rotation.z < 0.8698107603586773) {
        this._lever_handle.rotateZ(Math.PI/150);
        this.lever_busy_changing = true;
    } else if (!this.lever_on && this._lever_handle.rotation.z > -0.2698107603586773) {
        this._lever_handle.rotateZ(-Math.PI/150);
        this.lever_busy_changing = true;
    } else {
      this.lever_busy_changing = false;
    }
    
    this.position.copy(this.rigidBody.translation());
  }
}

export default Lever;