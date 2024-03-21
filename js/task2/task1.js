var arr = [1, 2, 3, 4]
var zero = 0
var one = 1

for(var i = 0; i < arr.length; i++) {
    //Cəmi
    zero += arr[i]
    //Hasili
    one *= arr[i]
}

console.log(zero)
console.log(one)