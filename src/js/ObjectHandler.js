import gameObjects from './gameObjects';

class ObjectHandler {
    createObject(Class, props) {
        let obj = new Class(props);
        this.addObject(obj);
        return obj;
    }

    addObject(obj) {
        gameObjects.push(obj);
    }

    getObject(n) {
        return gameObjects[n];
    }

    getObjects() {
        return gameObjects;
    }
}

export default new ObjectHandler();