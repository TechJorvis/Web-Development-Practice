// Check Off Specific Todos by Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");

    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");

    // if($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
});

// Click on X to delete the todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });

    event.stopPropagation();    /* To stop the bubble effect */
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        // Store the new todo given
        let todo = $(this).val();
        // Clear the input box
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todo + "</li>");
    }
});