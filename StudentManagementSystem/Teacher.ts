import { Registration } from "./Registration";
import inquirer from "inquirer";

export class TeacherRegistration extends Registration {
    ID!: string;
    Department!: string;
    Salary!: number;
    static SerialNo: number = 10000;
    constructor(name: string,Age:number, Department: string, YearOfService: number) {
        super(name, Age);
        this.ID = "TCH" + TeacherRegistration.SerialNo
        TeacherRegistration.SerialNo += 1;
        this.Department = Department;
        this.Salary = YearOfService * 2500 + 5000;
    }
}
