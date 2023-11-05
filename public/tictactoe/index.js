window.onload = function () {
    // Get the button element
    const toggleSoundButton = document.getElementById('toggleSoundButton');
    toggleSoundButton.value = soundEnabled ? "Mute" : "Unmute"
};

const playerImage = "eagle.jpg";
const computerImage = "snake.jpg";
const blankImage = "game3.jpg";

// Add a variable to track the sound state
let soundEnabled;

if (!localStorage.getItem("muted")) {
    localStorage.setItem("muted", "false");
    soundEnabled = true;
} else {
    soundEnabled = localStorage.getItem("muted") == 'true' ? false : true;
}

var pause = 0;
var all = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var temp = "";
var ok = 0;
var cf = 0;
var choice = 9;
var aRandomNumber = 0;
var comp = 0;
var t = 0;
var wn = 0;
var ls = 0;
var ts = 0;

function about() {
    // Get the help content
    const helpText = "Welcome to Tic-Tac-Toe! You play as the Eagle and the Device is the Snake. Select the square you want to put your Eagle into by clicking them. You cannot occupy a square that is already occupied. The first player to get three squares in a row wins. Good Luck!!";

    // Get the typingAnimation div
    const typingAnimation = document.getElementById("typingAnimation");

    // Clear any existing content
    typingAnimation.innerHTML = '';
    // Get the .game-help element
    const gameHelp = document.querySelector('.game-help');

    // Add border and box-shadow styles
    gameHelp.style.border = '2px solid #ccc';
    gameHelp.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

    // Create a function to reveal the text letter by letter
    function typeText(index) {
        if (index < helpText.length) {
            typingAnimation.innerHTML += helpText.charAt(index);
            index++;
            setTimeout(function () {
                typeText(index);
            }, 50); // Adjust the typing speed here (in milliseconds)
        }
    }

    // Start the typing animation
    typeText(0);
}

