// Get the button that will toggle the background
var toggler = document.getElementById("color-toggler");

// Setup click listener
toggler.addEventListener("click", function() {
    // Toggle Background
    document.body.classList.toggle("orange");
});