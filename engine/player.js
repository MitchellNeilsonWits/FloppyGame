import { Object3D } from 'three'
import { createRigidBodyEntity } from './function'

const SPEED = 3

export default class Player extends Object3D {
  collider = null
  rigidBody = null

  constructor(mesh, physic) {
    super()
    this.position.copy(mesh.position)
    this.initPhysic(physic)
    this.initVisual(mesh)
  }

  initPhysic(physic) {
    const { rigidBody, collider } = createRigidBodyEntity(this.position, physic)
    this.rigidBody = rigidBody
    this.collider = collider
  }

  initVisual(mesh) {
    mesh.position.set(0, 0, 0)
    mesh.castShadow = true
    this.add(mesh)
  }

  update(x_vel, y_vel, z_vel) {
    this.updatePhysic(x_vel, y_vel, z_vel)
    this.updateVisual()
  }

  updatePhysic(x_vel, y_vel, z_vel) {
    // const x = this.rigidBody.linvel().x + x_vel; 
    // const y = this.rigidBody.linvel().y + y_vel;
    // const z = this.rigidBody.linvel().z + z_vel;
    const x = x_vel;
    const y = y_vel;
    const z = z_vel;
    // const x = 1;
    console.log(x, y, z)
    this.rigidBody.setLinvel({ x, y, z }, true)
    // this.rigidBody.setLinvel({0.002, 0.002, 0}, true)
  }

  updateVisual() {
    console.log(this.mesh)
    this.position.copy(this.rigidBody.translation())
  }

}