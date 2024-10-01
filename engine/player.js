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

  update() {
    this.updatePhysic()
    this.updateVisual()
  }

  updatePhysic() {
    const x = this.rigidBody.linvel().x 
    const y = this.rigidBody.linvel().y
    const z = this.rigidBody.linvel().z
    this.rigidBody.setLinvel({ x, y, z }, true)
  }

  updateVisual() {
    console.log(this.mesh)
    this.position.copy(this.rigidBody.translation())
  }

}