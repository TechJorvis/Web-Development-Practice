function problem1() {
    console.log("All numbers between -10 and 19 are:");
    for (i = -9; i < 19; i++) {
        console.log(i);
    }
}

function problem2() {
    console.log("All even numbers between 10 and 40 are:");
    for (i = 12; i < 40; i += 2) {
        console.log(i);
    }
}

function problem3() {
    console.log("All odd numbers between 300 and 333 are: ");
    for (i = 301; i < 333; i += 2) {
        console.log(i);
    }
}

function problem4() {
    console.log("All numbers divisible by 5 and 3 between 5 and 50 are: ");
    for (i = 6; i < 50; i++) {
        if (i % 3  == 0 && i % 5 == 0) {
            console.log(i);
        }
    }
}

problem1();
problem2();
problem3();
problem4();