
const partTime = 1;
const fullTime = 2;

const partTimeHr = 4;
const fullTimeHr = 8;
const WagePerHr = 20;

const maxHrMonth = 160;
const numWorkingDays = 20;

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyRecords = []; 

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

    // data 
    empDailyRecords.push({
        day: totalWorkingDays,
        hoursWorked: empHrs,
        wageEarned: dailyWage
    });
}

// a
let totalWage = empDailyRecords.reduce((total, record) => total + record.wageEarned, 0);
let totalHours = empDailyRecords.reduce((total, record) => total + record.hoursWorked, 0);
console.log(`Total Employee Wage: ${totalWage}, Total Hours Worked: ${totalHours}`);

// b
let fullWorkingDays = empDailyRecords.filter(record => record.hoursWorked === fullTimeHr).map(record => record.day);
let partWorkingDays = empDailyRecords.filter(record => record.hoursWorked === partTimeHr).map(record => record.day);
let noWorkingDays = empDailyRecords.filter(record => record.hoursWorked === 0).map(record => record.day);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);

// c
console.log("Day-wise Records:");
console.table(empDailyRecords);
