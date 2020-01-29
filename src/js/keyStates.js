let keyStates = {
    space: false
};

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) {
        keyStates.space = true;
    }
}, true);
    
window.addEventListener("keyup", (e) => {
    if (e.keyCode === 32) {
        keyStates.space = false;
    }
}, true);

export default keyStates;