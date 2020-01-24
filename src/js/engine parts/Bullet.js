import DynamicObject from './DynamicObject';
import ObjectHandler from './ObjectHandler';

const objectHandler = new ObjectHandler();

export default class Bullet extends DynamicObject {
    constructor (props) {
        super(props);
        this.angle = props.angle;
        this.damage = props.damage || 0;
        this.speed = props.speed || 0;
    }

    update(dt) {
        this.move(this.angle, dt);
        // this.checkBorders()
    }

    // checkBorders() {
    //     if (this.positionY + this.tileHeight <= 0) {
    //         objectHandler.deleteObject(this);
    //     }
    //     if (this.positionY + this.tileHeight > 0) {
    //         objectHandler.deleteObject(this);
    //     }
    //     if (this.positionY + this.tileHeight <= 0) {
    //         objectHandler.deleteObject(this);
    //     }
    //     if (this.positionY + this.tileHeight <= 0) {
    //         objectHandler.deleteObject(this);
    //     }
    // }
}