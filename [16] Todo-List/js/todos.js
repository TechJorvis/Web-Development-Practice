// Check Off Specific Todos by Clicking
$("li").click(function() {
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
$("span").click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });

    event.stopPropagation();    /* To stop the bubble effect */
});