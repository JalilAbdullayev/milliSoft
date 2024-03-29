var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var arr1 = [];
for(var i = 0; i < arr.length; i++) {
    if(arr[i].toString().slice(-1) == 5 || arr[i].toString().slice(-1) == 0) {
        //5 və ya 0-la bitənləri arrayə pushlayır.
        arr1.push(arr[i]);
    }
}
console.log(arr1.length)