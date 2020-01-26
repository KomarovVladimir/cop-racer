import keyStates from "./keyStates";
import gameMedia from "./gameMedia";
import gameObjects from "./gameObjects.js";
import Objecthandler from "./ObjectHandler";
import Player from "./Player";
import Obstacle from "./Obstacle";

export default class Scene {
    init() {
        this.player = Objecthandler.createObject(Player, {
            image: gameMedia.player,
            tileHeight: 32,
            tileWidth: 48
        });

        console.log(gameObjects);
    }

    render() {
        for (let object of gameObjects) {
            object.render();
        }
    }
}