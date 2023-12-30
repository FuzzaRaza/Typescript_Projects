#!/usr/bin/env node
// COUNTDOWN timer IN TYPESCRIPT
import chalk from "chalk";
import "date-fns";
import { differenceInCalendarDays, differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const Times = await inquirer.prompt({
    type: "number",
    name: "out",
    message: "Enter the countdownTime in seconds: "
});
const Timing = new Date().setSeconds(new Date().getSeconds());
const InitTime = new Date(Timing);
console.log("Timer Start Time:  ", InitTime);
function CountdownTimer(timeInSec) {
    const Duration = (Timing + timeInSec) - Timing;
    let TimerLimit = InitTime.setSeconds(new Date().getSeconds() + timeInSec);
    let TimerD = new Date(TimerLimit);
    console.log("Timer End Time:  ", TimerD);
    console.log(`Timer has been set for ${Duration} seconds`);
    TimerLimit = InitTime.setSeconds(new Date().getSeconds() + timeInSec + 2); //during exe delay of 2 sec observed therefore added manually.
    TimerD = new Date(TimerLimit);
    setInterval(() => {
        const CurrentTime = new Date();
        const LeftTime = differenceInSeconds(TimerD, CurrentTime);
        let mints = Math.floor(LeftTime / (1000 * 60));
        let secnds = Math.floor(LeftTime % 60);
        console.log(`${mints}:${secnds}`);
        if (secnds == 0) {
            console.log(chalk.redBright.bold("TIME OUT"));
            process.exit();
        }
    }, 1000);
}
CountdownTimer(Times.out);
console.log(differenceInCalendarDays(24102002, new Date()));
