function addOneTimeEventListener(element, event, callback) {
    // const wrapper = e => {
    //     try {callback(e)} finally {
    //         element.removeEventListener(event, wrapper);
    //     };
    // }
    let handler = (e) => {
        callback(e);
        element.removeEventListener(event, handler);
    }
    element.addEventListener(event, handler);
}

export default addOneTimeEventListener