var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor.slice(4, pickedColor.indexOf(')'));

for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            messageDisplay.style.color = "white";

            changeColor(clickedColor);

            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again :(";
            messageDisplay.style.color = "white";
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