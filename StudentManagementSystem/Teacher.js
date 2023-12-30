"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherRegistration = void 0;
const Registration_1 = require("./Registration");
class TeacherRegistration extends Registration_1.Registration {
    constructor(name, Age, Department, YearOfService) {
        super(name, Age);
        this.ID = "TCH" + TeacherRegistration.SerialNo;
        TeacherRegistration.SerialNo += 1;
        this.Department = Department;
        this.Salary = YearOfService * 2500 + 5000;
    }
}
exports.TeacherRegistration = TeacherRegistration;
TeacherRegistration.SerialNo = 10000;
