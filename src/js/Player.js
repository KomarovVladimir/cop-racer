import keyStates from "./keyStates";
import Object from "./Object";

export default class Player extends Object {
    constructor(props) {
        super(props);
        this.upForce = 0;
        this.downForce = 1.5;
        this.jumped = false;
    }

    update(dt) {
        super.update(dt);

        if(keyStates.space && !this.jumped) {
            this.jumped = true;
            this.upForce = 20;
            this.posY -= this.upForce;
        } else if(this.jumped) {
            this.upForce -= this.downForce;
            this.posY -= this.upForce;
            if (this.posY > 176) {
                this.posY = 176;
                this.jumped = false;
            }
        }
    }
}