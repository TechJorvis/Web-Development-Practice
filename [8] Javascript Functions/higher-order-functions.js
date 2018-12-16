/**
 * HIGHER ORDER FUNCTIONS:
 * We can pass functions to other functions
*/

function sing() {
    console.log("Twinkle Twinkle ...");
    console.log("How I wonder ...");
}

setInterval(sing, 1000);

/*
    setInterval(function() {
        console.log("This is an anonymous function!");
    }, 2000);
*/