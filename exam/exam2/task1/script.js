let arr = [1, 2, 3, 4, 5];
let sum = 0;

for(const element of arr) {
    sum += element;
    var orta = sum / arr.length;
}

console.log(orta);
