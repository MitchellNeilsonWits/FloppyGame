import { Object3D } from 'three';
import { createRigidBodyDynamic, createRigidBodyEntity } from './function';


export default class DynamicObject extends Object3D {
  collider = null;
  rigidBody = null;

  constructor(mesh, physic) {
    super();
    this.position.copy(mesh.position);
    this.initPhysic(mesh, physic);
    this.initVisual(mesh);
  }

  initPhysic(mesh, physic) {
    const { rigidBody, collider } = createRigidBodyDynamic(mesh, physic);
    this.rigidBody = rigidBody;
    this.collider = collider;
  }

  initVisual(mesh) {
    mesh.position.set(0, 0, 0);
    mesh.castShadow = true;
    this.add(mesh);
  }

  update() {
    this.updateVisual();
    this.updatePhysic();
  }

  updatePhysic() {
    // const linvel = this.rigidBody.linvel();
    // const x = linvel.x;
    // const y = linvel.y;
    // const z = linvel.z;
    // this.rigidBody.setLinvel({ x, y, z }, true);

    // this.rigidBody.addForce({x: 0, y: 0, z: 0})

    // this.rigidBody.setLinvel({ x: 0, y: -1, z: 0 }, true);

  }

  updateVisual() {
    this.position.copy(this.rigidBody.translation());
  }
}
