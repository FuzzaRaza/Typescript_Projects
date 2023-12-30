#!/usr/bin/env node
// todo PROJECT IN TYPESCRIPT
import inquirer from "inquirer";
let TaskList = ["walk", "swim"];
TaskList.push("jogging");
async function TodoList(TaskList) {
    let select = await inquirer.prompt({
        name: "option",
        message: "Select :",
        type: "list",
        choices: ["view", "add", "delete"]
    });
    switch (select.option) {
        case "add":
            let Addtask = await inquirer.prompt({
                type: "input",
                message: "Enter task to your list:",
                name: "New",
            });
            TaskList.push(Addtask.New);
            console.log(TaskList);
            break;
        case "delete":
            let DelTask = await inquirer.prompt({
                name: "Previous",
                message: "Select task to delete:",
                type: "list",
                choices: TaskList.map((item) => item)
            });
            let newTaskList = TaskList.filter((val) => val != DelTask.Previous);
            TaskList = [...newTaskList];
            console.log(TaskList);
            console.log(newTaskList);
            break;
        case "view":
            console.log(TaskList);
            break;
        default:
            break;
    }
}
TodoList(TaskList);
