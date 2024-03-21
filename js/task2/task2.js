var arr = [1, 2, 3, 4, 4, 5, 6, 6, 7]

function unique(arr) {
    let unique = [];
    for(i = 0; i < arr.length; i++) {
        if(unique.indexOf(arr[i]) === -1) {
            //Təkrarlanan varsa götürülməsin
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(unique(arr))