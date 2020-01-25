export default class Object {
    constructor(props) {
        this.name = props.name;
        this.group = props.group || null;
        this.image = props.image || null;
        this.tilesAmount = props.tilesAmount || 0;
        this.tileWidth = props.tileWidth || 0;
        this.tileHeight = props.tileHeight || 0;
        this.currentTileRow = props.currentTileRow || 0;
        this.currentTile = props.currentTile || 0;
        this.angle = props.angle || 90;
        this.radAngle = this.angle * Math.PI / 180;
        this.positionX = props.positionX || 0;
        this.positionY = props.positionY || 0;
        if (props.hitboxOffsetX ||  props.hitboxOffsetY || props.hitboxHeight || props.hitboxWidth) {
            this.hitboxOffsetX = props.hitboxOffsetX || 0;
            this.hitboxOffsetY = props.hitboxOffsetY || 0;
            this.hitboxHeight = props.hitboxHeight || 0;
            this.hitboxWidth = props.hitboxWidth || 0;
            this.hitboxPositionX = this.positionX + this.hitboxOffsetX;
            this.hitboxPositionY = this.positionY + this.hitboxOffsetY;
            this.hasHitbox = true;
        }
    }

    setPosition(x, y) {
        this.positionX = x;
        this.positionY = y;
    }

    nextTile() {
        if (this.currentTile < (this.tilesAmount - 1)) {
            this.currentTile++;
        } else {
            this.currentTile = 0;
        }
    }

    getImage() {
        return this.image;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.positionX  + this.tileWidth / 2, this.positionY + this.tileHeight / 2);
        ctx.rotate(-(this.angle - 90) * Math.PI / 180);
        ctx.drawImage(this.image, this.currentTile * this.tileWidth,  this.currentTileRow * this.tileHeight, this.tileWidth, this.tileHeight, -this.tileWidth / 2, -this.tileHeight / 2, this.tileWidth, this.tileHeight);
        ctx.restore();
    }
}