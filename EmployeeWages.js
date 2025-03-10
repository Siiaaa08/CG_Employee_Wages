
const partTime = 1;
const fullTime = 2;

const partTimeHr = 4;
const fullTimeHr = 8;
const WagePerHr = 20;

const maxHrMonth = 160;
const numWorkingDays = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageMap = new Map();

function calcDailyWage(empHrs) {
    return empHrs * WagePerHr;
}

function getWork(empCheck) {
    switch (empCheck) {
        case partTime:
            return partTimeHr;
        case fullTime:
            return fullTimeHr;
        default:
            return 0;
    }
}

// Employee wage calculation loop
while (totalEmpHrs <= maxHrMonth && totalWorkingDays < numWorkingDays) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWork(empCheck);
    totalEmpHrs += empHrs;
    
    let dailyWage = calcDailyWage(empHrs);
    
    // Storing day-wise 
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

//total wage using Map
let totalWageFromMap = Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log("Total Employee Wage (computed from Map): " + totalWageFromMap);

console.log("Day-wise Wage Data:");
for (let [day, wage] of empDailyWageMap) {
    console.log(`Day ${day} => Wage: ${wage}`);
}
