import keyStates from "./keyStates";
import gameMedia from "./gameMedia";
import Player from "./Player";
import Obstacle from "./Obstacle";

let gameObjects = [];

const sceneStates = {
    on: "ON",
    lose: "LOSE",
    pending: "PENDING"
}

const obstacleSpeed = 12;

const score = document.getElementById("score");
const topScore = document.getElementById("top-score");

export default class Scene {
    constructor(props) {
        this.ctx = props.ctx;
        this.requestId = null;
        this.fps = 120;
        this.tps = 12;
        this.lastTime = null;
        this.lastTileTime = null;
        this.frameDelay = Math.floor(1000 / this.fps); 
        this.tileDelay =  Math.floor(1000 / this.tps);
        this.sceneStartTime = null;
        this.sceneState = sceneStates.pending;
        this.score = 0;
        this.scoreDelay = 60;
        this.lastScore = null;
        this.obstacleDelay = 800;
        this.lastObstacle = 0;
        this.loseTime = null;
        this.restartDelay = 1000;
        this.topScore = 0;

        this.frame = this.frame.bind(this);
    }

    init() {
        gameObjects = [];
        this.score = 0;
        this.sceneState = sceneStates.pending;

        this.player = this.createObject(Player, {
            image: gameMedia.player,
            tileHeight: 32,
            tileWidth: 48,
            posX: 32,
            posY: 168
        });
    }

    async start() {
        await this.init();
        this.sceneState = sceneStates.pending;
        this.startSceneLoop();
        console.log('Scene started.');
    }

    startSceneLoop() {
        this.last = this.lastTileTime = performance.now();
        this.sceneStartTime = performance.now();
        this.requestId = requestAnimationFrame(this.frame);
    }

    update(dt) {
        // this.keyHandler(dt);
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
        this.ctx.drawImage(gameMedia.road, 0, 192);
    }

    frame() {
        const currentTime = performance.now();
        let dt = ~~(currentTime - this.lastTime);

        if (dt < this.frameDelay) {
            this.requestId = requestAnimationFrame(this.frame);
        } else {
            switch (this.sceneState) {
                case "PENDING": 
                    this.render();
                    if (keyStates.space) {
                        this.sceneState = sceneStates.on;
                        this.obstacleDelay += 2000;
                        this.lastObstacle = currentTime;
                    }
                    break;
                case "ON":
                    if (!this.checkCollisions()) {
                        if ( currentTime - this.lastObstacle >= this.obstacleDelay) {
                            this.lastObstacle = currentTime;
                            this.obstacleDelay = 600 + Math.floor(Math.random() * 400 + 200);
                            this.createObstacle();
                            this.clearObstacles();
                        }
                        if (currentTime - this.lastScore >= this.scoreDelay) {
                            this.lastScore = currentTime;
                            this.score++;
                            score.textContent = this.score;
                        }
            
                        this.update(dt);
                        // this.refreshTiles(gameObjects);
                        
                        this.render();
                    } else {
                        this.sceneState = sceneStates.lose;
                        this.loseTime = currentTime; 
                        if (this.topScore < this.score) {
                            this.topScore = this.score;
                        }
                        topScore.textContent = this.topScore;
                    }
                    break;
                case "LOSE": 
                    if (currentTime - this.loseTime >= this.restartDelay && keyStates.space) {
                        this.init();
                    }
                    break;
            }
            
            this.lastTime = performance.now();
            this.requestId = requestAnimationFrame(this.frame);
        }
    }

    createObject(Class, props) {
        let obj = new Class(props);
        gameObjects.push(obj);
        return obj;
    }

    createObstacle() {
        const random = Math.random() * 100;
        if (random > 90) {
            this.createObject(Obstacle, {
                type: "OBSTACLE",
                image: gameMedia.bigObstacle,
                speed: obstacleSpeed,
                tileHeight: 32,
                tileWidth: 90,
                posX: 640,
                posY: 168
            });
        } else if (random > 80) {
            this.createObject(Obstacle, {
                type: "OBSTACLE",
                image: gameMedia.mediumObstacle,
                speed: obstacleSpeed,
                tileHeight: 32,
                tileWidth: 32,
                posX: 640,
                posY: 64
            });
        } else if (random > 75) {
            this.createObject(Obstacle, {
                type: "OBSTACLE",
                image: gameMedia.mediumObstacle,
                speed: obstacleSpeed,
                tileHeight: 32,
                tileWidth: 32,
                posX: 640,
                posY: 128
            });
        } else if (random > 70) {
            this.createObject(Obstacle, {
                type: "OBSTACLE",
                image: gameMedia.mediumObstacle,
                speed: obstacleSpeed,
                tileHeight: 32,
                tileWidth: 32,
                posX: 640,
                posY: 168
            });
        } else {
            this.createObject(Obstacle, {
                type: "OBSTACLE",
                image: gameMedia.smallObstacle,
                speed: obstacleSpeed,
                tileHeight: 44,
                tileWidth: 28,
                posX: 640,
                posY: 156
            });
        }
    }

    checkCollisions() {
        for (let obj of gameObjects) {
            if (obj.type === "OBSTACLE") {
                if (
                    this.player.rightBorder >= obj.posX &&
                    this.player.posX + 12 <= obj.rightBorder && 
                    this.player.bottomBorder - this.player.upForce >= obj.posY && 
                    this.player.posY <= obj.bottomBorder
                ) { 
                    return true;
                }
            }
        }
    }

    clearObstacles() {
        const filteredObjects = gameObjects.filter(obj => obj.posX > -obj.tileWidth);
        gameObjects = [...filteredObjects];
    }
}