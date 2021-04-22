
/*
const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;
*/

//var mouseX, mouseY;

export function setupInput() {
    //canvas.addEventListener('mousemove', updateMousePos)

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    //warrior.setupInput(KEY_UP_ARROW, KEY_LEFT_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW);
}

/*
function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}
*/

export function setMovementProp(keyCode, obj, val) {
    if(keyCode == obj.movement.left.key) {
        obj.movement.left.pressed = val;
    }
    if(keyCode == obj.movement.right.key) {
        obj.movement.right.pressed = val;
    }
    if(keyCode == obj.movement.up.key) {
        obj.movement.up.pressed = val;
    }
    if(keyCode == obj.movement.down.key) {
        obj.movement.down.pressed = val;
    }

}
export function keyPressed(evt) {
    console.log("PRESSED: " + evt.keyCode)
    //setMovementProp(evt.keyCode, warrior, true)

    // Space bar - show debug info
    if(evt.keyCode == 32) {
        //console.log(JSON.stringify(warrior.movement));
    }
}
export function keyReleased(evt) {
    console.log("RELEASED:" + evt.keyCode)
    //setMovementProp(evt.keyCode, warrior, false)
}