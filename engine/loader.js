import { DRACOLoader, KTX2Loader } from 'three-stdlib';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
// loader.setDRACOLoader( dracoLoader );
dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
const loaderGlb = new GLTFLoader()

// const ktx2Loader = new KTX2Loader();
// ktx2Loader.setTranscoderPath('three-stdlib')


// loaderGlb.setKTX2Loader(ktx2Loader);
loaderGlb.setDRACOLoader(dracoLoader);

export default async function loadAssets(path) {
  const glb = await loaderGlb.loadAsync(path)

  const animations = glb.animations
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
  let npc_spawn;
  let portal;

  let placement_matters_meshes = {};

  const lever_gates = {}


  const glass = []
  const finale_point_lights = {}
  let finale_platform;

  console.log(glb.scene.children);
  for (const mesh of glb.scene.children) {
    if (mesh.name.includes("finaleplatform")) {
      finale_platform = mesh;
    } else if (mesh.name.includes("finalepoint")) {
      const name = mesh.name.split('_')[1];
      finale_point_lights[name] = mesh;
    } else if (mesh.name.includes("start_button")) {
      placement_matters_meshes['button'] = mesh;
    } else if (mesh.name.includes("strength_platform")) {
      placement_matters_meshes['strength_platform'] = mesh;
      ground_objects.push(mesh);
      // colliders.push(mesh);
      // visuals.push(mesh);
    } else if (mesh.name.includes("flight_platform")) {
      placement_matters_meshes['flight_platform'] = mesh;
      ground_objects.push(mesh);
      // colliders.push(mesh);
      // visuals.push(mesh);  
    } else if (mesh.name.includes("shrink_platform")) {
      placement_matters_meshes['shrink_platform'] = mesh;
      ground_objects.push(mesh);
      // colliders.push(mesh);
      // visuals.push(mesh);  
    } else if (mesh.name.includes("strength_light")) {
      placement_matters_meshes['strength_light'] = mesh;
      // pointLights.push(mesh);
    } else if (mesh.name.includes("flight_light")) {
      placement_matters_meshes['flight_light'] = mesh;
      // pointLights.push(mesh);
    } else if (mesh.name.includes("shrink_light")) {
      placement_matters_meshes['shrink_light'] = mesh;
      // pointLights.push(mesh);
    } else if (mesh.name.includes("level_end")) {
      portal = mesh;
    } else if (mesh.name.includes("npc_spawn")) {
      console.log("GOT AN NPC_SPAWN")
      npc_spawn = mesh;
    } else if (mesh.name.includes("glass")) {
      glass.push(mesh);
    } else if (mesh.name.includes("player_spawn")) {
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
      if (mesh.name.includes("lever")) {
        const lever_name = mesh.name.split('_')[1];
        console.log("NEW LEVER!", lever_name)
        if (!lever_gates[lever_name]) {
          lever_gates[lever_name] = {
            name: lever_name,
            lever: mesh
          }
        } else {
          lever_gates[lever_name].lever = mesh;
        }
      } else if (mesh.name.includes("gate")) {
        
        const gate_name = mesh.name.split('_')[1];
        if (!lever_gates[gate_name]) {
          lever_gates[gate_name] = {
            name: gate_name,
            gate: mesh
          }
        } else {
          lever_gates[gate_name].gate = mesh;
        }
        
      } else if (mesh.name.includes("pushbox")) {
        pushboxes.push(mesh);
        // visuals.push(mesh)
        // colliders.push(mesh)
      
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
  

  return { finale_platform, finale_point_lights, placement_matters_meshes, portal, npc_spawn, animations, visuals, colliders, visuals_dynamic, colliders_dynamic, pointLights, players, interactable, pushboxes, ground_objects, spotLights, player_spawn, strength_disk_spawn, flight_disk_spawn, shrink_disk_spawn, directionalLights, skybox, lever_gates, glass }
}