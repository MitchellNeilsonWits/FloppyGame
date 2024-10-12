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
  const spotLights = [];
  const directionalLights = [];
  let skybox;
  let player_spawn;
  let strength_disk_spawn;
  let flight_disk_spawn;
  let shrink_disk_spawn;


  for (const mesh of glb.scene.children) {
    console.log(mesh);
    if (mesh.name.includes("player_spawn")) {
      player_spawn = mesh;
    } else if (mesh.name.includes("strength_disk")) {
      strength_disk_spawn = mesh;
    } else if (mesh.name.includes("flight_disk")) {
      flight_disk_spawn = mesh;
    } else if (mesh.name.includes("shrink_disk")) {
      shrink_disk_spawn = mesh;
    } else if (mesh.name.includes("skybox")) {
      skybox = mesh;
      visuals.push(mesh);
      colliders.push(mesh);
    } else if (mesh.type === 'PointLight') {
      pointLights.push(mesh);
    } else if (mesh.type === 'SpotLight') {
      spotLights.push(mesh);
    } else if (mesh.type === 'DirectionalLight') {
      directionalLights.push(mesh);
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
  
  return { visuals, colliders, visuals_dynamic, colliders_dynamic, pointLights, players, interactable, pushboxes, ground_objects, spotLights, player_spawn, strength_disk_spawn, flight_disk_spawn, shrink_disk_spawn, directionalLights, skybox }
}