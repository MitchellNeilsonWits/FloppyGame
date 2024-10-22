import * as THREE from 'three';

class LevelSelectRender {
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
            // this.levelSelectScreen.style.display = 'none'; // Hide initially

            // Instruction popup
            this.levelSelectScreen.innerHTML = `
                <p>Use arrow keys to select a level:</p>
                <div id="level-options" style="display: flex; flex-direction: column;">
                    <div id="level1" style="margin: 10px; padding: 10px;">> Level 1</div>
                    <div id="level2" style="margin: 10px; padding: 10px;">Level 2</div>
                    <div id="level3" style="margin: 10px; padding: 10px;">Level 3</div>
                </div>
                <p>Press Enter to select the level</p>
            `;
            // document.body.appendChild(this.levelSelectScreen);
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
    }

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
        if (this.selectedLevel < 3) {
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
