#!/usr/bin/env node
///////////////Welcome to guessing game//////////
import inquirer from "inquirer";
import chalk from "chalk";
let random = Math.random() * 10;
let computerGen = random.toFixed();
console.log("Welcome to Guess The Number Game");
let i = 1;
do {
    console.log("\t Round", i);
    let userInpt = await inquirer.prompt([
        {
            message: "Guess a number (1-10): ",
            type: "number",
            name: "inpValue",
        },
    ]);
    if (computerGen == userInpt.inpValue) {
        console.log(chalk.greenBright("\t Hooray!"));
    }
    else {
        console.log(chalk.yellowBright("\t Better luck next time..."));
    }
    i++;
} while (i <= 3);
