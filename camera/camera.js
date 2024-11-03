/**
 * File: camera.js
 * 
 * Description:
 *  Sample camera file
 */

import * as THREE from 'three';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;

export default camera