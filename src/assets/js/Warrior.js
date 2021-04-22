
const MOVE_SPEED = 7;

class warriorClass { 
    constructor() {

        this.x = 0;
        this.y = 0;
        this.name = "Untitled"
        this.myWarriorPic;
        this.keyCount = 0;

        this.movement = {
            up: {key: undefined, pressed: false},
            left: {key: undefined, pressed: false},
            right: {key: undefined, pressed: false},
            down: {key: undefined, pressed: false},
        }
    }

    setupInput (up, left, right, down) {
        this.movement.up.key = up;
        this.movement.left.key = left;
        this.movement.right.key = right;
        this.movement.down.key = down;
    }

    reset (image, name, x,y) {
        this.name = name;
        this.myWarriorPic = image;

        this.x = x;
        this.y = y;
        console.log("No player start found for warrior.name="+this.name)
    }

    move () {

        var newPosition = {x: this.x, y: this.y};
        if(this.movement.up.pressed) {
            newPosition.y -= MOVE_SPEED;
        }
        if(this.movement.down.pressed) {
            newPosition.y += MOVE_SPEED;
        }
        if(this.movement.left.pressed) {
            newPosition.x -= MOVE_SPEED;
        }
        if(this.movement.right.pressed) {
            newPosition.x += MOVE_SPEED;
        }

        if(warriorCanMove(warrior,newPosition)){
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }

    draw () {
        drawBitmapWithRotation(this.myWarriorPic, this.x, this.y, 0);
    }
}