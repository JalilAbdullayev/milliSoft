var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var zero = 0;
var say;
for(var i = 0; i < arr.length; i++) {
    zero += arr[i];
    say = arr[i]++
}
console.log(zero)
console.log(say)
console.log(zero / say)