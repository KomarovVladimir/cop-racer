import Object from "./Object";

class Decoration extends Object {
    constructor({  }) {

    }

    update(dt) {
        super.update(dt);
        this.posX -= this.speed;
    }
}

export default Decoration;
