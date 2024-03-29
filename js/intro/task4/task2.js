var date1 = new Date();

var date2 = new Date(2024, 11, 25)


var time = date2.getTime() - date1.getTime();
var days = Math.floor(time / (1000 * 60 * 60 * 24));
console.log(days)