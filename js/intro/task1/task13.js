var sade = "";
var murekkeb = "";
for(var i = 2; i <= 100; i++) {
    var bolen = 0;
    for(var j = 1; j <= i; j++) {
        if(i % j == 0) {
            // Bölənlərin sayı
            bolen++;
        }
    }
    if(bolen == 2) {
        // Əgər sadəcə 2 ədəd bölən (1 və özü) varsa sadədir.
        sade += i + "<br/>";
    } else {
        // 2-cən çoxdursa mürəkkəb
        murekkeb += i + "<br/>";
    }
}

document.write("Sadə:<br/>", sade);
document.write("Mürəkkəb:<br/>", murekkeb);