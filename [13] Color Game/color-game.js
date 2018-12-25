var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function() {
    // Generate all new colors
    colors = generateRandomColors(6);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change the colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor.slice(4, pickedColor.indexOf(')'));
    // Change Color of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    // Revert back the background of h1
    h1.style.backgroundColor = "#232323";
    // Revert the text of the button to "New Colors"
    resetButton.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor.slice(4, pickedColor.indexOf(')'));

for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

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