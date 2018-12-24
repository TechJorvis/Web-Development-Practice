// Initializing initial score values
var player1_score = 0;
var player2_score = 0;
var goal_score = 5;

// Get the goal score viewer
var goalScoreViewer = document.getElementById("goal-score-display");

// Get the goal score setter input box
var goalScoreSetter = document.getElementById("goal-score-input");

// Setup goal score update listener
goalScoreSetter.addEventListener("input", function() {
    // Log the new value
    console.log("Goal Score Changed to: " + goalScoreSetter.value);

    // Update the goal score variable
    goal_score = goalScoreSetter.value;

    // Update the new goal score on the screen
    goalScoreViewer.textContent = goal_score;
});

// Get the player-1 score viewer
var player1_scoreViewer = document.getElementById("player-1-score");

// Get the player-1 score update button
var player1 = document.getElementById("player-1");

// Setup player-1 score update listener
player1.addEventListener("click", function() {
    if (player1_score + 1 <= goal_score) {
        // Increment the player-1 score variable
        player1_score += 1;

        // Update the player-1 score on the screen
        player1_scoreViewer.textContent = player1_score;

        if (player1_score == goal_score) {
            player1_scoreViewer.style.color = "orange";
        }
    }
});

// Get the player-2 score viewer
var player2_scoreViewer = document.getElementById("player-2-score");

// Get the player-2 score update button
var player2 = document.getElementById("player-2");

// Setup player-2 score update listener
player2.addEventListener("click", function() {
    if (player2_score + 1 <= goal_score) {
        // Increment the player-2 score variable
        player2_score += 1;

        // Update the player-2 score on the screen
        player2_scoreViewer.textContent = player2_score;

        if (player2_score == goal_score) {
            player2_scoreViewer.style.color = "orange";
        }
    }
});