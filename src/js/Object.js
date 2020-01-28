import keyStates from "./keyStates";

export default class Object {
    constructor(props) {
        this.image = props.image || null;
        this.tilesAmount = props.tilesAmount || 0;
        this.tileWidth = props.tileWidth || 0;
        this.tileHeight = props.tileHeight || 0;
        this.currentTileRow = props.currentTileRow || 0;
        this.currentTile = props.currentTile || 0;
        this.posX = props.posX || 0;
        this.posY = props.posY || 0;
    }

    update(dt) {
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.posX  + this.tileWidth / 2, this.posY + this.tileHeight / 2);
        ctx.rotate(-(this.angle - 90) * Math.PI / 180);
        ctx.drawImage(
            this.image, 
            this.currentTile * this.tileWidth,  
            this.currentTileRow * this.tileHeight, 
            this.tileWidth,
            this.tileHeight, 
            -this.tileWidth / 2, 
            -this.tileHeight / 2, 
            this.tileWidth, 
            this.tileHeight
        );
        ctx.restore();
    }
}