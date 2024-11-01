
/**
 * File: CharacterSkinController.js
 * 
 * Description:
 *  Controller to handle which skin the user currently has on
 */
import * as THREE from 'three';

class CharacterSkinController {
    constructor(target) {
        // Make copies of original mappings and other variables
        this.target = target;
        const original_mapping = this.target.children[0].children[0].children[0].material.map;
        this.original_mapping = original_mapping.clone();
        this.init();
    }

    // Function to change the skin of the character
    change_skin(skin) {
        if (this.skins[`${skin}`]) {
            // Load the mapping and update
            const skin_mapping = this.skins[`${skin}`];
            this.target.children[0].children[0].children[0].material.map = skin_mapping;
            this.target.children[0].children[0].children[0].needsUpdate = true;
        }
    }

    // Function to create a new texture from a file
    async new_texture(url, skin) {
        new THREE.TextureLoader().loadAsync(url).then( texture => {
            
            const new_mapping = this.original_mapping.clone();
            new_mapping.source = texture.source;

            this.skins[`${skin}`] = new_mapping;
        
        })
    }

    // Function to initialize the skins: create textures for each ability and the default skin
    init() {
        this.skins = {};
        this.new_texture("skins/default_baseColor.jpeg", "default");
        this.new_texture("skins/strength_baseColor.jpg", "strength");
        this.new_texture("skins/flight_baseColor.jpg", "flight");
        this.new_texture("skins/shrink_baseColor.jpg", "shrink");
        
    }
}

export default CharacterSkinController