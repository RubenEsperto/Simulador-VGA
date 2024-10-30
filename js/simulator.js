const canvas = document.getElementById('vgaCanvas');
const ctx = canvas.getContext('2d');

const WIDTH = 640;
const HEIGHT = 480;

const colors = [
    '#000000', '#0000AA', '#00AA00', '#00AAAA', '#AA0000',
    '#AA00AA', '#AA5500', '#AAAAAA', '#555555', '#5555FF',
    '#55FF55', '#55FFFF', '#FF5555', '#FF55FF', '#FFFF55',
    '#FFFFFF'
];

function generateImageData() {
    return new Array(HEIGHT).fill().map(() =>
        new Array(WIDTH).fill().map(() => Math.floor(Math.random() * 16))
    );
}

function drawImagePattern(imageData) {
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++)  {
            const colorIndex = imageData[y][x];
            ctx.fillStyle = colors[colorIndex];
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

function animate() {
    const imageData = generateImageData();
    console.log(imageData);
    drawImagePattern(imageData);
    requestAnimationFrame(animate);
}

animate();