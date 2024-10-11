import * as THREE from 'three';

class CharacterSkinController {
    constructor(target) {
        this.target = target;
        // Make a copy of the original texture map
        // this.original_mapping = {...this.target.children[0].children[0].children[0].material.map};
        const original_mapping = this.target.children[0].children[0].children[0].material.map;
        this.original_mapping = original_mapping.clone();
        console.log(this.original_mapping);
        // this.original_mapping.clone
        this.init();
    }

    change_skin(skin) {
        if (this.skins[`${skin}`]) {
            const skin_mapping = this.skins[`${skin}`];
            this.target.children[0].children[0].children[0].material.map = skin_mapping;
            this.target.children[0].children[0].children[0].needsUpdate = true;
        }
    }

    async new_texture(url, skin) {
        new THREE.TextureLoader().loadAsync(url).then( texture => {
            console.log(texture);
            const new_mapping = this.original_mapping.clone();
            new_mapping.source = texture.source;

            this.skins[`${skin}`] = new_mapping;
        
            console.log(this.skins);
        })
    }

    init() {
        this.skins = {};
        this.new_texture("skins/default_baseColor.jpeg", "default");
        this.new_texture("skins/strength_baseColor.jpg", "strength");
        this.new_texture("skins/flight_baseColor.jpg", "flight");
        this.new_texture("skins/shrink_baseColor.jpg", "shrink");
        
    }
}

export default CharacterSkinController