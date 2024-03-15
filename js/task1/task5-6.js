var zero = 0
for(var i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0) {
        // 7 və 8-ə bölünən bütün 3 rəqəmli ədədlər
        console.log(i)
        // Cəmi
        zero += i
    }
}
console.log(zero)