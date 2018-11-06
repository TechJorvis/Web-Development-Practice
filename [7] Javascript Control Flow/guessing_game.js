// Create secret number
let min = 0;
let max = 20;
let secretNumber = Math.floor(Math.random() * (max - min)) + min;

function startGame() {
    // Ask user for guess
    let user_guess = Number(window.prompt("Guess a number"));

    console.log("User entered the number: " + user_guess);

    // Check guess
    if (user_guess === secretNumber) {
        window.alert("Wow! You Guessed It Right!");
        console.log("User guessed it correctly :)");
    } else if (user_guess < secretNumber) {
        window.alert("You Guessed It Too Low :/");
        console.log("User guessed it too low :(");
    } else if (user_guess > secretNumber) {
        window.alert("You Guessed It Too High :/");
        console.log("User guessed it too high :(");
    }
}

function showSecretNumber() {
    let secret_place_holder = document.getElementById("secret-number");
    secret_place_holder.innerHTML = secretNumber;
}