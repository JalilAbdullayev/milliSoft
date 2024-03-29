var num1 = Number(prompt('1-ci ədədi daxil edin:'))
var num2 = Number(prompt('2-ci ədədi daxil edin:'))
var emel = prompt('Əməl daxil edin:')

if(emel == '+') {
    alert(num1 + num2)
} else if(emel == '-') {
    alert(num1 - num2)
} else if(emel == '*') {
    alert(num1 * num2)
} else if(emel == '/') {
    alert(num1 / num2)
} else {
    alert('Yanlış əməl.')
}