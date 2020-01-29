import GameWindow from './GameWindow';
import MediaHandler from './MediaHandler';
import ObjectHandler from './ObjectHandler';
import Player from './Player';
import EmenyShip from './EmenyShip';
import Action from './Action';
import Weapon from './Weapon';
import keyStates from './keyStates';

const mediaHandler = new MediaHandler();
const objectHandler = new ObjectHandler();

export default class GameScene {
    constructor(props) {
        this.name = props.name;
        this.gameWindow = new GameWindow({
            ctx: props.ctx,
            width: 900,
            height: 700,
            // scale: 2
        });
        this.requestId = null;
        this.fps = 60;
        this.tps = 12;
        this.lastTime = null;
        this.lastTileTime = null;
        this.frameDelay = Math.floor(1000 / this.fps);
        this.tileDelay =  Math.floor(1000 / this.tps);
        this.defaultScale = 1;
        this.objects = objectHandler.getObjects();
        this.layers = {
            overlay: [],
            front: [],
            main: [],
            back: [],
            backbround: []
        };
        this.layersArray = [];
        this.backgroundColor = '#111111';

        this.frame = this.frame.bind(this);
    }

    //INITIALIZATION <================================================================================================
    async init() {
        console.log(`Scene "${ this.name }" loading.`);
        console.log('Creating objects.');
        await this.createSceneObjects();
        console.log('Creating objects done.');
        console.log(`Scene "${ this.name }" loaded.`);
    }

    //OBJECT CREATION <================================================================================================
    createSceneObjects() {
        const basicWeapon = new Weapon({
            bulletImage: mediaHandler.getImage('missile'),
            tileWidth: 32,
            tileHeight: 32,
            tilesAmount: 8,
            shotingSpeed: 3,
            bulletSpeed: 350,
            offset: 40,
            // hitboxWidth: 10,
            // hitboxHeight: 10,
            // weaponX: 48,
            // weaponY: 0,
        });

        this.player = objectHandler.createObject(Player, {
            hp: 100,
            speed: 200,
            turnSpeed: 5,
            image: mediaHandler.getImage('ship'),
            tilesAmount: 2,
            tileWidth: 128,
            tileHeight: 128,
            weapon: basicWeapon,
            hitboxOffsetX: 16,
            hitboxOffsetY: 16,
            hitboxWidth: 32,
            hitboxHeight: 32,
        });
        this.player.setPosition(this.gameWindow.width / 2 - this.player.tileWidth / 2, this.gameWindow.height / 2 - this.player.tileHeight / 2);
        this.pushToLayer(this.player, 'main');
        console.log(this.player);
    }

    //sets a render layer
    pushToLayer(obj, layer) {
        this.layers[layer].push(obj);
        this.getLayersArray();
    }

    //transforms layers object into simple array ti simplify rendering
    getLayersArray() {
        this.layersArray = [];
        const layersValues = Object.values(this.layers);
        for (let i = layersValues.length - 1; i >=0; i--) {
            for (let obj of layersValues[i]) {
                this.layersArray.push(obj);
            }
        }
    }

    //start scene
    async start() {
        await this.init();
        console.log('Game started.')

        // game start time
        this.startSceneLoop();
    }

    startSceneLoop() {
        // game start time
        this.last = this.lastTileTime = performance.now();
        this.requestId = requestAnimationFrame(this.frame);
    }

    //LOGIC <================================================================================================
    update(dt) {
        this.keyHandler(dt);
        for (let obj of this.objects) {
            if (obj.update) {
                obj.update(dt);
            }
        }
    }
    
    //ANIMATION <================================================================================================
    frame() {
        let dt = ~~(performance.now() - this.lastTime);
        
        if (dt < this.frameDelay) {
            this.requestId = requestAnimationFrame(this.frame);
        } else {
            this.update(dt);
            this.refreshTiles(this.objects);
            
            this.render();
            
            this.lastTime = performance.now();
            this.requestId = requestAnimationFrame(this.frame);
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

    //RENDER <================================================================================================
    render() {
        this.fillField();

        for (let obj of this.objects) {
            obj.draw(this.gameWindow.ctx);
        }
    } 

    fillField() {
        this.gameWindow.ctx.fillStyle = this.backgroundColor;
        this.gameWindow.ctx.fillRect(0, 0, this.gameWindow.width, this.gameWindow.height);
    }

    keyHandler(dt) {
        if (keyStates.space) {
            this.player.shot();
        }

        // if (keyStates.up) {
        //     if (keyStates.right) {
        //         this.player.move(45, dt);
        //     } else if (keyStates.left){
        //         this.player.move(135, dt);
        //     } else {
        //         this.player.move(90, dt);
        //     }
        // } else if (keyStates.down) {
        //     if (keyStates.right) {
        //         this.player.move(315, dt);
        //     } else if (keyStates.left){
        //         this.player.move(225, dt);
        //     } else {
        //         this.player.move(270, dt);
        //     }
        // } else if (keyStates.left) {
        //     this.player.move(180, dt);
        // } else if (keyStates.right){
        //     this.player.move(0, dt);
        // }
        
        if (keyStates.up) {
            this.player.moveForward(dt);
        }
        if (keyStates.left) {
            this.player.turn('left');
        }
        if (keyStates.right) {
            this.player.turn('right');
        }

        this.player.checkBorders(this.gameWindow);
    }
}