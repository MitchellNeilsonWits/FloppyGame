import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loaderGlb = new GLTFLoader()

export default async function loadAssets(path) {
  const glb = await loaderGlb.loadAsync(path)

  const visuals = []
  const colliders = []
  const visuals_dynamic = []
  const colliders_dynamic = []
  const pointLights = []
  const players = []

  for (const mesh of glb.scene.children) {
    if (mesh.type === 'PointLight') {
      pointLights.push(mesh);
    } else if (mesh.type === 'Mesh') {
      if (!mesh.name.includes("dynamic")) {
        visuals.push(mesh)
        colliders.push(mesh)
      } else {
        visuals_dynamic.push(mesh);
        colliders_dynamic.push(mesh);
      }
    }
  }
  
  return { visuals, colliders, visuals_dynamic, colliders_dynamic, pointLights, players }
}