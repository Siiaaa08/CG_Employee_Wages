
var part=1;
var full=2;

var parthr=4;
var fullhr=8;
var perhr=20;

let emphr=0;
empcheck=Math.floor(Math.random()*10)%3;
function getWork(empcheck){
switch(empcheck){
    case part:
        return parthr;
      
    case full:
        return fullhr;
 
    default:
      return 0;
    
}}

emphr=getWork(empcheck);
let empwage=emphr*perhr;
console.log("Emp Wage :- "+empwage);
