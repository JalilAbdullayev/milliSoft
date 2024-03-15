var zero = 0
var one = 1
for(var i = 1; i < 100; i++) {
    if(i % 2 == 0) {
        zero += i
        one *= i
        console.log(i)
    }
}
console.log(zero)
console.log(one)