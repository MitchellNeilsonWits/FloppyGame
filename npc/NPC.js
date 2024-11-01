/**
 * File: NPC.js
 * 
 * Description:
 *  Handles setup and objects of NPC
 */

import * as THREE from 'three';
import { Object3D } from "three";
import physic from "../engine/physic";
import { createColliderLeverHandle, createLeverHandle, createRigidBodyDynamicPushbox, createRigidBodyEntity, createRigidBodyFixed, createRigidBodyLeverBase, createRigidBodyLeverHandle } from "../engine/function";
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import NPCFSM from './NPCFSM';

class NPC extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(position, rotation) {
    super();
    this.position.copy(position);
    this.rotation.copy(rotation);
    this.show_marker = false;
  }

  // Function to hide the NPC interaction marker
  hide_marker() {
    this.show_marker = false;
    this.remove(this._marker_mesh);
  }

  // Function to show the NPC interaction marker
  show_marker() {
    this.show_marker = true;
    this.add(this._marker_mesh);
  }

  // Function to set the object using async
  async set_npc() {
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      // Create the PICTURE IN PICTURE for face when the model is loaded
      this.video = document.createElement('video');
      
      this.video.src = 'npc/npc_face_v2.mp4'; 
      this.video.loop = true; 
      this.video.muted = true;
      this.video.volume = 0; 
      this.video.crossOrigin = 'anonymous';
      this.video.style.display = 'none';

      const existingMaterial = this._screen.material;

      if (existingMaterial.map) {
          existingMaterial.map.dispose();
      }

      this.videoTexture = new THREE.VideoTexture(this.video);
      this.videoTexture.minFilter = THREE.LinearFilter; 
      this.videoTexture.magFilter = THREE.LinearFilter;
      this.videoTexture.format = THREE.RGBAFormat;

      existingMaterial.map = this.videoTexture;
      existingMaterial.needsUpdate = true;

      // Play the video on-mute
      this.video.muted = false; 
      this.video.play(); 
      this.videoPlaying = true;

    }
    
    // Load the mesh for the NPC model
    const gltf = (new GLTFLoader(manager)).load("../models/npc_idle.glb", (gltf) => {
      gltf.scene.children[0].scale.set(0.3,0.3,0.3);
      this._pure_mesh = gltf.scene.children[0];
      
      this._screen = this._pure_mesh.children[0].children[0]


      const animations = gltf.animations;
      this.animations = {};
      this._mixer = new THREE.AnimationMixer(this);
      
      // Handle animation load
      const _on_load = (animation_name, animation) => {
      const clip = animation.animations[0];
      const action = this._mixer.clipAction(clip);
      
        this.animations[animation_name] = {
            clip: clip,
            action: action
        }
      }

      this._manager = new THREE.LoadingManager();
      this._manager.onLoad = () => {
        this.state_machine.set_state('wave');
      }

      // Load the wave and idle animations
      const loader = new GLTFLoader(this._manager);
      loader.setPath('models/');
      loader.load('npc_idle.glb', (a) => {_on_load('idle', a);}); // idle animation
      loader.load('npc_wave.glb', (a) => {_on_load('wave', a);}); // wave animation


      this.state_machine = new NPCFSM(this.animations);

      this.initPhysic();
      this.initVisual();
    })

    // Load the marker above NPC head
    const gltf_2 = (new GLTFLoader()).load("../models/npc_marker.glb", (gltf) => {
      
      gltf.scene.children[0].scale.set(0.1,0.1,0.1);
      this._marker_mesh = gltf.scene.children[0];
      this._marker_mesh.position.set(0,3,0);
      this.add(this._marker_mesh);
      
      const loader = new GLTFLoader();
      // Load the marker bob and rotate animation
      loader.load('../models/npc_marker.glb', (a) => {
        const action = this._mixer.clipAction(a.animations[0])
        this._marker_animation = action;
        this._marker_animation.play();
      });


      this._marker_light = new THREE.PointLight(0xffffff,10,0);
      this._marker_light.position.set(0,2,0);
      this.add(this._marker_light);
  }) 
  }


  // Function to initialize the physic for the model
  initPhysic() {
  }

  // Function to initialize the visual for the model
  initVisual() {
    this.add(this._pure_mesh);
  }

  // Function to update the animation and visual for the model
  update(time_elapsed_in_seconds) {
    this._mixer.update(time_elapsed_in_seconds)
    this.updateVisual();
  }

  // Update physic
  updatePhysic(x_vel, y_vel, z_vel) {
  }

  // Update the visual
  updateVisual() {
  }
}

export default NPC;