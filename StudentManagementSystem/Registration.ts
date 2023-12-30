export class Registration {
    name!: string;
    DOB!: number;
    Age!:number;
    static SerialNo: number = 10000;
    constructor(name: string, Age:number) {
        // this.options=options;
        Registration.SerialNo += 1;
        this.name=name.toUpperCase();
        this.Age=this.Age;
    }

}
