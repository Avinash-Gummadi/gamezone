var COLS = 10, ROWS = 20;
var board = [];
var lose;
var interval;
var intervalRender;
var current; // current moving shape
var currentX, currentY; // position of current shape
var freezed; // is current shape settled on the board?
var shapes = [
    [1, 1, 1, 1],
    [1, 1, 1, 0,
        1],
    [1, 1, 1, 0,
        0, 0, 1],
    [1, 1, 0, 0,
        1, 1],
    [1, 1, 0, 0,
        0, 1, 1],
    [0, 1, 1, 0,
        1, 1],
    [0, 1, 0, 0,
        1, 1, 1]
];
var colors = [
    'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];
var score = 0;
var paused = false;

// creates a new 4x4 shape in global variable 'current'
// 4x4 so as to cover the size when the shape is rotated
function newShape() {
    var id = Math.floor(Math.random() * shapes.length);
    var shape = shapes[id]; // maintain id for color filling

    current = [];
    for (var y = 0; y < 4; ++y) {
        current[y] = [];
        for (var x = 0; x < 4; ++x) {
            var i = 4 * y + x;
            if (typeof shape[i] != 'undefined' && shape[i]) {
                current[y][x] = id + 1;
            }
            else {
                current[y][x] = 0;
            }
        }
    }

    // new shape starts to move
    freezed = false;
    // position where the shape will evolve
    currentX = 5;
    currentY = 0;
}

// clears the board
function init() {
    for (var y = 0; y < ROWS; ++y) {
        board[y] = [];
        for (var x = 0; x < COLS; ++x) {
            board[y][x] = 0;
        }
    }
}

// keep the element moving down, creating new shapes and clearing lines
function tick() {
    if (!paused) {
        if (valid(0, 1)) {
            ++currentY;
        }
        // if the element settled
        else {
            freeze();
            valid(0, 1);
            clearLines();
            if (lose) {
                clearAllIntervals();
                return false;
            }
            newShape();
        }
    }
}

// stop shape at its position and fix it to board
function freeze() {
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (current[y][x]) {
                board[y + currentY][x + currentX] = current[y][x];
            }
        }
    }
    freezed = true;
}

// returns rotates the rotated shape 'current' perpendicularly anticlockwise
function rotate(current) {
    var newCurrent = [];
    for (var y = 0; y < 4; ++y) {
        newCurrent[y] = [];
        for (var x = 0; x < 4; ++x) {
            newCurrent[y][x] = current[3 - x][y];
        }
    }

    return newCurrent;
}

// check if any lines are filled and clear them
function clearLines() {
    for (var y = ROWS - 1; y >= 0; --y) {
        var rowFilled = true;
        for (var x = 0; x < COLS; ++x) {
            if (board[y][x] == 0) {
                rowFilled = false;
                break;
            }
        }
        if (rowFilled) {
            document.getElementById('clearsound').play();
            for (var yy = y; yy > 0; --yy) {
                for (var x = 0; x < COLS; ++x) {
                    board[yy][x] = board[yy - 1][x];
                }
            }
            ++y;
            score += 100;
        }
    }
    // Update the score display on the HTML page
    document.getElementById('score').getElementsByTagName('span')[0].innerText = score;
    document.getElementById('score-over').innerText = score;
}

function keyPress(key) {
    switch (key) {
        case 'left':
            if (valid(-1)) {
                --currentX;
            }
            break;
        case 'right':
            if (valid(1)) {
                ++currentX;
            }
            break;
        case 'down':
            if (valid(0, 1)) {
                ++currentY;
            }
            break;
        case 'rotate':
            var rotated = rotate(current);
            if (valid(0, 0, rotated)) {
                current = rotated;
            }
            break;
        case 'drop':
            while (valid(0, 1)) {
                ++currentY;
            }
            tick();
            break;
    }
}

// checks if the resulting position of current shape will be feasible
function valid(offsetX, offsetY, newCurrent) {
    offsetX = offsetX || 0;
    offsetY = offsetY || 0;
    offsetX = currentX + offsetX;
    offsetY = currentY + offsetY;
    newCurrent = newCurrent || current;

    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (newCurrent[y][x]) {
                if (typeof board[y + offsetY] == 'undefined'
                    || typeof board[y + offsetY][x + offsetX] == 'undefined'
                    || board[y + offsetY][x + offsetX]
                    || x + offsetX < 0
                    || y + offsetY >= ROWS
                    || x + offsetX >= COLS) {
                    if (offsetY == 1 && freezed) {
                        lose = true; // lose if the current shape is settled at the top most row
                        document.getElementById('game-overlay2').style.display = 'block';
                    }
                    return false;
                }
            }
        }
    }
    return true;
}

function playButtonClicked() {
    newGame();
    document.getElementById("start-button").style.display = 'none';
    document.getElementById("pause-button").style.display = 'block';
}

function newGame() {
    clearAllIntervals();
    score = 0; // Reset the score
    document.getElementById('score').getElementsByTagName('span')[0].innerText = score; // Update the score display
    intervalRender = setInterval(render, 30);
    init();
    newShape();
    lose = false;
    interval = setInterval(tick, 400);
}

function clearAllIntervals() {
    clearInterval(interval);
    clearInterval(intervalRender);
}

function togglePause() {
    paused = !paused; // Toggle the pause state
    if (paused) {
        pauseGame();
    } else {
        resumeGame();
    }
}
// Add these functions to show/hide the overlay and handle menu options
function pauseGame() {
    document.getElementById('game-overlay').style.display = 'flex';
}

function resumeGame() {
    paused = false;
    document.getElementById('game-overlay').style.display = 'none';
    instructions_id.style.display = 'none'
}

function quitGame() {
    resumeGame()
    document.getElementById("start-button").style.display = 'block';
    document.getElementById("pause-button").style.display = 'none';
    clearAllIntervals();
    score = 0;
    document.getElementById('score').getElementsByTagName('span')[0].innerText = score; // Update the score display
    // intervalRender = setInterval(render, 30);
    // init();
    // Get a reference to the canvas element and its 2D context
    let canvas = document.getElementById('tetris-board');
    let ctx = canvas.getContext('2d');

    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function howToPlay() {
    instructions_id.style.display = 'block'
}
function startOver() {
    document.getElementById('game-overlay2').style.display = 'none';
    playButtonClicked()
}