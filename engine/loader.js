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
  const interactable = {}
  const pushboxes = [];
  const ground_objects = [];

  for (const mesh of glb.scene.children) {
    if (mesh.type === 'PointLight') {
      pointLights.push(mesh);
    } else if (mesh.type === 'Mesh') {
      if (mesh.name.includes("pushbox")) {
        pushboxes.push(mesh);
      } else if (!mesh.name.includes("dynamic")) {
        if (mesh.name.includes("interactable")) {
          interactable[mesh.name] = {
            mesh: mesh,
            type: "static"
          };
        }
        if (mesh.name.includes("ground")) {
          console.log("new ground: ", mesh);
          ground_objects.push(mesh);
        }
        visuals.push(mesh)
        colliders.push(mesh)
      } else {
        if (mesh.name.includes("interactable")) {
          interactable[mesh.name] = {
            mesh: mesh,
            type: "dynamic"
          };
        }
        visuals_dynamic.push(mesh);
        colliders_dynamic.push(mesh);
      }
    }

    
  }
  
  return { visuals, colliders, visuals_dynamic, colliders_dynamic, pointLights, players, interactable, pushboxes, ground_objects }
}