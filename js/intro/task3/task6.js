var arr = [11, 22, 43, 74, 95, 15, 47, 19, 70, 42, 88, 23, 36, 12, 13, 16, 17, 18, 19, 20];

function movePositions(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] <= min) {
            //Ən kiçik olanı götürürük.
            min = arr[i];
            minIndex = i;
        }
        if(arr[i] >= max) {
            //Ən böyük olanı götürürük.
            max = arr[i];
            maxIndex = i;
        }
    }
    //Yerini dəyişirik.
    arr[maxIndex] = min;
    arr[minIndex] = max;
    return arr;
}

document.write(movePositions(arr));