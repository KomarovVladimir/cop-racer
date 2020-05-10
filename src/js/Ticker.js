
class Ticker {
    constructor(delay, callback, props, delayBeforeStart) {
        this.startTime = performance.now();
        this.currentTime = this.startTime;
        this.lastTime = this.currentTime;
        this.delay = delay;
        this.delayBeforeStart = delayBeforeStart || 0;
        this.callback = callback;
        this.props = props;
        
    }

    init() {
        this.startTime = performance.now();
        this.currentTime = this.startTime;
        this.lastTime = this.currentTime;
    }

    update() {
        this.currentTime = performance.now();
        if (this.currentTime >= this.startTime + this.delayBeforeStart) {
            if (this.currentTime - this.lastTime >= this.delay) {
                this.lastTime = this.currentTime;
                this.callback(this.props);
            }
        }
    }
}

export default Ticker;