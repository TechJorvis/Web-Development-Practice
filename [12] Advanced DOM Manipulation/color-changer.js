// Get the body
var body = document.querySelector("body");

// Get the button that will toggle the background
var toggler = document.getElementById("color-toggler");

// Boolean variable to keep track of toggling
var toggle = false;

// Setup click listener
toggler.addEventListener("click", function() {
    let color = "";
    if (toggle) {
        color = "white";
    } else {
        color = "orange";
    }

    // Update the body background
    body.style.background = color;

    // Switch the toggle
    toggle = !toggle;
});