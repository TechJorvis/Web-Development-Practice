// Initialize the variables
var todo_count = 0;

// Get the ol tag
var ol = document.getElementById("todo-list");

// Get the add todo button
var addTodoButton = document.getElementById("add-todo");

// Setup click listener on the add todo button
addTodoButton.addEventListener("click", function() {
    // Create a li element
    let list_item = document.createElement("li");
    // Ask the user to input the todo to be added
    let item = window.prompt("Enter a todo");
    // Append the todo given by user to the li tag
    list_item.textContent = item;

    // Increment the todo count
    todo_count += 1;

    // Create a unique id
    let todo_id = "todo-" + todo_count;
    // Assign a unique id to the todo
    list_item.setAttribute("id", todo_id);

    // Setup mouse-over listener on li
    list_item.addEventListener("mouseover", function() {
        this.classList.add("mouse-over");
    });

    // Setup mouse-out listener on li
    list_item.addEventListener("mouseout", function() {
        this.classList.remove("mouse-over");
    });

    // Setup click listener on li
    list_item.addEventListener("click", function() {
        this.classList.toggle("todo-completed");
    });

    // Append the li tag to the list
    ol.appendChild(list_item);
});

// Get the delete todo button
var deleteTodoButton = document.getElementById("delete-todo");

// Setup click listener on the todo button
deleteTodoButton.addEventListener("click", function() {
    // Ask the user to input the todo number to be deleted
    let item_nbr = parseInt(window.prompt("Enter the number of the todo to be removed"));

    if (item_nbr > 0 && item_nbr <= todo_count) {
        // Create the Id of the todo
        let todo_id = "todo-" + item_nbr;
        // Get the todo
        let list_item = document.getElementById(todo_id);

        // Remove the todo from the list
        ol.removeChild(list_item);

        // Update the id's of the todo's after the given todo (if any)
        let todo_item, current_todo_nbr, new_todo_nbr;
        for (let i = item_nbr; i < todo_count; i++) {
            // Current todo number
            current_todo_nbr = i + 1;
            // Current todo id
            todo_id = "todo-" + current_todo_nbr;
            // Get the todo item
            todo_item = document.getElementById(todo_id);

            // Create the new todo number
            new_todo_nbr = i;
            // Update the id
            todo_item.id = "todo-" + new_todo_nbr;
        }

        // Decrement the total todo count
        todo_count -= 1;
    } else {
        window.alert("Given Item Number Does not Exist");
    }
});