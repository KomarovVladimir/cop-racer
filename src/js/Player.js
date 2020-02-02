import keyStates from "./keyStates";
import Object from "./Object";

export default class Player extends Object {
    constructor(props) {
        super(props);
        this.upForce = 0;
        this.downForce = 1;
        this.jumped = false;
    }

    update(dt) {
        super.update(dt);

        if(keyStates.space && !this.jumped) {
            this.jumped = true;
            this.upForce = 14;
            this.posY -= this.upForce;
            this.currentTileRow = 1;
        } else if(this.jumped) {
            this.upForce -= this.downForce;
            this.posY -= this.upForce;
            if (this.posY > this.baseY) {
                this.posY = this.baseY;
                this.jumped = false;
                this.currentTileRow = 0;
            }
        }
    }
}

//flappy bird version lol

// if(keyStates.space) {
//     this.jumped = true;
//     this.upForce = 8;
//     this.posY -= this.upForce;
// } else {
//     this.upForce -= this.downForce;
//     this.posY -= this.upForce;
//     if (this.posY > this.baseY) {
//         this.posY = this.baseY;
//         this.jumped = false;
//     }
// }