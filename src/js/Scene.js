import keyStates from "./keyStates";
import gameMedia from "./gameMedia";
import gameObjects from "./gameObjects.js";
import objectHandler from "./objectHandler";
import Player from "./Player";
import Obstacle from "./Obstacle";

export default class Scene {
    constructor(props) {
        this.ctx = props.ctx;
        this.requestId = null;
        this.fps = 60;
        this.tps = 12;
        this.lastTime = null;
        this.lastTileTime = null;
        this.frameDelay = Math.floor(1000 / this.fps);
        this.tileDelay =  Math.floor(1000 / this.tps);

        this.frame = this.frame.bind(this);
    }

    init() {
        this.player = objectHandler.createObject(Player, {
            image: gameMedia.player,
            tileHeight: 32,
            tileWidth: 48,
            posX: 32,
            posY: 176
        });
    }

    async start() {
        await this.init();
        console.log('Game started.')

        this.startSceneLoop();
    }

    startSceneLoop() {
        this.last = this.lastTileTime = performance.now();
        this.requestId = requestAnimationFrame(this.frame);
    }

    update(dt) {
        this.keyHandler(dt);
        for (let obj of gameObjects) {
            if (obj.update) {
                obj.update(dt);
            }
        }
    }

    refreshTiles(objects) {
        let dt = performance.now() - this.lastTileTime;
        if (dt > this.tileDelay) {
            for (let obj of objects) {
                obj.nextTile();
            }
            this.lastTileTime = performance.now();
        }
    }

    keyHandler(dt) {
        if (keyStates.space) {
        }
    }

    render() {
        this.drawBackground();
        for (let obj of gameObjects) {
            obj.draw(this.ctx);
        }
    }

    drawBackground() {
        let gradient = this.ctx.createLinearGradient(0, 120, 0, 0);
        gradient.addColorStop(0, "rgb(125, 100, 190)");
        gradient.addColorStop(1, "rgb(155, 60, 160, 160)");
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 640, 240);
    }

    frame() {
        let dt = ~~(performance.now() - this.lastTime);
        
        if (dt < this.frameDelay) {
            this.requestId = requestAnimationFrame(this.frame);
        } else {
            this.update(dt);
            // this.refreshTiles(gameObjects);
            
            this.render();
            
            this.lastTime = performance.now();
            this.requestId = requestAnimationFrame(this.frame);
        }
    }
}