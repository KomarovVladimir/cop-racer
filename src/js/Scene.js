import keyStates from "./keyStates";
import gameMedia from "./gameMedia";
import Player from "./Player";
import Obstacle from "./Obstacle";
import DinamicBackground from "./DinamicBackground";
import Ticker from "./Ticker";

let vars;

const sceneStates = {
    on: "ON",
    lose: "LOSE",
    pending: "PENDING"
}

const score = document.getElementById("score");
const topScore = document.getElementById("top-score");

export default class Scene {
    constructor(props) {
        this.ctx = props.ctx;
        this.gameObjects = [];
        this.requestId = null;
        this.fps = 120;
        this.tps = 12;
        this.lastTime = null;
        this.lastTileTime = null;
        this.frameDelay = Math.floor(1000 / this.fps); 
        this.tileDelay =  Math.floor(1000 / this.tps);
        this.sceneStartTime = null;
        this.sceneState = sceneStates.pending;
        this.obstacleSpeed = 12;
        // this.obstacleDelay = 800;
        // this.lastObstacle = 0;
        this.loseTime = null;
        this.restartDelay = 1000;
        this.score = 0;
        this.scoreDelay = 60;
        this.lastScore = null;
        this.topScore = 0;

        this.tickers = [];

        this.frame = this.frame.bind(this);
    }

    async init() {
        vars = await import("./variables");

        this.gameObjects = [];
        this.score = 0;
        this.sceneState = sceneStates.pending;
        // this.obstacleSpeed = 12;

        this.player = this.createObject(Player, vars.playerProps);

        this.road = new DinamicBackground(vars.roadProps);

        this.tickers.push(new Ticker(800, () => {
            this.createObstacle();
            this.clearObstacles();
        }, null, 4000));
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

    update(currentTime, dt) {
        // if ( currentTime - this.lastObstacle >= this.obstacleDelay) {
        //     this.lastObstacle = currentTime;
        //     this.obstacleDelay = 600 + Math.floor(Math.random() * 400 + 200);
        //     this.createObstacle();
        //     this.clearObstacles();
        // }
        
        if (currentTime - this.lastScore >= this.scoreDelay) {
            this.lastScore = currentTime;
            this.score++;
            score.textContent = this.score;
        }

        for (let obj of this.gameObjects) {
            if (obj.update) {
                obj.update(dt);
            }
        }

        // console.log(this.tickers)
        for (let ticker of this.tickers) {
            ticker.update();
        }

        this.road.update(dt);

        if (this.score > 1400) {
            this.obstacleSpeed = 15;
        } else if (this.score > 700) {
            this.obstacleSpeed = 14; 
        }

        this.refreshTiles(this.gameObjects);
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
        this.road.draw(this.ctx);
        for (let obj of this.gameObjects) {
            obj.draw(this.ctx);
        }
    }

    drawBackground() {
        let gradient = this.ctx.createLinearGradient(0, 120, 0, 0);
        gradient.addColorStop(0, "rgb(125, 100, 190)");
        gradient.addColorStop(1, "rgb(155, 60, 160, 160)");
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, 640, 480);
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
                        this.update(currentTime, dt);
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
        this.gameObjects.push(obj);
        return obj;
    }

    createObstacle() {
        const random = Math.random() * 100;
        if (random > 90) {
            this.createObject(Obstacle, vars.bigObstacleProps);
        } else if (random > 80) {
            this.createObject(Obstacle, vars.mediumObstacleProps);
        } else if (random > 75) {
            this.createObject(Obstacle, vars.flyingObstacle1Props);
        } else if (random > 70) {
            this.createObject(Obstacle, vars.flyingObstacle2Props);
        } else {
            this.createObject(Obstacle, vars.obstacleProps);
        }
    }

    checkCollisions() {
        //magic numbers are coming!
        for (let obj of this.gameObjects) {
            if (obj.type === "OBSTACLE") {
                if (
                    this.player.rightBorder >= obj.posX &&
                    this.player.posX + 12 <= obj.rightBorder && 
                    this.player.bottomBorder - 6 - this.player.upForce >= obj.posY && 
                    this.player.posY + 6 <= obj.bottomBorder
                ) { 
                    return true;
                }
            }
        }
    }

    clearObstacles() {
        const filteredObjects = this.gameObjects.filter(obj => obj.posX > -obj.tileWidth);
        this.gameObjects = [...filteredObjects];
    }
}