var num = Number(prompt('Ədəd daxil edin:'));

var word = ['bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz', 'on'];


// if(num > 0 && num <= 10) {
//     alert(word[num - 1]);
// } else {
//     alert('1-dən 10-adək ədəd daxil edin.');
// }

switch(num) {
    case 1:
        alert('bir');
        break;
    case 2:
        alert('iki');
        break;
    case 3:
        alert('üç');
        break;
    case 4:
        alert('dörd');
        break;
    case 5:
        alert('beş');
        break;
    case 6:
        alert('altı');
        break;
    case 7:
        alert('yeddi');
        break;
    case 8:
        alert('səkkiz');
        break;
    case 9:
        alert('doqquz');
        break;
    case 10:
        alert('on');
        break;
    default:
        alert('1-dən 10-adək ədəd daxil edin.');
}