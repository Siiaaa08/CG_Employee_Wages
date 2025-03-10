
class EmployeePayroll {
    _id;
    _name;
    _salary;
    _gender;
    _startDate;

    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    
    get id() {
        return this._id;
    }
    set id(id) {
        let idRegex = RegExp("^[0-9]{1,}$");
        if (idRegex.test(id)) {
            this._id = id;
        } else {
            throw "ID is Incorrect!";
        }
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

   
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        let salaryRegex = RegExp("^[0-9]{3,}$");
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        } else {
            throw "Salary is Incorrect!";
        }
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        let genderRegex = RegExp("^[MFmf]$"); // Corrected Regex
        if (genderRegex.test(gender)) {
            this._gender = gender;
        } else {
            throw "Gender is Incorrect!";
        }
    }

  
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate instanceof Date ? startDate : "N/A";
    }

   
    toString() {
        let startDateStr = this.startDate instanceof Date ? this.startDate.toDateString() : "N/A";
        return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}, gender = ${this.gender}, startDate = ${startDateStr}`;
    }
}

let employeePayrollData1 = new EmployeePayroll(1, "Dev", 30000, "M", new Date());
console.log(employeePayrollData1.toString());

try {
    employeePayrollData1.name = "3456";  
    console.log(employeePayrollData1.toString());
} catch (e) {
    console.error(e);  
}


try {
    employeePayrollData1.name = "John";  
    console.log(employeePayrollData1.toString());
} catch (e) {
    console.error(e);
}

try {
    employeePayrollData1.gender = "X";  
} catch (e) {
    console.error(e);  
}
