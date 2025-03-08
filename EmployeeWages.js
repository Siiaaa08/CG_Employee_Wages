
const part=1;
const full=2;

const parthr=4;
const fullhr=8;
const perhr=20;

let emphr=0;
empcheck=Math.floor(Math.random()*10)%3;
switch(empcheck){
    case part:
        emphr=parthr;
        break;
    case full:
        emphr=fullhr;
    break;
    default:
        emphr=0;
        break;
}

let empwage=emphr*perhr;
console.log("Emp Wage :- "+empwage);
