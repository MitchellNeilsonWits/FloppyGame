/**
 * File: PushabbleBox.js
 * 
 * Description:
 *  Original pushable box file for testing purposes
 */

import * as THREE from 'three';
import Component from "../Component";

class PushableBox extends Component {
    constructor() {
        super();
        this.init_object();
    }

    init_object() {

        const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
        const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
        const cube = new THREE.Mesh(boxGeometry, basicMaterial);
        cube.rotation.set(0.4, 0.2, 0);

        this._object = cube;
    }

    get_object() {
        return this._object;
    }


}

export default PushableBox