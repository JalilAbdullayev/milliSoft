var arr = [15, 21, 43, 14, 49, 67, 54, 75, 43, 90];

function tek(arr) {
    var tekArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(i % 2 != 0) {
            //Indexi tək olanları arrayə pushlayır.
            tekArr.push(arr[i]);
        }
    }
    return tekArr;
}

document.write(tek(arr));