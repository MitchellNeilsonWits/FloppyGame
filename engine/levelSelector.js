/**
 * File: levelSelector.js
 * 
 * Description:
 *  Handles level selection console in the lobby level
 */

import * as THREE from 'three';
import gamepad_controller from '../gamepad/GamePadController';
import control_settings from '../control_settings/ControlSettings';

class LevelSelectRender {

    // Initialize important variables
    constructor(character_controller, level, onLevelSelect) {
        this.character_controller = character_controller;
        this.targetObjectName = "lvlSelect"; 
        this.level = level;
        this.proximityThreshold = 7; 
        this.isPlayerNear = false; 
        this.onLevelSelect = onLevelSelect; 
        this.selectedLevel = 1; // Default to the first level
        this.shown_selector = false

        if (!this.levelSelectScreen) {
            // Create level select HTML element
            this.levelSelectScreen = document.createElement('div');
            this.levelSelectScreen.style.position = 'absolute';
            this.levelSelectScreen.style.top = '50%';
            this.levelSelectScreen.style.left = '50%';
            this.levelSelectScreen.style.transform = 'translate(-50%, -50%)';
            this.levelSelectScreen.style.padding = '20px';
            this.levelSelectScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            this.levelSelectScreen.style.color = 'white';
            this.levelSelectScreen.style.fontSize = '24px';
            this.levelSelectScreen.style.textAlign = 'center';
            
            // Instruction popup
            if (control_settings.control_input === "keyboard_and_mouse") {
                this.levelSelectScreen.innerHTML = `
                <p>Use arrow keys to select a level:</p>
                <div id="level-options" style="display: flex; flex-direction: column;">
                    <div id="level1" style="margin: 10px; padding: 10px;">> Level 1</div>
                    <div id="level2" style="margin: 10px; padding: 10px;">Level 2</div>
                    <div id="level3" style="margin: 10px; padding: 10px;">Level 3</div>
                    <div id="level4" style="margin: 10px; padding: 10px;">Finale</div>
                </div>
                <p>Press Enter to select the level</p>
                `;
            } else {
                this.levelSelectScreen.innerHTML = `
                <div style="display:flex;flex-direction:row;gap:0px 2px;align-items:center"><div>Use</div><img src='controller_icons/controller_LB.svg' style="width:25px;height:25px"></img><img src='controller_icons/controller_RB.svg' style="width:25px;height:25px"></img><div>to select the level</div></div>
                <div id="level-options" style="display: flex; flex-direction: column;">
                    <div id="level1" style="margin: 10px; padding: 10px;">> Level 1</div>
                    <div id="level2" style="margin: 10px; padding: 10px;">Level 2</div>
                    <div id="level3" style="margin: 10px; padding: 10px;">Level 3</div>
                    <div id="level4" style="margin: 10px; padding: 10px;">Finale</div>
                </div>
                <div style="display:flex;flex-direction:row;gap:0px 2px;align-items:center"><div>Press</div><img src='controller_icons/controller_A.svg' style="width:25px;height:25px"></img><div>to select the level</div></div>
                `;
            }
            
        }

        // Listen for arrow key navigation
        window.addEventListener('keydown', (event) => {
            if (this.isPlayerNear && this.shown_selector) {
                if (event.key === 'ArrowUp') {
                    this.selectPreviousLevel();
                } else if (event.key === 'ArrowDown') {
                    this.selectNextLevel();
                } else if (event.key === 'Enter') {
                    this.confirmSelection();
                }
            }
        });
        
        // Setup gamepad button listener
        gamepad_controller.add_button_callback(this.handle_gamepad_button.bind(this));

        // Make sure button presses are timed
        this.can_press = true;

    }

    handle_gamepad_button(index, value) {
        if (this.shown_selector) {
            if (value > 0) {
                switch (index) {
                    case 0:
                        if (this.can_press) {
                            this.confirmSelection();
                            setTimeout(() => {
                                this.can_press = true;
                            }, 200);
                        }
                        this.can_press = false;
                        break;
                    case 4:
                        if (this.can_press) {
                            this.selectPreviousLevel();
                            setTimeout(() => {
                                this.can_press = true;
                            }, 200);
                        }
                        this.can_press = false;
                        break;
                    case 5:
                        if (this.can_press) {
                            this.selectNextLevel();
                            setTimeout(() => {
                                this.can_press = true;
                            }, 200);
                        }
                        this.can_press = false;
                        break;
                    default:
                        break;
                }
            }
        }
    }

