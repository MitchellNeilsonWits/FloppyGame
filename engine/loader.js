import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loaderGlb = new GLTFLoader()

export default async function loadAssets(path) {
  const glb = await loaderGlb.loadAsync(path)

  const visuals = []
  const colliders = []
  const pointLights = []
  const players = []

  for (const mesh of glb.scene.children) {
    if (mesh.type === 'PointLight') {
      pointLights.push(mesh);
    } else if (mesh.type === 'Mesh') {
      visuals.push(mesh)
      colliders.push(mesh)
    }
  }
  
  return { visuals, colliders, pointLights, players }
}