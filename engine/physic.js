/**
 * File: physic.js
 * 
 * Description:
 *  Main file to export the Rapier world used in many files
 */

import Rapier from '@dimforge/rapier3d-compat'
await Rapier.init()

export default new Rapier.World({ x: 0, y: -9, z: 0 })