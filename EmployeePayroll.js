
class EmployeePayroll{
    id ;
    name;
    salary;

    constructor(id ,name,salary){
this.id=id;
this.name=name;
this.salary=salary;
    }
    get name(){
        return this.name;
    }
    set name(name){
       this.name=name;
    }
    toString(){
        return "id ="+this.id+" , name = "+this.name+" , salary = "+this.salary;


    }
}

let employeePayrollData=new EmployeePayroll(1,"Dev",30000);
console.log(employeePayrollData.toString());
employeePayrollData.name="Dev Aditya Singh";
console.log(employeePayrollData.toString());
