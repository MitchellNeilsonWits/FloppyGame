import { Object3D } from "three";
import physic from "../engine/physic";
import { createRigidBodyFixed } from "../engine/function";
import credits from "../credits/Credits";
import hud from "../hud/Hud";
import music_controller from "../music/MusicController";

class FinalePlatform extends Object3D {
    constructor(controls, platform, level) {
        super();
        this.controls = controls;
        this.platform = platform;
        // console.log("LEVEL IN PORTAL:",level)
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
        this.next_level.innerHTML = '<p>Press E to switch off your motherboard</p>';


        this.message_shown = false;
        this.change_level = this.change_level_unbound.bind(this);
    }

    change_level_unbound(event) {
        if (event.key === "e" || event.key === "E") {
            this.hide_message();
            credits.show_credits();
            this.level_controller.clear_level();
            hud.remove_hud();
            music_controller.pause_music();
            music_controller.load_music('sounds/TitleSong.mp3');
            music_controller.play_music();
            music_controller.change_volume(0.5);
        }
    }

    show_message() {
        this.message_shown = true;
        document.body.appendChild(this.next_level);

        window.addEventListener('keypress', this.change_level)
    }

    hide_message() {
        this.message_shown = false;
        document.body.removeChild(this.next_level);
    
        window.removeEventListener('keypress', this.change_level)
    }

    initPhysic() {
        const { rigidBody, collider } = createRigidBodyFixed(this.platform, physic);
        this.rigidBody = rigidBody;
        this.collider = collider;
    }

    initVisual() {
        // this.platform.position.set(0, 0, 0);
        this.platform.castShadow = true;
        this.add(this.platform);
    }

    update() {
        
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

export default FinalePlatform;