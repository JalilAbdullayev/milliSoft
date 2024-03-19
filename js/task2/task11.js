var a = [1, 2, 3]
var b = [1, 2, 4, 5]


function compareArrays(a, b) {
    if(a.length !== b.length) {
        return "Element sayları fərqlidir."
    }
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            return "Elementlər fərqlidir."
        }
    }
    return "Array-lər bərabərdir."
}

console.log(compareArrays(a, b))