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
    let todo_id = "todoID-" + todo_count;
    // Assign a unique id to the todo
    list_item.setAttribute("id", todo_id);

    // Append the li tag to the list
    ol.appendChild(list_item);
});