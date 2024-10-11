import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Object3D } from 'three';
import { createRigidBodyDynamic, createRigidBodyDynamicDisk, createRigidBodyEntity } from '../engine/function';
import physic from '../engine/physic';
import colors from './disk_colors';
// import physic from '../engine/physic';

class Disk extends Object3D {
    collider = null;
    rigidBody = null;  

    constructor() {
        super();
    }

    async set_disk(disk_type, physic) {
        const gltf = await (new GLTFLoader()).loadAsync("../models/disk_org_anim_remastered.glb")
        .then((gltf) => {
            // Get the colour of the disk ring
            const disk_color = colors[disk_type];
            this._color = new THREE.Color(disk_color.r, disk_color.g, disk_color.b);


            console.log(gltf.scene.children);
            this._disk_mesh = gltf.scene.children[0];

            // Extract the skinned material so we can set the colour directly
            this._colour_ring = this._disk_mesh.children[0].children[1];
            this._colour_ring.material.emissive = this._color;
            

            console.log(this._disk_mesh);
            this._disk_mesh.scale.setScalar(0.2);
            this._disk_mesh.position.y = 8;
            this._disk_mesh.position.z = 25;
            this._mixer = new THREE.AnimationMixer(this);
            
            this._manager = new THREE.LoadingManager();
            this._manager.onLoad = () => {
                console.log(this._animation.action)
                this._animation.action.time = 0.0;
                this._animation.action.enabled = true;
                this._animation.action.setEffectiveTimeScale(0.5);
                this._animation.action.setEffectiveWeight(1.0);
                this._animation.action.setLoop(THREE.LoopRepeat)
                this._animation.action.play();
                
            }


            const _on_load = (animation_name, animation) => {
                const clip = animation.animations[0];
                const action = this._mixer.clipAction(clip);

                this._animation = {
                    clip: clip,
                    action: action
                }
            }
            
            const loader = new GLTFLoader(this._manager);
            loader.setPath('../models/');
            loader.load('disk_org_anim.glb', (a) => {_on_load('floating', a);}); // idle animation

            this._light = new THREE.PointLight(this._color, 5, 0);
            this._light.translateY(-0.1);
            this.add(this._light);

            this.position.copy(this._disk_mesh.position);
            this.initPhysic();
            this.initVisual();
        })    //.then(gltf => gltf.scene.children[0])
        
    }

    initPhysic() {
        const { rigidBody, collider } = createRigidBodyDynamicDisk(this._disk_mesh, physic);
        // rigidBody.
        this.rigidBody = rigidBody;
        this.collider = collider;
    }

    initVisual() {
        this._disk_mesh.position.set(0, 0, 0);
        this._disk_mesh.castShadow = true;
        this.add(this._disk_mesh);
    }

    update(time_in_seconds) {
        if (this._mixer) {
            this._mixer.update(time_in_seconds);
        }

        this.updateVisual();
        this.updatePhysic();
    }

    updatePhysic() {
        // const linvel = this.rigidBody.linvel();
        // const x = linvel.x;
        // const y = linvel.y;
        // const z = linvel.z;
        // this.rigidBody.setLinvel(0,0,0);

        // this.rigidBody.addForce({x: 0, y: 0, z: 0})

        this.rigidBody.setLinvel({ x: 0, y: -1, z: 0 }, true);

    }

    updateVisual() {
        this.position.copy(this.rigidBody.translation());
    }
}

export default Disk