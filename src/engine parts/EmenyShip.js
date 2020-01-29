import Ship from './Ship';
import Behavior from './Behavior';

export default class EmenyShip extends Ship {
    constructor(props) {
        super(props);

        this.pause = this.pause.bind(this);

        this.behavior = new Behavior();
    }
    
    //ENEMY SHIP LIGIC AND ACTIONS
    pause() {}
 
    //SET BEHAVIOR
    setBehavior(actions) {
        this.behavior.setActions(actions);
    }

    doCurrentAction() {
        this.behavior.doCurrentAction();
    }
}