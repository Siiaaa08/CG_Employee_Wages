
class EmployeePayroll {
    id;
    _name; 
    salary;
    gender;
    startDate;

    constructor(...param) {
        this.id = param[0];
        this.name = param[1];  
        this.salary = param[2];
        this.gender = param[3];
        this.startDate = param[4];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (nameRegex.test(name)) {
            this._name = name;  
        } else {
            throw "Name is Incorrect!";
        }
    }

    toString() {
        let startDateStr = this.startDate ? this.startDate.toLocaleDateString() : "N/A";
        return `id = ${this.id} , name = ${this.name} , salary = ${this.salary} , gender = ${this.gender} , startDate = ${startDateStr}`;
    }
}
let employeePayrollData1 = new EmployeePayroll(1, "Dev", 30000);
console.log(employeePayrollData1.toString());

try {
    employeePayrollData1.name = "3456"; 
    console.log(employeePayrollData1.toString());
} catch (e) {
    console.error(e);  // Output: Name is Incorrect!
}


try {
    employeePayrollData1.name = "John";  
    console.log(employeePayrollData1.toString());
} catch (e) {
    console.error(e);
}
