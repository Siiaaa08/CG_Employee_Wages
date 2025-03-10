
class EmployeePayroll{
    id ;
    name;
    salary;
    gender;
    startDate;


    constructor(...param){
this.id=param[0];
this.name=param[1];
this.salary=param[2];
this.gender=param[3];
this.startDate=param[4];
    }
    get name(){
        return this.name;
    }
    set name(name){
       this.name=name;
    }
    toString(){
        return "id ="+this.id+" , name = "+this.name+" , salary = "+this.salary+" , gender = "+this.gender+" , startDate = "+this.startDate;


    }
}

let employeePayrollData1=new EmployeePayroll(1,"Dev",30000);
employeePayrollData1.name="Dev Aditya Singh";
let employeePayrollData=new EmployeePayroll(1,"Dev",30000,"M",new Date());

console.log(employeePayrollData.toString());
console.log(employeePayrollData1.toString());
