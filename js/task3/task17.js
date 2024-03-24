var num = Number(prompt("Ədəd daxil edin"));
var cem = 0;
for(i = 0; i < num; i++) {
    if(num % i == 0) {
        //Bölənlərin cəmini tapırıq.
        cem += i
    }
}

if(num == sum) {
    alert('Ədəd mükəmməldir.');
} else {
    alert('Ədəd mükəmməl deyil.');
}