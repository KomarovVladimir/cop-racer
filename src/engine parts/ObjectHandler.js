import gameObjects from './gameObjects';

export default class ObjectHandler {
    
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

    deleteObject(obj) {
        gameObjects.splice(gameObjects.indexOf(obj), 1);
    }
}