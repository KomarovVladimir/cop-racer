import DynamicObject from "./DynamicObject";

class DinamicBackground extends DynamicObject {
    constructor(props) {
        super(props);
        this.offset = props.offset || 0;
        this.baseX = this.posX;
    }

    update(dt) {
        super.update(dt);
        if (this.baseX - this.posX >= this.offset) {
            this.posX = this.baseX;
        }
        this.posX -= this.speed;
    }
}

export default DinamicBackground;
