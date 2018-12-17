var usr_input = ""
var todos = [];

function todoListApp() {
    /**
     * To add a task to the todo list
     * @param {string} task - task to be added to the todo list
     */
    function addToDo(task) {
        todos.push(task);
        console.log(task + "was added to the todo list");
    }
    // End of function addToDo

    /**
     * To view all the tasks listed in the todos array
     */
    function viewToDo() {
        for (let i = 0; i < todos.length; i++) {
            console.log("> " + todos[i]);
        }
    }

    do {
        usr_input = window.prompt("Enter the task you want to perform: ");
        if (usr_input) {
            if (usr_input.toLowerCase() == "new") {
                let new_task = window.prompt("Enter the new task: ");
                addToDo(new_task);
            } else if (usr_input.toLowerCase() == "view") {
                viewToDo();
            }
        }
    } while (usr_input != null && usr_input != "quit");
}

window.setTimeout(todoListApp, 500);