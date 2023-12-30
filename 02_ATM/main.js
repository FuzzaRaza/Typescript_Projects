#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from "inquirer";
let UserInpt = await inquirer.prompt({
    type: "input",
    name: "UserID",
    message: "Enter your User ID: ",
});
let UserPin = await inquirer.prompt({
    type: "input",
    name: "Pin",
    message: "Enter your 3-digit Pin code: ",
});
let Account = await inquirer.prompt({
    type: "list",
    name: "ItType",
    message: "Select your Account Type",
    choices: ["Saving", "Current"],
    //default:"Current",
});
let Transactiontype = await inquirer.prompt({
    type: "list",
    name: "Mode",
    message: "Select your Account Type",
    choices: ["Withdraw cash", "Transfer Amount"],
});
//const Blnc=300;
const Blnc = 42837;
if (Transactiontype.Mode == "Withdraw cash") {
    console.log("Your current Balance : ", Blnc);
    let Transaction = await inquirer.prompt({
        type: "list",
        name: "Amount",
        message: "Select the amount you want to debit:",
        choices: ["500", "1000", "3000", "4000", "5000"],
    });
    const Confirmation = await inquirer.prompt({
        type: "input",
        name: "ConfirmTransaction",
        message: "Are you sure about the amount (Press 1 for yes, 0 for no)",
    });
    let remainingBlnc = Blnc - Transaction.Amount;
    if (Confirmation.ConfirmTransaction == '1' && remainingBlnc >= 0) {
        console.log(chalk.greenBright("\n Kindly collect your cash \n"));
    }
    else if (remainingBlnc <= 0) {
        console.log(chalk.yellow("Kindly try some other amount. Your current balance is insufficient!"));
    }
    else {
        console.log(chalk.redBright("Transaction incomplete!"));
    }
    console.log("Balance: ", remainingBlnc);
}
else {
    let Transferee = await inquirer.prompt({
        type: "input",
        name: "Account Number",
        message: "Enter the account number to transfer:",
    });
    let TransferAmount = await inquirer.prompt({
        type: "input",
        name: "Amount",
        message: "Enter the amount you want to transfer:",
    });
    const Confirmation = await inquirer.prompt({
        type: "input",
        name: "ConfirmTransaction",
        message: "Are you sure about the amount (Press 1 for yes, 0 for no)",
    });
    let AccBlnc = Blnc - TransferAmount.Amount;
    if (Confirmation.ConfirmTransaction == '1' && AccBlnc >= 0) {
        console.log(chalk.greenBright("\n Amount transferred successfully. \n"));
    }
    else if (AccBlnc <= 0) {
        console.log(chalk.yellow("\n Kindly try some other amount!"));
    }
    else {
        console.log(chalk.redBright("Transaction incomplete."));
    }
    console.log("Balance: ", AccBlnc);
}
