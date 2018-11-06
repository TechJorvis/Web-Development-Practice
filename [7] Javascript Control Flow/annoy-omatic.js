function startAnnoying() {
    let input = "nope";
    while (!input.includes("yes") && !input.includes("yeah")) {
        input = window.prompt("Are we there yet?");
    }
    window.alert("Yay, we finally made it!");
}

startAnnoying();