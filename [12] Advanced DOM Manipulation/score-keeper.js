// Get the goal score viewer
var goalScoreViewer = document.getElementById("goal-score-display");

// Get the goal score setter input box
var goalScoreSetter = document.getElementById("goal-score-input");

// Setup update listener
goalScoreSetter.addEventListener("input", function() {
    // Log the new value
    console.log("Goal Score Changed to: " + goalScoreSetter.value);

    // Update the new goal score on the screen
    goalScoreViewer.textContent = goalScoreSetter.value;
});