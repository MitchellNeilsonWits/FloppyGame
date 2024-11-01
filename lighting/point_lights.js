/**
 * File: point_lights.js
 * 
 * Description:
 *  Sample point lights for testing
 */

import * as THREE from 'three';

const light = new THREE.PointLight( 0xffffff, 5000, 100 );
light.position.set( 0, 8, 50 );

export default light