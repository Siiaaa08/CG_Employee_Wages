
const maxHrMonth=100;
const maxDays=10;
let totalempHr=0;
const perhr=20;
var part=1;
var full=2;

var parthr=4;
var fullhr=8;

let totalWorkDay=0;
function getWork(empcheck){
    switch(empcheck){
        case part:
            return parthr;
          
        case full:
            return fullhr;
     
        default:
          return 0;
        
    }}

while(totalempHr<=maxHrMonth&&totalWorkDay<maxDays){
    totalWorkDay++;
    let empcheck=Math.floor(Math.random()*10)%3;
    totalempHr+=getWork(empcheck);
}

let empWage=totalempHr*perhr;
console.log("Total Days :- "+totalWorkDay+" Total Hrs :- "+totalempHr+" Emp Wage :- "+empWage);
