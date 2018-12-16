// This function capitalizes the first character of the string
function capitalize(str) {
    if (typeof str === "number") {
        return "Invalid String";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// End of function capitalize

function test_capitalize(){
    let string_list = ["ayush", 1, "Singhal"];
    for (let i = 0; i < string_list.length; i++) {
        console.log("> " + capitalize(string_list[i]));
    }
}

test_capitalize();