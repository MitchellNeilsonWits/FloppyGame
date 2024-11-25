import control_settings from "../control_settings/ControlSettings";

export function get_input_displays(keyboard_button, gamepad_button, remaining_prompt) {
    const keyboard = `<div>Press ${keyboard_button} ${remaining_prompt}</div>`;
    const gamepad = `<div style="display:flex;flex-direction:row;gap:0px 2px;align-items:center"><div>Press</div><img src='controller_icons/controller_${gamepad_button}.svg' style="width:25px;height:25px"></img><div>${remaining_prompt}</div></div>`;
    return {
        keyboard: keyboard,
        gamepad: gamepad
    }
}

export function get_display(keyboard_button, gamepad_button, remaining_prompt) {
    if (control_settings.control_input === "keyboard_and_mouse") {
        return `<div>Press ${keyboard_button} ${remaining_prompt}</div>`;
    } else {
        return `<div style="display:flex;flex-direction:row;gap:0px 2px;align-items:center"><div>Press</div><img src='controller_icons/controller_${gamepad_button}.svg' style="width:25px;height:25px"></img><div>${remaining_prompt}</div></div>`;
    }
}