import Object from "./Object";

export default class Obstacle extends Object {
    constructor(props) {
        super(props);
        this.speed = props.speed;
    }

    update(dt) {
        super.update(dt);
        this.posX -= this.speed;
    }
}