import Object from "./Object";

class PatternObject extends Object {
    constructor(props) {
        super(props);

        this.patternWidth = props.patternWidth;
        this.patternHeight = props.patternHeight;
    }

    update(dt) {
        super.update(dt);
    }

    draw(ctx) {
        const n = Math.ceil(this.patternWidth / this.tileWidth);
        
        for (let i = 0; i < n; i++) {
            ctx.drawImage(
                this.image, 
                this.currentTile * this.tileWidth,  
                this.currentTileRow * this.tileHeight, 
                this.tileWidth,
                this.tileHeight, 
                this.posX + this.tileWidth * i, 
                this.posY, 
                this.tileWidth, 
                this.tileHeight
            );
        }
    }
}

export default PatternObject;
