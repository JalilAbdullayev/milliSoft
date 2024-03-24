var arr = [11, 22, 43, 74, 95, 15, 47, 19, 70, 42, 88, 23, 36, 12, 13, 16, 17, 18, 19, 20];

var max = arr[0];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= max) {
        max = arr[i];
    }
}

var min = arr[0];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] <= min) {
        min = arr[i];
    }
}

document.write(max + "<br/>" + min);
