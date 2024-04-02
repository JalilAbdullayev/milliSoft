var date1 = new Date(2013, 9, 26);

var date2 = new Date(2024, 11, 25)

var year = date2.getFullYear() - date1.getFullYear();
var month = date2.getMonth() - date1.getMonth();
if(month < 0) {
    year--
    month += 12
}
var day = date2.getDate() - date1.getDate();
if(day < 0) {
    month--
    date2.setDate(0)
    day += date2.getDate()
}
document.write(year + " il " + month + " ay " + day + " gün")