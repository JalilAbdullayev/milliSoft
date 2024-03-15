var a = Number(prompt('İlk ədədi daxil edin:'))
var b = Number(prompt('2-ci ədədi daxil edin:'))
var c = Number(prompt('3-cü ədədi daxil edin:'))

if(a > b && a > c) {
    alert(a + ' böyükdür.');
} else if(b > a && b > c) {
    alert(b + ' böyükdür.');
} else if(c > a && c > b) {
    alert(c + ' böyükdür.');
}

if(a < b && a < c) {
    alert(a + ' kiçikdir.');
} else if(b < a && b < c) {
    alert(b + ' kiçikdir.');
} else if(c < a && c < b) {
    alert(c + ' kiçikdir.');
} else {
    alert('Ədədlər bərabərdir.')
}