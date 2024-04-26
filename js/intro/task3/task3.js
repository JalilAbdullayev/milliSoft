var num = Number(prompt("Ədəd daxil edin: "));
for(var i = 2; i <= num; i++) {
    var bolen = 0;
    for(var j = 1; j <= i; j++) {
        if(i % j == 0) {
            // Bölənlərin sayı
            bolen++;
        }
    }
}
if(bolen == 2) {
    // Əgər sadəcə 2 ədəd bölən (1 və özü) varsa sadədir.
    alert(num + " sadədir.");
} else {
    // 2-cən çoxdursa mürəkkəb
    alert(num + " mürəkkəbdir.");
}