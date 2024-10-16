import { Object3D } from 'three';
import { createFoot, createRigidBodyEntity } from './function';
import physic from './physic';

const SPEED = 3;

export default class Player extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(mesh) {
    super();
    this.position.copy(mesh.position);
    // this.initPhysic(physic);
    // this.initVisual(mesh);
  }

  async set_player(mesh) {
    this.initPhysic(physic);
    this.initVisual(mesh);
  }

  initPhysic(physic) {
    const { rigidBody, collider } = createRigidBodyEntity(this.position, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
    
    // const foot = createFoot(this.position, physic);
    // this.foot_rigidBody = foot.rigidBody;
    // this.foot_collider = foot.collider;

  }

  initVisual(mesh) {
    mesh.position.set(0, 0, 0);
    mesh.castShadow = true;
    this.add(mesh);
  }

  update(x_vel, y_vel, z_vel) {
    this.updatePhysic(x_vel, y_vel, z_vel);
    this.updateVisual();
  }

  updatePhysic(x_vel, y_vel, z_vel) {
    const x = x_vel;
    var y = y_vel;
    const z = z_vel;

    const terminal_y_velocity = 0;
    if (y < terminal_y_velocity) {
      y = terminal_y_velocity;
    }
    this.rigidBody.setLinvel({x: x_vel, y: y_vel, z: z_vel});


    // this.foot_rigidBody.setLinvel({x: x_vel, y: y_vel, z: z_vel});
    // console.log(this.foot_collider.translation());
    // const translation = this.rigidBody.translation()
    // console.log(this.rigidBody.translation());
    // this.foot_rigidBody.setTranslation(translation.x, translation.y - 1, translation.z);
  
    // this.rigidBody.resetForces(true);
    // this.rigidBody.addForce({ x: x_vel, y: 0, z: z_vel }, true);
    this.rigidBody.setAngvel({x:0,y:0,z:0},true);
  }

  updateVisual() {
    this.position.copy(this.rigidBody.translation());
  }
}
