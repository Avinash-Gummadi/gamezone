var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var W = 300, H = 600;
var BLOCK_W = W / COLS, BLOCK_H = H / ROWS;

// draw a single square at (x, y)
// Function to draw a single square at (x, y) with grid lines
function drawBlock(x, y, color) {
    var posX = x * BLOCK_W;
    var posY = y * BLOCK_H;

    // Draw grid lines
    ctx.strokeStyle = 'rgba(148, 255, 66, 0.5)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(posX + BLOCK_W, posY);
    ctx.lineTo(posX + BLOCK_W, posY + BLOCK_H);
    ctx.lineTo(posX, posY + BLOCK_H);
    ctx.closePath();
    ctx.stroke();

    // Fill the block with color
    if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(posX, posY, BLOCK_W, BLOCK_H);
        ctx.strokeRect(posX, posY, BLOCK_W, BLOCK_H);
    }
}


// draws the board and the moving shape
function render() {
    ctx.clearRect(0, 0, W, H);

    ctx.strokeStyle = 'black';
    for (var x = 0; x < COLS; ++x) {
        for (var y = 0; y < ROWS; ++y) {
            var color = colors[board[y][x] - 1]; // Get the color for the block
            drawBlock(x, y, color);
        }
    }

    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            var color = colors[current[y][x] - 1]; // Get the color for the block
            drawBlock(currentX + x, currentY + y, color);
        }
    }
}
