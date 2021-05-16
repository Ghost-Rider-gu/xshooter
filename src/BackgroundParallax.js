class BackgroundParallax {
    constructor(backgroundImages, canvas) {
        this.backgroundImages = backgroundImages;
        this.canvas = canvas;
        this.canvasContext = canvas.getContext('2d');

        this.backgroundImage = this.prep(0);
        this.backgroundImage1 = this.prep(1);
        this.backgroundImage2 = this.prep(2);
        this.backgroundImage3 = this.prep(3);
        this.backgroundImage4 = this.prep(4);
    };

    render = () => {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.backgroundImage.position = {x: 0, y: 0};
        this.canvasContext.drawImage(this.backgroundImage, 0, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage.position.x -= 0.5;
        if (this.backgroundImage.position.x <= - this.canvas.width) {
            this.backgroundImage.position.x = this.canvas.width - 1;
        }
        this.canvasContext.drawImage(this.backgroundImage, -this.canvas.width, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage.position.x -= 0.5;
        if (this.backgroundImage.position.x <= - this.canvas.width) {
            this.backgroundImage.position.x = this.canvas.width - 1;
        }

        this.backgroundImage1.position = {x: 0, y: 0};
        this.canvasContext.drawImage(this.backgroundImage1, 0, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage1.position.x -= 1;
        if (this.backgroundImage1.position.x <= - this.canvas.width) {
            this.backgroundImage1.position.x = this.canvas.width - 1;
        }
        this.backgroundImage1.position = {x: -this.canvas.width, y: 0};
        this.canvasContext.drawImage(this.backgroundImage1, -this.canvas.width, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage1.position.x -= 1;
        if (this.backgroundImage1.position.x <= - this.canvas.width) {
            this.backgroundImage1.position.x = this.canvas.width - 1;
        }

        this.backgroundImage2.position = {x: 0, y: 0};
        this.canvasContext.drawImage(this.backgroundImage2, 0, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage2.position.x -= 1.5;
        if (this.backgroundImage2.position.x <= - this.canvas.width) {
            this.backgroundImage2.position.x = this.canvas.width - 1;
        }
        this.canvasContext.drawImage(this.backgroundImage2, -this.canvas.width, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage2.position.x -= 1.5;
        if (this.backgroundImage2.position.x <= - this.canvas.width) {
            this.backgroundImage2.position.x = this.canvas.width - 1;
        }

        this.backgroundImage3.position = {x: 0, y: 0};
        this.canvasContext.drawImage(this.backgroundImage3, 0, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage3.position.x -= 2;
        if (this.backgroundImage3.position.x <= - this.canvas.width) {
            this.backgroundImage3.position.x = this.canvas.width - 1;
        }
        this.canvasContext.drawImage(this.backgroundImage3, -this.canvas.width, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage3.position.x -= 2;
        if (this.backgroundImage3.position.x <= - this.canvas.width) {
            this.backgroundImage3.position.x = this.canvas.width - 1;
        }

        this.backgroundImage4.position = {x: 0, y: 0};
        this.canvasContext.drawImage(this.backgroundImage4, 0, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage4.position.x -= 2.5;
        if (this.backgroundImage4.position.x <= - this.canvas.width) {
            this.backgroundImage4.position.x = this.canvas.width - 1;
        }
        this.canvasContext.drawImage(this.backgroundImage4, -this.canvas.width, 0, this.canvas.width, this.canvas.height);
        this.backgroundImage4.position.x -= 2.5;
        if (this.backgroundImage4.position.x <= - this.canvas.width) {
            this.backgroundImage4.position.x = this.canvas.width - 1;
        }

        
        window.requestAnimationFrame(this.render);
    }

    prep(index) {
        const backgroundImage = new Image();
        backgroundImage.src = this.backgroundImages[index];

        return backgroundImage;
    }
}

export default BackgroundParallax;

/*class ScrollingSprite {
    constructor(image, x, y, width, height, speed) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    scroll() {
        this.x -= this.speed;
        if (this.x <= -this.width) {
            this.x = this.width - 1;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

window.onload = () => {
    const backgroundImage = new Image();
    backgroundImage.src = './assets/BG.png';

    const backgroudSprite = new ScrollingSprite(backgroundImage, 0, 0, canvas.width, canvas.height, 1);
    const backgroundSprite2 = new ScrollingSprite(backgroundImage, -canvas.width, 0, canvas.width, canvas.height, 1);

    const bakcgroundBuildingsImage = new Image();
    bakcgroundBuildingsImage.src = './assets/Background 1.png';

    const backgroundBuildingsSprite = new ScrollingSprite(bakcgroundBuildingsImage, 0, 0, canvas.width, canvas.height, 2);
    const backgroundBuildingsSprite2 = new ScrollingSprite(bakcgroundBuildingsImage, -canvas.width, 0, canvas.width, canvas.height, 2);

    const bridgeImage = new Image();
    bridgeImage.src = './assets/Middle.png';

    const middleSprite = new ScrollingSprite(bridgeImage, 0, 0, canvas.width, canvas.height, 2.5);
    const middleSprite2 = new ScrollingSprite(bridgeImage, -canvas.width, 0, canvas.width, canvas.height, 2.5);

    const foregroundBuildingImage = new Image();
    foregroundBuildingImage.src = './assets/Foreground.png';

    const foregroundBuildingSprite = new ScrollingSprite(foregroundBuildingImage, 0, 0, canvas.width, canvas.height, 3);
    const foregroundBuildingSprite2 = new ScrollingSprite(foregroundBuildingImage, -canvas.width, 0, canvas.width, canvas.height, 3);

    const spriteArray = [
        backgroudSprite,
        backgroundSprite2,
        backgroundBuildingsSprite,
        backgroundBuildingsSprite2,
        middleSprite,
        middleSprite2,
        foregroundBuildingSprite,
        foregroundBuildingSprite2
    ];

    // Draw loop
    const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        spriteArray.forEach(sprite => {
            sprite.scroll();
            sprite.draw(ctx);
        });

        window.requestAnimationFrame(render);
    }
}*/
