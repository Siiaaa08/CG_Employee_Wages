
const numWorkingDays=20;

const partTime=1;
const fullTime=2;

const partTimeHr=4;
const fullTimeHr=8;
const WagePerHr=20;

let empHr=0;

function getWork(empCheck){
    switch(empCheck){
        case partTime:
            return partTimeHr;
          
        case fullTime:
            return fullTimeHr;
     
        default:
          return 0;
        
    }}
    for(let day=0;day<numWorkingDays;day++){
        let empCheck=Math.floor(Math.random()*10)%3;
        empHr+=getWork(empCheck);
    }
let empWage=empHr*WagePerHr;
console.log("Total Hrs :- "+empHr+" Emp Wages :- "+empWage);
