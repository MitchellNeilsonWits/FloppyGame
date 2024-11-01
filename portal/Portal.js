/**
 * File: Portal.js
 * 
 * Description:
 *  Portal object for end-of-level portal platform
 */

import { Object3D } from "three";
import physic from "../engine/physic";
import { createRigidBodyFixed } from "../engine/function";

class Portal extends Object3D {
    // Setup display to go to next level and other important variables
    constructor(controls, portal, level) {
        super();
        this.controls = controls;
        this.portal = portal;
        this.level_controller = level.level_controller;

        this.initPhysic();
        this.initVisual();

        this.next_level = document.createElement('div');
        this.next_level.style.position = 'absolute';
        this.next_level.style.top = '50%';
        this.next_level.style.left = '50%';
        this.next_level.style.transform = 'translate(-50%, -50%)';
        this.next_level.style.padding = '20px';
        this.next_level.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        this.next_level.style.color = 'white';
        this.next_level.style.fontSize = '24px';
        this.next_level.style.textAlign = 'center';
        this.next_level.style.zIndex = '4';
        this.next_level.innerHTML = '<p>Press E to go to the next level</p>';


        this.message_shown = false;
        this.change_level = this.change_level_unbound.bind(this);
    }

    // Function to change to the next level on keypress
    change_level_unbound(event) {
        if (event.key === "e" || event.key === "E") {
            this.level_controller.change_level(this.level_controller._current_level + 1);
            this.hide_message();
        }
    }

    // Function to show message
    show_message() {
        this.message_shown = true;
        document.body.appendChild(this.next_level);

        window.addEventListener('keypress', this.change_level)
    }

    // Function to hide message
    hide_message() {
        this.message_shown = false;
        document.body.removeChild(this.next_level);
    
        window.removeEventListener('keypress', this.change_level)
    }

    // Function to initialize the physic of the portal
    initPhysic() {
        const { rigidBody, collider } = createRigidBodyFixed(this.portal, physic);
        this.rigidBody = rigidBody;
        this.collider = collider;
    }

    // Function to initialze the visual of the portal
    initVisual() {
        this.portal.castShadow = true;
        this.add(this.portal);
    }

    // Function to update the display to the user
    update() {
        
        // Check if the user is on the platform
        let on_platform = false;
        physic.contactPair(this.controls._target.collider, this.collider, (manifold, flipped) => {
        
            // Now check that the normal of contact is directly up
            const normal = manifold.normal();
            const rounded = {
                x: Math.abs(Math.round(normal.x)),
                y: Math.abs(Math.round(normal.y)),
                z: Math.abs(Math.round(normal.z)),
            }

            if (rounded.x == 0 && rounded.y == 1 && rounded.z == 0) {
                // If on the platform, show message and test for interaction
                on_platform = true;
                if (!this.message_shown) {
                    this.show_message();
                }
                return;
            }                
        })

        // If not on the platform, hide message
        if (!on_platform) {
            if (this.message_shown) {
                this.hide_message();
            }
        }
        
    }
}

export default Portal;