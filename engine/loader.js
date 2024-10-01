import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loaderGlb = new GLTFLoader()

export default async function loadAssets(path) {
  const glb = await loaderGlb.loadAsync(path)
  const visuals = []
  const colliders = []
  const players = []

  for (const mesh of glb.scene.children) {
    const name = mesh.name
    visuals.push(mesh)
    colliders.push(mesh)
  }
  console.log("Visuals:",visuals)
  console.log("Colliders:",colliders)
  return { visuals, colliders, players }
}