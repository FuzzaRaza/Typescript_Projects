import { Registration } from "./Registration";
import inquirer from "inquirer";

export class StudentRegistration extends Registration {
    Students!:string[];
    ID!: string;
    Grade!: number;
    Fees!: number;
    static SerialNo: number = 10000;

    constructor(name: string, Age:number, Grade: number) {
        super(name, Age)
        this.Grade = Grade
        this.ID = "STD" + StudentRegistration.SerialNo;
        StudentRegistration.SerialNo += 1;
        this.Fees = Grade * 1500;
    }
}