function logicOne() {
    if (a == 1 && b == 1 && c == 1) all = 1;
    if (a == 1 && d == 1 && g == 1) all = 1;
    if (a == 1 && e == 1 && i == 1) all = 1;
    if (b == 1 && e == 1 && h == 1) all = 1;
    if (d == 1 && e == 1 && f == 1) all = 1;
    if (g == 1 && h == 1 && i == 1) all = 1;
    if (c == 1 && f == 1 && i == 1) all = 1;
    if (g == 1 && e == 1 && c == 1) all = 1;
    if (a == 2 && b == 2 && c == 2) all = 2;
    if (a == 2 && d == 2 && g == 2) all = 2;
    if (a == 2 && e == 2 && i == 2) all = 2;
    if (b == 2 && e == 2 && h == 2) all = 2;
    if (d == 2 && e == 2 && f == 2) all = 2;
    if (g == 2 && h == 2 && i == 2) all = 2;
    if (c == 2 && f == 2 && i == 2) all = 2;
    if (g == 2 && e == 2 && c == 2) all = 2;
    if (
        a != 0 &&
        b != 0 &&
        c != 0 &&
        d != 0 &&
        e != 0 &&
        f != 0 &&
        g != 0 &&
        h != 0 &&
        i != 0 &&
        all == 0
    )
        all = 3;
}
function logicTwo() {
    if (a == 2 && b == 2 && c == 0 && temp == "") temp = "C";
    if (a == 2 && b == 0 && c == 2 && temp == "") temp = "B";
    if (a == 0 && b == 2 && c == 2 && temp == "") temp = "A";
    if (a == 2 && d == 2 && g == 0 && temp == "") temp = "G";
    if (a == 2 && d == 0 && g == 2 && temp == "") temp = "D";
    if (a == 0 && d == 2 && g == 2 && temp == "") temp = "A";
    if (a == 2 && e == 2 && i == 0 && temp == "") temp = "I";
    if (a == 2 && e == 0 && i == 2 && temp == "") temp = "E";
    if (a == 0 && e == 2 && i == 2 && temp == "") temp = "A";
    if (b == 2 && e == 2 && h == 0 && temp == "") temp = "H";
    if (b == 2 && e == 0 && h == 2 && temp == "") temp = "E";
    if (b == 0 && e == 2 && h == 2 && temp == "") temp = "B";
    if (d == 2 && e == 2 && f == 0 && temp == "") temp = "F";
    if (d == 2 && e == 0 && f == 2 && temp == "") temp = "E";
    if (d == 0 && e == 2 && f == 2 && temp == "") temp = "D";
    if (g == 2 && h == 2 && i == 0 && temp == "") temp = "I";
    if (g == 2 && h == 0 && i == 2 && temp == "") temp = "H";
    if (g == 0 && h == 2 && i == 2 && temp == "") temp = "G";
    if (c == 2 && f == 2 && i == 0 && temp == "") temp = "I";
    if (c == 2 && f == 0 && i == 2 && temp == "") temp = "F";
    if (c == 0 && f == 2 && i == 2 && temp == "") temp = "C";
    if (g == 2 && e == 2 && c == 0 && temp == "") temp = "C";
    if (g == 2 && e == 0 && c == 2 && temp == "") temp = "E";
    if (g == 0 && e == 2 && c == 2 && temp == "") temp = "G";
}
function logicThree() {
    if (a == 1 && b == 1 && c == 0 && temp == "") temp = "C";
    if (a == 1 && b == 0 && c == 1 && temp == "") temp = "B";
    if (a == 0 && b == 1 && c == 1 && temp == "") temp = "A";
    if (a == 1 && d == 1 && g == 0 && temp == "") temp = "G";
    if (a == 1 && d == 0 && g == 1 && temp == "") temp = "D";
    if (a == 0 && d == 1 && g == 1 && temp == "") temp = "A";
    if (a == 1 && e == 1 && i == 0 && temp == "") temp = "I";
    if (a == 1 && e == 0 && i == 1 && temp == "") temp = "E";
    if (a == 0 && e == 1 && i == 1 && temp == "") temp = "A";
    if (b == 1 && e == 1 && h == 0 && temp == "") temp = "H";
    if (b == 1 && e == 0 && h == 1 && temp == "") temp = "E";
    if (b == 0 && e == 1 && h == 1 && temp == "") temp = "B";
    if (d == 1 && e == 1 && f == 0 && temp == "") temp = "F";
    if (d == 1 && e == 0 && f == 1 && temp == "") temp = "E";
    if (d == 0 && e == 1 && f == 1 && temp == "") temp = "D";
    if (g == 1 && h == 1 && i == 0 && temp == "") temp = "I";
    if (g == 1 && h == 0 && i == 1 && temp == "") temp = "H";
    if (g == 0 && h == 1 && i == 1 && temp == "") temp = "G";
    if (c == 1 && f == 1 && i == 0 && temp == "") temp = "I";
    if (c == 1 && f == 0 && i == 1 && temp == "") temp = "F";
    if (c == 0 && f == 1 && i == 1 && temp == "") temp = "C";
    if (g == 1 && e == 1 && c == 0 && temp == "") temp = "C";
    if (g == 1 && e == 0 && c == 1 && temp == "") temp = "E";
    if (g == 0 && e == 1 && c == 1 && temp == "") temp = "G";
}
function clearOut() {
    document.game.you.value = "0";
    document.game.computer.value = "0";
    document.game.ties.value = "0";
}
function checkSpace() {
    if (temp == "A" && a == 0) {
        ok = 1;
        if (cf == 0) a = 1;
        if (cf == 1) a = 2;
    }
    if (temp == "B" && b == 0) {
        ok = 1;
        if (cf == 0) b = 1;
        if (cf == 1) b = 2;
    }
    if (temp == "C" && c == 0) {
        ok = 1;
        if (cf == 0) c = 1;
        if (cf == 1) c = 2;
    }
    if (temp == "D" && d == 0) {
        ok = 1;
        if (cf == 0) d = 1;
        if (cf == 1) d = 2;
    }
    if (temp == "E" && e == 0) {
        ok = 1;
        if (cf == 0) e = 1;
        if (cf == 1) e = 2;
    }
    if (temp == "F" && f == 0) {
        ok = 1;
        if (cf == 0) f = 1;
        if (cf == 1) f = 2;
    }
    if (temp == "G" && g == 0) {
        ok = 1;
        if (cf == 0) g = 1;
        if (cf == 1) g = 2;
    }
    if (temp == "H" && h == 0) {
        ok = 1;
        if (cf == 0) h = 1;
        if (cf == 1) h = 2;
    }
    if (temp == "I" && i == 0) {
        ok = 1;
        if (cf == 0) i = 1;
        if (cf == 1) i = 2;
    }
}
function playClick() {
    // Play the click sound only if sound is enabled
    if (soundEnabled) {
        const clickSound = document.getElementById('clickSound');
        if (clickSound) {
            clickSound.play();
        }
    }
}

function handleClick(cellName, event) {
    event.preventDefault(); // Prevent default anchor link behavior
    // Your code to handle the click event here
    yourChoice(cellName);
}

