
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
let empDailyHoursMap = new Map();

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

while (totalEmpHrs <= maxHrMonth && totalWorkingDays < numWorkingDays) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWork(empCheck);
    totalEmpHrs += empHrs;

    let dailyWage = calcDailyWage(empHrs);
    
    empDailyWageMap.set(totalWorkingDays, dailyWage);
    empDailyHoursMap.set(totalWorkingDays, empHrs);
}

// a
let totalWageFromMap = Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0);
let totalHoursFromMap = Array.from(empDailyHoursMap.values()).reduce((total, hours) => total + hours, 0);
console.log(`Total Employee Wage: ${totalWageFromMap}, Total Hours Worked: ${totalHoursFromMap}`);

// b
let fullWorkingDays = [], partWorkingDays = [], noWorkingDays = [];

empDailyHoursMap.forEach((hours, day) => {
    if (hours === fullTimeHr) fullWorkingDays.push(day);
    else if (hours === partTimeHr) partWorkingDays.push(day);
    else noWorkingDays.push(day);
});

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);
