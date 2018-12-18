var usr_input = ""
var todos = [];

function todoListApp() {
    /**
     * To add a task to the todo list
     * @param {string} task - task to be added to the todo list
     */
    function addToDo(task) {
        // Add the given task to the todo list
        todos.push(task);
        // Print the status
        console.log("Status: " + task + " was added to the todo list");
    }
    // End of function addToDo

    /**
     * To view all the tasks listed in the todos array
     */
    function viewToDo() {
        // Print the todo list
        console.log("ToDo List: ");
        console.log("========================");
        for (let i = 0; i < todos.length; i++) {
            console.log(i + ") " + todos[i]);
        }
        console.log("========================");
    }
    // End of function viewToDo

    /**
     * Removes given todo from the todo list
     * @param {number} todo_index - index of the todo to be removed
     */
    function removeToDo(todo_index) {
        if (todo_index > -1 && todo_index < todos.length) {
            // Store the todo to be deleted
            let task = todos[todo_index];
            // Remove the specified todo from the todo list
            todos.splice(todo_index, 1);
            // Print the status
            console.log("Status: Removed " + task + " from the todo list");
        } else {
            // Print the status
            console.log("Status: Given task not found in the todo list");
        }
    }
    // End of function removeToDo

    do {
        // Take the input from the user
        usr_input = window.prompt("Enter the task you want to perform: ");
        if (usr_input) {
            console.log("User entered " + usr_input + " task to be performed");

            if (usr_input.toLowerCase() == "new") {
                // Input the new task to be added to the todo list
                let new_task = window.prompt("Enter the new task: ");
                // Add the new task to the todo list
                addToDo(new_task);
            } else if (usr_input.toLowerCase() == "list") {
                // Display the todo list
                viewToDo();
            } else if (usr_input.toLowerCase() == "delete") {
                // Input the index of the task that has to be deleted from the todo list
                let todo_index = window.prompt("Enter the index of the todo");
                // Remove the specified todo from the list
                removeToDo(todo_index)
            } else {
                console.log("User entered invalid task");
            }
        }
        else {
            console.log("User didn't entered any choice :(");
        }
    } while (usr_input != null && usr_input != "quit");
    console.log("User Quit Successfully!");
}

window.setTimeout(todoListApp, 500);