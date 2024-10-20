import { get_cartesian_angle_from_rotation } from "../common/Angle";
import interactableObject from "../engine/interactableObject";
import * as THREE from 'three';
import physic from "../engine/physic";
import { ActiveCollisionTypes } from "@dimforge/rapier3d-compat";
import { create_collider_for_disk } from "../engine/function";
import addOneTimeEventListener from "../common/SingleUseListener";
import hud from "../hud/Hud";
import './npc.css'

class InteractableNPC extends interactableObject {
    constructor(interaction_display, object, textlines) {
        const distance_threshold = 1.5;
        const interaction_trigger = 'npc';
        super(interaction_display, object, distance_threshold, interaction_trigger);
        this.start_interaction = this.start_interaction_static.bind(this);
        this.end_interaction = this.end_interaction_static.bind(this);
        this.use_object = this.use_object_static.bind(this);

        this.line_being_read = 0;
        this.lines = textlines;
        this.update_line = this.update_line_static.bind(this);

        // Root div
        const npcLinesRoot = document.createElement('div');
        npcLinesRoot.id = 'npc-lines-root';

        // NPC image container
        const npcLinesImgContainer = document.createElement('div');
        npcLinesImgContainer.className = 'npc-lines-img-container';

        const npcLinesContentImg = document.createElement('img');
        npcLinesContentImg.className = 'npc-lines-content-img';
        npcLinesContentImg.src = 'npc/lines_face.png';

        // Append image to image container
        npcLinesImgContainer.append(npcLinesContentImg);

        // NPC lines container
        const npcLinesContainer = document.createElement('div');
        npcLinesContainer.className = 'npc-lines-container';

        const npcLinesContent = document.createElement('div');
        npcLinesContent.className = 'npc-lines-content';

        const npcLinesContentHeader = document.createElement('h2');
        npcLinesContentHeader.className = 'npc-lines-content-header';
        npcLinesContentHeader.textContent = 'N.P.C';

        const npcLinesContentSubcontainer = document.createElement('div');
        npcLinesContentSubcontainer.className = 'npc-lines-content-subcontainer';

        const npcLinesContentText = document.createElement('p');
        npcLinesContentText.className = 'npc-lines-content-text';
        npcLinesContentText.textContent = 'Welcome to the SECOND simulation!';

        // Append text to subcontainer and subcontainer to content
        npcLinesContentSubcontainer.append(npcLinesContentText);
        npcLinesContent.append(npcLinesContentHeader, npcLinesContentSubcontainer);
        npcLinesContainer.append(npcLinesContent);

        // Press E next container
        const npcLinesPressENext = document.createElement('div');
        npcLinesPressENext.className = 'npc-lines-press-e-next';

        const npcLinesPressESubcontainer = document.createElement('div');
        npcLinesPressESubcontainer.className = 'npc-lines-press-e-subcontainer';

        const npcLinesE = document.createElement('h2');
        npcLinesE.className = 'npc-lines-e';
        npcLinesE.textContent = 'Press any key';

        const npcLinesArrow = document.createElement('img');
        npcLinesArrow.className = 'npc-lines-arrow';
        npcLinesArrow.src = 'npc/arrow_right.svg';

        // Append "Press E" and arrow to subcontainer, and then to the main container
        npcLinesPressESubcontainer.append(npcLinesE, npcLinesArrow);
        npcLinesPressENext.append(npcLinesPressESubcontainer);

        // Append all parts to the root
        npcLinesRoot.append(npcLinesImgContainer, npcLinesContainer, npcLinesPressENext);
    
        this.npc_lines_root = npcLinesRoot;
        this.npc_lines_text = npcLinesContentText;
    }
    
    use_object_static(controls, object_to_use, level) {
        
    }

    update_line_static(event, controls) {
        // if (event.keyCode === 69 || event.keyCode === 101) {
            this.line_being_read = this.line_being_read + 1;
            
            if (this.line_being_read === this.lines.length) {
                // window.removeEventListener('keypress',this)
                controls._currently_reading_npc = false;
                document.body.removeChild(this.npc_lines_root);

                

                return;
            }

            this.npc_lines_text.innerHTML = this.lines[this.line_being_read];        
            addOneTimeEventListener(window, 'keypress', (event) => this.update_line(event, controls));

        // }
    }
    
    start_interaction_static(controls, object_interacted_with, level) {
        this.line_being_read = 0;

        addOneTimeEventListener(window, 'keypress', (event) => this.update_line(event, controls));
        const npc = object_interacted_with.object;
        npc.state_machine.set_state('idle');
        npc.hide_marker();

        document.body.appendChild(this.npc_lines_root);
        this.npc_lines_text.innerHTML = this.lines[this.line_being_read];
        controls._currently_reading_npc = true;
    }

    end_interaction_static(controls, object_to_drop, level) {
        
    }
}

export default InteractableNPC