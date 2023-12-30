import inquirer from "inquirer";
let DefaultCurr = await inquirer.prompt({
    type: "list",
    message: "Select your current currency:",
    choices: ["PakRupee", "USDollar", "Euro", "Pounds"],
    name: "Currency"
});
let Entered = await inquirer.prompt({
    type: "input",
    message: "Enter the amount to convert",
    name: "Amount"
});
let ExchangeCurr = await inquirer.prompt({
    type: "list",
    message: "Select the currency to convert into:",
    choices: ["PakRupee", "USDollar", "Euro", "Pounds"],
    name: "currency"
});
export { DefaultCurr, Entered, ExchangeCurr };
