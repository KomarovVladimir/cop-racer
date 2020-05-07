
class Ticker {
    constructor(delay, callback, props, delayBeforeStart) {
        this.currentTime = performance.now();
        this.lastTime = currentTime;
        this.delay = delay;
        this.delayBeforeStart = delayBeforeStart || 0;
        this.callback = callback;
    }

    update() {
        if (currentTime - this.lastTime >= this.delay) {
            this.lastTime = currentTime;
            callback(props);
        }
    }
}

export default Ticker;