var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function indexOf(arr, value) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == value) {
            return i;
        }
    }
    return -1;
}

document.write(indexOf(arr, 5));