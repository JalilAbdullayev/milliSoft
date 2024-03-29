var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var arr1 = [];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] != 3) {
        //3-ü arraydən çıxarır.
        arr1.push(arr[i]);
    }
}

document.write(arr1);