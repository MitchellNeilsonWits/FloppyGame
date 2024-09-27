import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

function render_character(scene) {

    /* Loading all models using manager */
    const manager = new THREE.LoadingManager();
    manager.onLoad = init;

    /* Defining models to be loaded */
    const models = {
        floppy: {url : 'character/floppy_with_reader_animated_v4.glb'}
    }

    {
        const gltfLoader = new GLTFLoader(manager);
        for (const model of Object.values(models)) {
            console.log(model);
        gltfLoader.load(model.url, (gltf) => {
            model.gltf = gltf;
        });
        }
    }

    /* Preparing models */
    function prepModelsAndAnimations() {
        Object.values(models).forEach(model => {
            const animsByName = {};
            model.gltf.animations.forEach((clip) => {
            animsByName[clip.name] = clip;
            });
            model.animations = animsByName;
        });
    }

    const mixers = []
    function init() {

        prepModelsAndAnimations();

        Object.values(models).forEach((model, ndx) => {
            const clonedScene = SkeletonUtils.clone(model.gltf.scene);
            const root = new THREE.Object3D();
            root.add(clonedScene);
            scene.add(root);
            root.scale.set(0.5,0.5,0.5);

            const mixer = new THREE.AnimationMixer(clonedScene);
            const firstClip = Object.values(model.animations)[0];
            console.log(Object.values(model.animations));
            const action = mixer.clipAction(firstClip);
            action.play();
            mixers.push(mixer);
        });
    }

    return mixers
}

export default render_character