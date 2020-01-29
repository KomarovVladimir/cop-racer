let keyStates = { 
    up: false,
    right: false,
    down: false,
    left: false,
    space: false
};

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 87 || e.keyCode === 38) {
        keyStates.up = true;
    }
    if (e.keyCode === 65 || e.keyCode === 37) {
        keyStates.left = true;
    }
    if (e.keyCode === 83 || e.keyCode === 40) {
        keyStates.down = true;
    }
    if (e.keyCode === 68 || e.keyCode === 39) {
        keyStates.right = true;
    }
    if (e.keyCode === 32) {
        keyStates.space = true;
    }
}, true);
    
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 87 || e.keyCode === 38) {
        keyStates.up = false;
    }
    if (e.keyCode === 65 || e.keyCode === 37) {
        keyStates.left = false;
    }
    if (e.keyCode === 83 || e.keyCode === 40) {
        keyStates.down = false;
    }
    if (e.keyCode === 68 || e.keyCode === 39) {
        keyStates.right = false;
    }
    if (e.keyCode === 32) {
        keyStates.space = false;
    }
}, true);

export default keyStates;