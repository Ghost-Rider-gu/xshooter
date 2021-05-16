import BackgroundParallax from './BackgroundParallax.js';

function startGame() {
    const canvas = document.getElementById('background-screen');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const backgroundImages = [];
    for (let i = 1; i <= 5; i++) {
        backgroundImages.push(`./assets/backgrounds/level1/layer${i}.png`);
    }

    const backgroundParallax = new BackgroundParallax(backgroundImages, canvas);
    backgroundParallax.render();
}

startGame();
