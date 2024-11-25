import gamepad_controller from "../gamepad/GamePadController";

export default class CharacterGamepadInputController {
    constructor() {

        this._keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            space: false,
            shift: false,
            drop: false,
            use: false,
            interact: false,
            unload_disk: false,
            crouch: false,
            right_click: false,
            left_click: false
        };

        this._camera_movement = {
            x: 0,
            y: 0
        }

        this._mouse_zoom = null;

        gamepad_controller.add_button_callback(this.updateControllerButton.bind(this));
        gamepad_controller.add_stick_callback(this.updateStick.bind(this));
        
    }

    

      manually_reset_keys() {
        this._keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            space: false,
            shift: false,
            drop: false,
            use: false,
            interact: false,
            unload_disk: false,
            crouch: false,
            right_click: false,
            left_click: false
        };
        this._mouse_zoom = null;
      }

    updateControllerButton(index, value) {
        
        // console.log(`BUTTON ${index}: VALUE = ${value}`);
        if (value > 0) {
            switch (index) {
                case 0:
                    this._keys.space = true;
                    break;
                case 1:
                    this._keys.unload_disk = true;
                    break;
                case 3:
                    this._keys.interact = true;
                    break;
                case 6:
                    this._keys.drop = true;
                    break;    
                case 7:
                    this._keys.use = true;
                    break;
                case 8:
                    
                    break;
                case 9:
                    
                    break;
                case 10:
                    this._mouse_zoom = "zoom_out";
                    break;
                case 11:
                    this._mouse_zoom = "zoom_in";
                    break;
                case 12:
                    this._keys.space = true;
                    break;
                case 13:
                    this._keys.crouch = true;
                    break;
                
                case 14:
                    
                    break;
                case 15:
                    
                    break;

                default:
                    break;
            }
        }
    }
    
    

    updateStick(stick_side, leftRightAxis, upDownAxis) {
        const multiplier = 25;
        const stickLeftRight = leftRightAxis * multiplier;
        const stickUpDown = upDownAxis * multiplier;
        
        if (stick_side === "left") {
            if (stickUpDown <= -1) {
                this._keys.forward = true;
            } else if (stickUpDown >= 1) {
                this._keys.backward = true;
            }

            if (stickLeftRight <= -1) {
                this._keys.left = true;
            } else if (stickLeftRight >= 1) {
                this._keys.right = true;
            }

            let run_val = Math.sqrt(stickUpDown**2 + stickLeftRight**2);
            
            if (run_val >= 20) {
                this._keys.shift = true;
            }
        } else if (stick_side === "right") {
            if (Math.abs(stickLeftRight) > 1) {
                this._camera_movement.x = stickLeftRight*2;
            } else {
                this._camera_movement.x = 0;
            }

            if (Math.abs(stickUpDown) > 1) {
                this._camera_movement.y = stickUpDown*2;
            } else {
                this._camera_movement.y = 0;
            }


        }

    }
    
    

    update() {
            
    }
}
// let controllerIndex = null;



// function handleConnectDisconnect(event, connected) {
//   const controllerAreaNotConnected = document.getElementById(
//     "controller-not-connected-area"
//   );
//   const controllerAreaConnected = document.getElementById(
//     "controller-connected-area"
//   );

//   const gamepad = event.gamepad;
//   console.log(gamepad);

//   if (connected) {
//     controllerIndex = gamepad.index;
//     controllerAreaNotConnected.style.display = "none";
//     controllerAreaConnected.style.display = "block";
//     createButtonLayout(gamepad.buttons);
//     createAxesLayout(gamepad.axes);
//   } else {
//     controllerIndex = null;
//     controllerAreaNotConnected.style.display = "block";
//     controllerAreaConnected.style.display = "none";
//   }
// }

// function createAxesLayout(axes) {
//   const buttonsArea = document.getElementById("buttons");
//   for (let i = 0; i < axes.length; i++) {
//     buttonsArea.innerHTML += `<div id=axis-${i} class='axis'>
//                                  <div class='axis-name'>AXIS ${i}</div>
//                                  <div class='axis-value'>${axes[i].toFixed(
//                                    4
//                                  )}</div>
//                               </div> `;
//   }
// }

// function createButtonLayout(buttons) {
//   const buttonArea = document.getElementById("buttons");
//   buttonArea.innerHTML = "";
//   for (let i = 0; i < buttons.length; i++) {
//     buttonArea.innerHTML += createButtonHtml(i, 0);
//   }
// }

// function createButtonHtml(index, value) {
//   return `<div class="button" id="button-${index}">
//             <svg width="10px" height="50px">
//                 <rect width="10px" height="50px" fill="grey"></rect>
//                 <rect
//                     class="button-meter"
//                     width="10px"
//                     x="0"
//                     y="50"
//                     data-original-y-position="50"
//                     height="50px"
//                     fill="rgb(60, 61, 60)"
//                 ></rect>
//             </svg>
//             <div class='button-text-area'>
//                 <div class="button-name">B${index}</div>
//                 <div class="button-value">${value.toFixed(2)}</div>
//             </div>
//         </div>`;
// }

// function updateButtonOnGrid(index, value) {
//   const buttonArea = document.getElementById(`button-${index}`);
//   const buttonValue = buttonArea.querySelector(".button-value");
//   buttonValue.innerHTML = value.toFixed(2);

//   const buttonMeter = buttonArea.querySelector(".button-meter");
//   const meterHeight = Number(buttonMeter.dataset.originalYPosition);
//   const meterPosition = meterHeight - (meterHeight / 100) * (value * 100);
//   buttonMeter.setAttribute("y", meterPosition);
// }



// function updateAxesGrid(axes) {
//   for (let i = 0; i < axes.length; i++) {
//     const axis = document.querySelector(`#axis-${i} .axis-value`);
//     const value = axes[i];
//     // if (value > 0.06 || value < -0.06) {
//     axis.innerHTML = value.toFixed(4);
//     // }
//   }
// }



// function handleRumble(gamepad) {
//   const rumbleOnButtonPress = document.getElementById("rumble-on-button-press");

//   if (rumbleOnButtonPress.checked) {
//     if (gamepad.buttons.some((button) => button.value > 0)) {
//       gamepad.vibrationActuator.playEffect("dual-rumble", {
//         startDelay: 0,
//         duration: 25,
//         weakMagnitude: 1.0,
//         strongMagnitude: 1.0,
//       });
//     }
//   }
// }

