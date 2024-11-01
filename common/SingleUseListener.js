/**
 * File: SingleUseListener.js
 * 
 * Description:
 *  Gives functions to add a one time event listener so that the listener only activates once
 */

// Function to create a one time event listener on a certain "element", for a certain "event" and activating some "callback" function
function addOneTimeEventListener(element, event, callback) {
    let handler = (e) => {
        callback(e);
        element.removeEventListener(event, handler);
    }
    element.addEventListener(event, handler);
}

export default addOneTimeEventListener