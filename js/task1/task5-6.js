var zero = 0
for(var i = 100; i <= 999; i++) {
    if(i % 7 == 0 && i % 8 == 0) {
        console.log(i)
        zero += i
    }
}
console.log(zero)