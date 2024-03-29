function salary(salaryPerHour, hoursPerDay, daysPerWeek) {
    var salaryPerWeek = salaryPerHour * hoursPerDay;
    var hoursPerWeek = daysPerWeek * hoursPerDay;
    var averageHoursPerWeek = 40;
    if(hoursPerWeek > averageHoursPerWeek) {
        salaryPerWeek *= 2
    }
    var daysPerMonth = daysPerWeek * 4;
    return salaryPerWeek * daysPerMonth
}
console.log(salary(8, 9, 5))