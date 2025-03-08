
const num=20;
let emphr=0;
var part=1;
var full=2;

var parthr=4;
var fullhr=8;
var perhr=20;
function getWork(empcheck){
    switch(empcheck){
        case part:
            return parthr;
          
        case full:
            return fullhr;
     
        default:
          return 0;
        
    }}

for(let day=0;day<num;day++){
    let empcheck=Math.floor(Math.random()*10)%3;
    emphr+=getWork(empcheck);
}
let empWage=emphr*perhr;
console.log("Total Hrs :- "+emphr+" Emp Wages :- "+empWage);
