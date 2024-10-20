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
    this.charController = physic.createCharacterController(0);
    
    // const foot = createFoot(this.position, physic);
    // this.foot_rigidBody = foot.rigidBody;
    // this.foot_collider = foot.collider;

  }

  initVisual(mesh) {
    mesh.position.set(0, 0.05, 0);
    mesh.castShadow = true;
    this.add(mesh);
  }

  update(x_vel, y_vel, z_vel) {
    
    this.updatePhysic(x_vel, y_vel, z_vel);
    this.updateVisual();
  }

  updatePhysic(x_vel, y_vel, z_vel) {

    var x = x_vel;
    var y = y_vel;
    const z = z_vel;

    const terminal_y_velocity = -4;
    if (y < terminal_y_velocity) {
      y = terminal_y_velocity;
    }
    // this.charController.computeColliderMovement(
    //   this.collider,
    //   {x: this.rigidBody.translation().x + 0.01*x_vel, y: this.rigidBody.translation().y + 0.01*y_vel, z: this.rigidBody.translation().z + 0.01*z_vel}
    // )
    // const correctedMovement = this.charController.computedMovement();
    // // console.log({x: this.rigidBody.translation().x + 0.01*x_vel, y: this.rigidBody.translation().y + 0.01*y_vel, z: this.rigidBody.translation().z + 0.01*z_vel})
    // console.log(this.collider.translation());
    // console.log(correctedMovement);

    // var new_x = x_vel;
    // var new_y = y_vel;
    // var new_z = z_vel;

    // if (correctedMovement.x != this.rigidBody.translation().x + 0.1*x_vel) {
    //   new_x = 0
    // }
    // if (correctedMovement.y != this.rigidBody.translation().y + 0.1*y_vel) {
    //   new_y = 0
    // }
    // if (correctedMovement.z != this.rigidBody.translation().z + 0.1*z_vel) {
    //   new_z = 0
    // }


    this.rigidBody.setLinvel({x: x, y: y, z: z}, true);

    
    // this.rigidBody.setLinvel({x: correctedMovement.x/10, y: correctedMovement.y/10, z: correctedMovement.z/10});

    // this.rigidBody.setTranslation(correctedMovement);

    // this.foot_rigidBody.setLinvel({x: x_vel, y: y_vel, z: z_vel});
    // console.log(this.foot_collider.translation());
    // const translation = this.rigidBody.translation()
    // console.log(this.rigidBody.translation());
    // this.foot_rigidBody.setTranslation(translation.x, translation.y - 1, translation.z);
  
    // this.rigidBody.resetForces(true);
    // this.rigidBody.addForce({ x: x_vel, y: 0, z: z_vel }, true);
    this.rigidBody.setAngvel({x:0,y:0,z:0},true);

    // this.rigidBody.setTranslation({},true)
  }

  updateVisual() {
    this.position.copy(this.rigidBody.translation());
  }
}
