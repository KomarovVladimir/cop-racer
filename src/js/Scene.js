import keyStates from "./keyStates";
import gameMedia from "./gameMedia";
import gameObjects from "./gameObjects.js";
import objectHandler from "./objectHandler";
import Player from "./Player";
import Obstacle from "./Obstacle";

export default class Scene {
    init() {
        this.player = objectHandler.createObject(Player, {
            image: gameMedia.player,
            tileHeight: 32,
            tileWidth: 48
        });
    }

    render(ctx) {
        // console.log(gameObjects);
        for (let object of gameObjects) {
            object.draw(ctx);
        }
    }
}