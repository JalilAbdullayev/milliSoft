var zero = 0
var one = 1
for(var i = 1; i < 100; i++) {
    if(i % 2 == 0) {
        // 1-100 arası cüt ədədlərin cəmi
        zero += i
        // 1-100 arası cüt ədədlərin hasili
        one *= i
        // 1-100 arası cüt ədədlərin hamısı
        console.log(i)
    }
}
console.log(zero)
console.log(one)