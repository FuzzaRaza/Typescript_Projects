#!/usr/bin/env node

import inquirer from "inquirer";

let operators = await inquirer.prompt({
    type: "list",
    message: "Select an operator",
    choices: ["+", "-", "/", "x"],
    name: "sign"
});
var a = await inquirer.prompt({
    type: "number",
    message: "Enter first number: ",
    name: "num"
});
var b = await inquirer.prompt({
    type: "number",
    message: "Enter second number:",
    name: "numb"
})
let answer: number = 0;
console.log(a.num, operators.sign, b.numb);
switch (operators.sign) {
    case ('+'):
        answer = a.num + b.numb;
        console.log(answer.toFixed(2));
        break;

    case ('-'):
        answer = a.num - b.numb;
        console.log(answer.toFixed(2));
        break;

    case ('x'):
        answer = a.num * b.numb;
        console.log(answer.toFixed(2));
        break;

    case ("/"):
        answer = a.num / b.numb;
        console.log(answer.toFixed(2));
        break;

    default:
        console.log(operators.sign)
}