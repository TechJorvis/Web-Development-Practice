var nbrOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");

init();

function init() {
    // Setup Mode Buttons event listeners
    setupModeButtons();

    setupSquares();

    reset();
}

function setupModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                nbrOfSquares = 3;
            } else {
                nbrOfSquares = 6;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"

                changeColor(clickedColor);

                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again :(";
            }
        });
    }
}

function reset() {
    // Generate all new colors
    colors = generateRandomColors(nbrOfSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change the colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor.slice(4, pickedColor.indexOf(')'));

    messageDisplay.textContent = "";

    // Change Color of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    // Revert back the background of h1
    h1.style.backgroundColor = "steelBlue";
    // Revert the text of the button to "New Colors"
    resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random_index = Math.floor(Math.random() * colors.length);
    return colors[random_index];
}

function generateRandomColors(colorCount) {
    let arr = [];
    for (let i = 0; i < colorCount; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

    return rgb;
}