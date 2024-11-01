/**
 * File: sample_plane.js
 * 
 * Description:
 *  Simple plane object for testing purposes
 */

import * as THREE from 'three';

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100,100,10,10),
    new THREE.MeshStandardMaterial({
        color: 0x808080
    })
);

plane.rotation.x = -Math.PI / 2;
plane.position.setY(-25);

export default plane;