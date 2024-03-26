var num = Number(prompt('Ədəd daxil edin:'));

function ededSoz(num) {
    var bir = ['', 'bir', 'iki', 'üç', 'dörd', 'beş', 'altı', 'yeddi', 'səkkiz', 'doqquz'];
    var on = ['', 'on', 'iyirmi', 'otuz', 'qırx', 'əlli', 'altmış', 'yetmiş', 'səksən', 'doxsan'];
    var yuz = ['', 'Yüz', 'İki yüz', 'Üç yüz', 'Dörd yüz', 'Beş yüz', 'Altı yüz', 'Yeddi yüz', 'Səkkiz yüz', 'Doqquz' +
    ' yüz'];

    var eded = '';

    if(num === 0) {
        return 'sıfır';
    }
    if(num >= 100) {
        eded += yuz[Math.floor(num / 100)] + ' ';
        num %= 100;
    }

    if(num >= 10) {
        eded += on[Math.floor(num / 10)] + ' ';
        num %= 10;
    }

    if(num >= 10 && num <= 19) {
        eded += bir[num] + ' ';
        return eded.trim();
    }

    if(num >= 1) {
        eded += bir[num];
    }

    return eded.trim();
}

if(num >= 1 && num <= 1000) {
    alert(ededSoz(num));
} else {
    alert('1-dən 1000-ədək ədəd daxil edin.');
}