// To enable the link again
function enableLink() {
    const cell = document.getElementById('table-board-id');
    cell.classList.remove("disabled");
}
function disableLink() {
    const cell = document.getElementById('table-board-id');
    cell.classList.add("disabled");
}

function yourChoice(chName) {
    playClick()
    pause = 0;
    if (all != 0) ended();
    if (all == 0) {
        cf = 0;
        ok = 0;
        temp = chName;
        checkSpace();
        if (ok == 1) {
            document.images[chName].src = playerImage;
        }
        if (ok == 0) taken();
        process();
        if (all == 0 && pause == 0) myChoice(1000);
    }
}

function taken() {
    let messageBox = document.getElementById('message-container-id')
    if (messageBox) {
        messageBox.innerHTML = '<span class="error-msg">That square is already occupied. Please select another square.</span>'
        messageBox.firstElementChild.style.opacity = '1';
        setTimeout(function () {
            messageBox.firstElementChild.style.transition = 'opacity 1s';
            messageBox.firstElementChild.style.opacity = '0';
        }, 2000);
        setTimeout(function () {
            messageBox.firstElementChild.style.transition = '';
            messageBox.innerHTML = '';
        }, 3000);
    }
    pause = 1;
}
function myChoice(resTime) {
    // To disable the link and add the "disabled" class
    disableLink()
    temp = "";
    ok = 0;
    cf = 1;
    logicTwo();
    logicThree();
    checkSpace();
    while (ok == 0) {
        aRandomNumber = Math.random();
        comp = Math.round((choice - 1) * aRandomNumber) + 1;
        if (comp == 1) temp = "A";
        if (comp == 2) temp = "B";
        if (comp == 3) temp = "C";
        if (comp == 4) temp = "D";
        if (comp == 5) temp = "E";
        if (comp == 6) temp = "F";
        if (comp == 7) temp = "G";
        if (comp == 8) temp = "H";
        if (comp == 9) temp = "I";
        checkSpace();
    }
    setTimeout(function () {
        playClick()
        document.images[temp].src = computerImage;
        enableLink();
    }, resTime);
    process();
}
function ended() {
    let messageBox = document.getElementById('message-container-id')
    if (messageBox) {
        messageBox.innerHTML = '<span class="error-msg">The game has already ended. To play a new game click the Play Again button.</span>'
    }
}
function process() {
    let messageBox = document.getElementById('message-container-id')
    logicOne();
    if (all == 1) {
        if (messageBox) {
            messageBox.innerHTML = '<div class="message-container win-message"><span>You (Eagle) won, Congratulations! 🎉🎊</span></div>'
        }
        wn++;
    }
    if (all == 2) {
        if (messageBox) {
            messageBox.innerHTML = '<div class="message-container los-message"><span>Computer (Snake) won the game! 🐍</span></div>'
        }
        ls++;
    }
    if (all == 3) {
        if (messageBox) {
            messageBox.innerHTML = '<div class="message-container tie-message"><span>We tied.</span></div>'
        }
        ts++;
    }
    if (all != 0) {
        document.game.you.value = wn;
        document.game.computer.value = ls;
        document.game.ties.value = ts;
    }
}
function playAgain() {
    if (all == 0) {
        if (confirm("This will restart the game and clear all the current scores. OK?"))
            reset();
    }
    if (all > 0) reset();
}
function reset() {
    let messageBox = document.getElementById('message-container-id')
    messageBox.innerHTML = ''
    all = 0;
    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
    g = 0;
    h = 0;
    i = 0;
    temp = "";
    ok = 0;
    cf = 0;
    choice = 9;
    aRandomNumber = 0;
    comp = 0;
    document.images.A.src = blankImage;
    document.images.B.src = blankImage;
    document.images.C.src = blankImage;
    document.images.D.src = blankImage;
    document.images.E.src = blankImage;
    document.images.F.src = blankImage;
    document.images.G.src = blankImage;
    document.images.H.src = blankImage;
    document.images.I.src = blankImage;
    if (t == 0) {
        t = 2;
        myChoice(0);
    }
    t--;
}

function toggleSound() {
    // Toggle the sound state
    soundEnabled = !soundEnabled;

    // Get the audio element
    const clickSound = document.getElementById('clickSound');

    // Update the button text based on sound state
    if (soundEnabled) {
        toggleSoundButton.value = "Mute";
        localStorage.setItem("muted", "false");
        if (clickSound) {
            clickSound.play();
        }
    } else {
        toggleSoundButton.value = "Unmute";
        localStorage.setItem("muted", "true");
    }
}
