/**
 * Prints the elements of the array in reverse order
 * @param {object[]} arr : array
 */
function printReverse(arr) {
    if (arr.length > 0) {
        console.log("Array in reverse order:");
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
    } else {
        console.log("Array is Empty!");
    }
}
// End of function printReverse

/**
 * Returns true/false based on
 * whether in given array
 * each is identical or not
 * @param {object[]} arr : array
 * @returns {boolean} If each element is identical then returns true else false
 */
function isUnion(arr) {
    if (arr.length > 0) {
        let isIdentical = true;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] != arr[i + 1]) {
                isIdentical = false;
                break;
            }
        }
        return isIdentical;
    } else {
        console.log("Array is Empty!");
        return undefined;
    }
}
// End of function isUnion

/**
 * Computes the sum of each element of the array
 * @param {number[]} arr : array of numbers
 * @returns {number} sum of each element of the array
 */
function sumArray(arr) {
    if (arr.length > 0) {
        let sum = 0;
        // Add each element of the array
        arr.forEach(function(nbr) {
            sum = sum + nbr;
        });
        // Return sum of each element of the array
        return sum;
    } else {
        console.log("Array is Empty!");
        return undefined;
    }
}
// End of function sumArray

/**
 * Finds the maximum number present in the array
 * @param {number[]} arr : array of numbers
 * @returns {number} maximum number present in the array
 */
function max(arr) {
    if (arr.length > 0) {
        let max = Number.MIN_SAFE_INTEGER;
        // Find the maximum number present in the array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        // Return the max number present in the array
        return max;
    } else {
        console.log("Array is Empty!");
        return undefined;
    }
}
// End of function max

function problemSetSolution() {
    // Problem 1
    let test_cases_1 = [[1, 2, 3], ['a', 'b', 'c']];
    console.log("Problem 1 Solution:");
    console.log("===================");
    test_cases_1.forEach(function(test_case, i) {
        console.log("Test Case " + (i + 1) + ":");
        console.log("Original Array: [" + test_case + "]");
        printReverse(test_case);
    });
    console.log("===================");
    // Problem 2
    let test_cases_2 = [[1, 1, 1, 1], [2, 1, 1, 1], ['a', 'b', 'p'], ['b', 'b', 'b']];
    console.log("Problem 2 Solution:");
    console.log("===================");
    test_cases_2.forEach(function(test_case, i) {
        console.log("Test Case " + (i + 1) + ":");
        console.log("For array, [" + test_case + "] : "+ isUnion(test_case));
    });
    console.log("===================");
    // Problem 3
    let test_cases_3 = [[1, 2, 3], [10, 3, 10, 4], [-5, 100]];
    console.log("Problem 3 Solution:");
    console.log("===================");
    test_cases_3.forEach(function(test_case, i) {
        console.log("Test Case " + (i + 1) + ":");
        console.log("Array: [" + test_case + "]");
        console.log("Sum: " + sumArray(test_case));
    })
    console.log("===================");
    // Problem 4
    let test_cases_4 = [[1, 2, 3], [10, 3, 10, 4], [-5, 100]];
    console.log("Problem 4 Solution:");
    console.log("===================");
    test_cases_4.forEach(function(test_case, i) {
        console.log("Test Case " + (i + 1) + ":");
        console.log("Array: [" + test_case + "]");
        console.log("Max: " + max(test_case));
    })
    console.log("===================");
}
// End of function problemSetSolution

problemSetSolution();