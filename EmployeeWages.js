
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
console.log("Full Working Days:");
empDailyRecords.forEach(record => {
    if (record.hoursWorked === fullTimeHr) console.log(`Day ${record.day}`);
});

//c
let partWorkingDaysStr = empDailyRecords
    .filter(record => record.hoursWorked === partTimeHr)
    .map(record => `Day ${record.day}`)
    .reduce((str, day) => str + day + ", ", "");
console.log("Part Working Days:", partWorkingDaysStr.slice(0, -2)); // Removing last comma

// d
let noWorkingDays = empDailyRecords
    .map(record => record.hoursWorked === 0 ? `Day ${record.day}` : null)
    .filter(day => day !== null);
console.log("No Working Days:", noWorkingDays);
