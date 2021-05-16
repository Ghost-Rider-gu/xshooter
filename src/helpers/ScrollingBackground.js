class ScrollingBackground {
    constructor(backgroundImage, x, y, width, height, speed) {
        this.backgroundImage = backgroundImage;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    scrollBackground() {
        this.x -= this.speed;
        if (this.x <= -this.width) {
            this.x = this.width - 1;
        }
    }

    drawBackground(context) {
        context.drawImage(this.backgroundImage, this.x, this.y, this.width, this.height);
    }
}

export default ScrollingBackground;
