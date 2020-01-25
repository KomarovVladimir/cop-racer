import Bullet from './Bullet';
import ObjectHandler from './ObjectHandler';

const objectHandler = new ObjectHandler();

export default class Weapon {
    constructor (props) {
        this.name = props.name;
        this.group = props.group;
        this.bulletImage = props.bulletImage;
        this.tileWidth = props.tileWidth;
        this.tileHeight = props.tileHeight;
        this.tilesAmount = props.tilesAmount || 1;
        this.damage = props.damage || 1;
        this.shotingSpeed = props.shotingSpeed || 1;
        this.lastShot = null;
        this.bulletSpeed = props.bulletSpeed || 1;
        this.weaponX = props.weaponX || 0;
        this.weaponY = props.weaponY || 0;
    }
 
    shot(positionX, positionY, angle) {
        if (!this.lastShot) {
            this.lastShot = performance.now(); 
            this.createBullet(positionX, positionY, angle);
        }
        let dt = performance.now() - this.lastShot;
        if (dt >= 1000 / this.shotingSpeed) {
            this.lastShot = performance.now();
            this.createBullet(positionX, positionY, angle);
        }
    }

    createBullet(positionX, positionY, angle) {
        return objectHandler.createObject(Bullet, {
            group: 'playerBullet',
            image: this.bulletImage,
            tileWidth: this.tileWidth,
            tileHeight: this.tileHeight,
            tilesAmount: this.tilesAmount,
            angle: angle,
            positionX: positionX + this.weaponX,
            positionY: positionY + this.weaponY,
            damage: this.damage,
            speed: this.bulletSpeed 
        });
    }
}