for(var i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0) {
        // 7 və 8-ə bölünən 3 rəqəmli ilk ədəd
        console.log(i)
        break
    }
}

for(var j = 999; j >= 100; j--) {
    if(j % 7 == 0 && j % 8 == 0) {
        // 7 və 8-ə bölünən 3 rəqəmli son ədəd
        console.log(j)
        break
    }
}