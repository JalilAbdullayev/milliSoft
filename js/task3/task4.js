var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

for(var i = arr.slice(-1); i <= arr.length; i--) {
    if(arr[i] % 7 == 0) {
        console.log(arr[i])
        break
    }
}