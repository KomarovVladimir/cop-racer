import MediaHandler from "./MediaHandler";
import Scene from "./Scene";
const mediaHandler = new MediaHandler();

const imageSources = [
    "./images/player.png",
    "./images/road.png",
    "./images/smallObstacle.png",
    "./images/mediumObstacle.png",
    "./images/bigObstacle.png",
    "./images/road.png",
    "./images/bin.png",
    "./images/road.png"
];

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.scene = new Scene({ctx: this.ctx});
    }

    async init() {
        mediaHandler.setImageSources(imageSources);

        console.log("Image preloading.");
        await mediaHandler.preloadAllImages();
        console.log("Images preloading done.");
    }

    async start() {
        await this.init();
        this.scene.start();
    }  
}