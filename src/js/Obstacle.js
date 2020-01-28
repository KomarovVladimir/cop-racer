import Object from "./Object";

export default class Obstacle extends Object {
    constructor(props) {
        super(props);
        this.speed = 12;
    }

    update(dt) {
        this.posX -= this.speed;
    }
}