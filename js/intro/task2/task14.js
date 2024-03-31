function salary(salaryPerHour, hoursPerDay, daysPerWeek) {
    var hoursPerWeek = daysPerWeek * hoursPerDay;
    var averageHoursPerWeek = 40;
    var baseSalaryPerWeek = salaryPerHour * averageHoursPerWeek;
    var overTimeSalaryPerWeek = 0;
    if(hoursPerWeek > averageHoursPerWeek) {
        overTimeSalaryPerWeek = salaryPerHour * 2 * (hoursPerWeek - averageHoursPerWeek);
    }
    var totalSalaryPerWeek = baseSalaryPerWeek + overTimeSalaryPerWeek;
    var daysPerMonth = daysPerWeek * 4;
    return totalSalaryPerWeek * daysPerMonth
}

console.log(salary(8, 9, 5))