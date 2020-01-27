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
            tileWidth: 48,
            posX: 32,
            posY: 176
        });
    }

    render(ctx) {
        this.drawBackground(ctx);
        for (let object of gameObjects) {
            object.draw(ctx);
        }
    }

    drawBackground(ctx) {
        let gradient = ctx.createLinearGradient(0, 120, 0, 0);
        gradient.addColorStop(0, "rgb(125, 100, 190)");
        gradient.addColorStop(1, "rgb(155, 60, 160, 160)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 640, 240);
    }
}