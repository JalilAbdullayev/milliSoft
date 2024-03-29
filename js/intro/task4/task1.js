var date1 = new Date();

var date2 = new Date(2024, 11, 25)

var month = Math.abs(date2.getMonth() - date1.getMonth());
var day = Math.abs(date2.getDate() - date1.getDate());
var hour = Math.abs(date2.getHours() - date1.getHours());
var minute = Math.abs(date2.getMinutes() - date1.getMinutes());
var second = Math.abs(date2.getSeconds() - date1.getSeconds());
document.write(month + " ay " + day + " gün " + hour + " saat " + minute + " dəqiqə " + second)