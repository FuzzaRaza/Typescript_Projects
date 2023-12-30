#!/usr/bin/env node
import inquirer from "inquirer";
let para = await inquirer.prompt([{
        type: "input",
        name: "s",
        message: "Enter any paragraph for counting:\n"
    }]);
console.log("ORIGINAL paragraph:\n", para);
const charCount = para.s.replace(/ /g, '');
console.log("\nCHARACTER COUNT:\n", charCount.length);
para.s.trim();
const WordCount = para.s.split(" ", para.length);
console.log("WORD COUNT:\n", WordCount.length);
