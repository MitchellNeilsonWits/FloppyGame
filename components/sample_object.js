/**
 * File: sample_object.js
 * 
 * Description:
 *  Simple object for testing purposes
 */

import * as THREE from 'three';

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
cube.rotation.set(0.4, 0.2, 0);

export default cube;