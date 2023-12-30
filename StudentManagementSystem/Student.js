"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRegistration = void 0;
const Registration_1 = require("./Registration");
class StudentRegistration extends Registration_1.Registration {
    constructor(name, Age, Grade) {
        super(name, Age);
        this.Grade = Grade;
        this.ID = "STD" + StudentRegistration.SerialNo;
        StudentRegistration.SerialNo += 1;
        this.Fees = Grade * 1500;
    }
}
exports.StudentRegistration = StudentRegistration;
StudentRegistration.SerialNo = 10000;
