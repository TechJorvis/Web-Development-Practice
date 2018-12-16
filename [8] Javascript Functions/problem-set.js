// Function to check whether given number is even or not
function isEven(nbr) {
    if (typeof nbr === "number") {
        if (nbr % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    return NaN;
}
// End of function isEven.

// Function to computer factorial of the given number
function factorial(nbr) {
    if (typeof nbr === "number") {
        let result = 1;
        for (let i = nbr; i > 0; i--) {
            result = result * i;
        }

        return result
    }
}
// End of function factorial.

// Function to convert a kebab-cased string to snake_cased version
function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}
// End of function kebabToSnake.

// Function test the functions
function problem_set_solution() {
    // Problem 1
    let problem_1_test_cases = [4, 21, 68, 333];
    console.log("Problem 1 Solution:");
    for (let i = 0; i < problem_1_test_cases.length; i++) {
        console.log(problem_1_test_cases[i] + ": " + isEven(problem_1_test_cases[i]));
    }

    // Problem 2
    let problem_2_test_cases = [5, 2, 10, 0];
    console.log("Problem 2 Solution:");
    for (let i = 0; i < problem_2_test_cases.length; i++) {
        console.log(problem_2_test_cases[i] + "! = " + factorial(problem_2_test_cases[i]));
    }

    // Problem 3
    let problem_3_test_cases = ["hello-world", "dogs-are-awesome", "blah"];
    console.log("Problem 3 Solution:");
    for (let i = 0; i < problem_3_test_cases.length; i++) {
        console.log(problem_3_test_cases[i] + " => " + kebabToSnake(problem_3_test_cases[i]));
    }
}

problem_set_solution();