import DynamicObject from './DynamicObject';

export default class Ship extends DynamicObject {
    constructor(props) {
        super(props);
        this.hp = props.hp || 100;
        this.shotingSpeed = props.shotingSpeed || 1;
        this.weapon = props.weapon || null;
    }

    move(angle, dt) {
        super.move(angle, dt);
    }

    moveForward(dt) {
        this.move(this.angle, dt);
    }

    shot() {            
        this.weapon.shot(this.positionX, this.positionY, this.angle);
    } 
}