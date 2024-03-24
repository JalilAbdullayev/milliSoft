var arr1 = [2, 5];
var arr2 = [3, 4];

function vur(arr1, arr2) {
    var hasil = [];
    for(var i = 0; i < arr1.length; i++) {
        hasil.push(arr1[i] * arr2[i]);
    }
    return hasil;
}

console.log(vur(arr1, arr2));