    reset_screen() {
        if (control_settings.control_input === "keyboard_and_mouse") {
            this.levelSelectScreen.innerHTML = `
            <p>Use arrow keys to select a level:</p>
            <div id="level-options" style="display: flex; flex-direction: column;">
                <div id="level1" style="margin: 10px; padding: 10px;">> Level 1</div>
                <div id="level2" style="margin: 10px; padding: 10px;">Level 2</div>
                <div id="level3" style="margin: 10px; padding: 10px;">Level 3</div>
                <div id="level4" style="margin: 10px; padding: 10px;">Finale</div>
            </div>
            <p>Press Enter to select the level</p>
            `;
        } else {
            this.levelSelectScreen.innerHTML = `
            <div style="display:flex;flex-direction:row;gap:0px 2px;align-items:center"><div>Use</div><img src='controller_icons/controller_LB.svg' style="width:25px;height:25px"></img><img src='controller_icons/controller_RB.svg' style="width:25px;height:25px"></img><div>to select the level</div></div>
            <div id="level-options" style="display: flex; flex-direction: column;">
                <div id="level1" style="margin: 10px; padding: 10px;">> Level 1</div>
                <div id="level2" style="margin: 10px; padding: 10px;">Level 2</div>
                <div id="level3" style="margin: 10px; padding: 10px;">Level 3</div>
                <div id="level4" style="margin: 10px; padding: 10px;">Finale</div>
            </div>
            <div style="display:flex;flex-direction:row;gap:0px 2px;align-items:center"><div>Press</div><img src='controller_icons/controller_A.svg' style="width:25px;height:25px"></img><div>to select the level</div></div>
            `;
        }
    }

    // Update function to show or hide based on character distance
    update() {
        if (this.character_controller._target) {
            const playerPos = this.character_controller._target.position;
            const targetObject = this.level.getObjectByName(this.targetObjectName);

            if (targetObject) {
                const targetPos = targetObject.position.clone();

                // Check proximity
                const distance = playerPos.distanceTo(targetPos);
                
                if (distance < this.proximityThreshold) {
                    if (!this.isPlayerNear) {
                        this.isPlayerNear = true;
                        this.showLevelSelectScreen();
                    }
                } else {
                    if (this.isPlayerNear) {
                        this.isPlayerNear = false;
                        this.hideLevelSelectScreen();
                    }
                }
            }
        }
    }

    selectPreviousLevel() {
        if (this.selectedLevel > 1) {
            this.selectedLevel--;
            console.log(this.selectedLevel);
            this.updateLevelSelection();
        }
    }

    selectNextLevel() {
        if (this.selectedLevel < 4) {
            this.selectedLevel++;
            console.log(this.selectedLevel);
            this.updateLevelSelection();
        }
    }

    updateLevelSelection() {
        // Reset all levels to default
        document.getElementById('level1').innerHTML = 'Level 1';
        document.getElementById('level2').innerHTML = 'Level 2';
        document.getElementById('level3').innerHTML = 'Level 3';
        document.getElementById('level4').innerHTML = 'Finale';

        // Highlight the selected level
        document.getElementById(`level${this.selectedLevel}`).innerHTML = `> Level ${this.selectedLevel}`;
    }

    confirmSelection() {
        this.hideLevelSelectScreen();
        if (this.onLevelSelect) {
            this.onLevelSelect(this.selectedLevel+1);
        }
    }

    showLevelSelectScreen() {
        if (!this.shown_selector) {
            this.reset_screen();
            this.shown_selector = true;
            document.body.appendChild(this.levelSelectScreen);
            // this.levelSelectScreen.style.display = 'block';
            this.updateLevelSelection(); // Show current selection
        }
    }

    hideLevelSelectScreen() {
        if (this.shown_selector) {
            this.shown_selector = false;
            document.body.removeChild(this.levelSelectScreen);
            // this.levelSelectScreen.style.display = 'none';
        }
    }
}

export default LevelSelectRender;
