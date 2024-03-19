var num = Number(prompt('Ədəd daxil edin:'));

var word = ['bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz', 'on'];


if(num > 0 && num <= 10) {
    alert(word[num - 1]);
} else {
    alert('1-dən 10-adək ədəd daxil edin.');
    window.location.reload();
}