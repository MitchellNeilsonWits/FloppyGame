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
    // this.show_marker_changed = false;
  }

  hide_marker() {
    this.show_marker = false;
    this.remove(this._marker_mesh);
    // this.remove(this._marker_light);
  }

  show_marker() {
    this.show_marker = true;
    this.add(this._marker_mesh);
    // this.add(this._marker_light);
  }


  async set_npc() {
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      console.log(this._screen);
      this.video = document.createElement('video');
      
      this.video.src = 'npc/npc_face_v2.mp4'; 
      this.video.loop = true; 
      this.video.muted = true; 
      this.video.crossOrigin = 'anonymous';
      this.video.style.display = 'none';

      // this._screen.material.color = new THREE.Color({r: 1, g:1, b:1});

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

      this.video.muted = false; 
      this.video.play(); 
      this.videoPlaying = true;

      console.log(this._screen.material);
    }
    
    const gltf = (new GLTFLoader(manager)).load("../models/npc_idle.glb", (gltf) => {
      gltf.scene.children[0].scale.set(0.3,0.3,0.3);
      this._pure_mesh = gltf.scene.children[0];
      console.log(this._pure_mesh);
      this._screen = this._pure_mesh.children[0].children[0]


        // this._mesh_p1 = gltf.scene.children[0].children[0].children[0];
        // this._mesh_p2 = gltf.scene.children[0].children[0].children[1];
        // this._mesh_p3 = gltf.scene.children[0].children[0].children[2];
        // this._mesh_p4 = gltf.scene.children[0].children[0].children[3];

        // this._animations = gltf.animations;
        const animations = gltf.animations;
        this.animations = {};
        this._mixer = new THREE.AnimationMixer(this);
        
        const _on_load = (animation_name, animation) => {
          const clip = animation.animations[0];
          const action = this._mixer.clipAction(clip);
          // action.play();

          this.animations[animation_name] = {
              clip: clip,
              action: action
          }
        }

        this._manager = new THREE.LoadingManager();
        this._manager.onLoad = () => {
          this.state_machine.set_state('wave');
        }

        const loader = new GLTFLoader(this._manager);
        loader.setPath('../models/');
        loader.load('npc_idle.glb', (a) => {_on_load('idle', a);}); // idle animation
        loader.load('npc_wave.glb', (a) => {_on_load('wave', a);}); // idle animation


        this.state_machine = new NPCFSM(this.animations);

        this.initPhysic();
        this.initVisual();
    })

    // Load the marker
    const gltf_2 = (new GLTFLoader()).load("../models/npc_marker.glb", (gltf) => {
      console.log(gltf.scene);
      gltf.scene.children[0].scale.set(0.1,0.1,0.1);
      this._marker_mesh = gltf.scene.children[0];
      this._marker_mesh.position.set(0,3,0);
      this.add(this._marker_mesh);
      
      const loader = new GLTFLoader();
      loader.load('../models/npc_marker.glb', (a) => {
        const action = this._mixer.clipAction(a.animations[0])
        this._marker_animation = action;
        this._marker_animation.play();
      }); // idle animation


      this._marker_light = new THREE.PointLight(0xffffff,10,0);
      this._marker_light.position.set(0,2,0);
      this.add(this._marker_light);
  }) 
  }

  initPhysic() {
    // const { rigidBody, collider } = createRigidBodyFixed(this._mesh_p2, physic);
    // this.rigidBody = rigidBody;
    // this.collider = collider;
  }

  initVisual() {
    // this._mesh_p1.position.set(0, 0, 0);
    // this._mesh_p2.position.set(0, 0, 0);
    // this._mesh_p3.position.set(0, 0, 0);
    // this._mesh_p4.position.set(0, 0, 0);
    
    this.add(this._pure_mesh);
    
    // this.add(this._mesh_p1);
    // this.add(this._mesh_p2);
    // this.add(this._mesh_p3);
    // this.add(this._mesh_p4);

  }


  update(time_elapsed_in_seconds) {
    this._mixer.update(time_elapsed_in_seconds)
    this.updateVisual();
  }

  updatePhysic(x_vel, y_vel, z_vel) {
    // const x = x_vel;
    // const y = this.rigidBody.linvel().y;
    // const z = z_vel;
    // this.rigidBody.setLinvel({ x, y, z }, true);
  }

  updateVisual() {
    // console.log(this._lever_handle.rotation);
    // // this._lever_handle.rotation.y = 0.6698107603586773;
    // if (this.lever_on && this._lever_handle.rotation.z < 0.8698107603586773) {
    //     // this.current_lever_rotation -= Math.PI/12; 
    //     this._lever_handle.rotateZ(Math.PI/150);
    //     this.lever_busy_changing = true;
    // } else if (!this.lever_on && this._lever_handle.rotation.z > -0.2698107603586773) {
    //     // this.current_lever_rotation += Math.PI/12; 
    //     this._lever_handle.rotateZ(-Math.PI/150);
    //     this.lever_busy_changing = true;
    // } else {
    //   this.lever_busy_changing = false;
    // }
    
    // this.position.copy(this.rigidBody.translation());
  }
}

export default NPC;