import ScrollingBackground from './helpers/ScrollingBackground.js';

class BackgroundParallax {
    constructor(backgroundImages, canvas) {
        this.backgroundScrollableSprites = [];
        this.backgroundImages = backgroundImages;
        this.canvas = canvas;
        this.canvasContext = canvas.getContext('2d');

        this.init();
    };

    init() {
        let speed = 1;
        for(let i = 0; i < this.backgroundImages.length; i++) {
            const backgroundImage = new Image();
            backgroundImage.src = this.backgroundImages[i];

            const backgroudSprite = new ScrollingBackground(backgroundImage, 0, 0, this.canvas.width, this.canvas.height, speed);
            const backgroundSpriteBack = new ScrollingBackground(backgroundImage, -this.canvas.width, 0, this.canvas.width, this.canvas.height, speed);

            this.backgroundScrollableSprites.push(backgroudSprite);
            this.backgroundScrollableSprites.push(backgroundSpriteBack);

            speed += 0.5;
        }
    }

    render = () => {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.backgroundScrollableSprites.forEach(background => {
            background.scrollBackground();
            background.drawBackground(this.canvasContext);
        });
        
        window.requestAnimationFrame(this.render);
    }
}

export default BackgroundParallax;
