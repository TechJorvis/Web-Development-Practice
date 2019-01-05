function average(test_scores) {
    let avg, sum = 0;

    // Add all scores
    for (let i = 0; i < test_scores.length; i++) {
        sum += test_scores[i];
    }

    // Divide by total number of scores
    avg = sum / test_scores.length;

    // Round average
    return Math.round(avg);
}

/* TESTING THE FUNCTION */
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));