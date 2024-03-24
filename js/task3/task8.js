var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function showRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

alert(showRandom(arr))