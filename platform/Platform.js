import { Object3D } from 'three';
import physic from '../engine/physic';
import { createRigidBodyFixed } from '../engine/function';

class Platform extends Object3D {

  constructor(mesh) {
    super();
    this.mesh = mesh;
    this.position.copy(mesh.position);
    this.pressed = false;
  }

  async set_platform() {
    this.initPhysic(physic);
    this.initVisual();
  }

  initPhysic(physic) {
    const { rigidBody, collider } = createRigidBodyFixed(this.mesh, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  initVisual() {
    this.mesh.position.set(0, 0, 0);
    this.mesh.castShadow = true;
    this.add(this.mesh);
  }

  update(x_vel, y_vel, z_vel) {
    
    // this.updatePhysic(x_vel, y_vel, z_vel);
    // this.updateVisual();
  }

  updatePhysic(x_vel, y_vel, z_vel) {

  }

  updateVisual() {
    
  }
}


export default Platform;