var a = [1, 2, 3]
var b = [1, 2, 4, 5]


function compareArrays(a, b) {
    var count = 0;
    if(a.length !== b.length) {
        return "Element sayları fərqlidir."
    }
    for(let i = 0; i < a.length; i++) {
        if(a.sort()[i] == b.sort()[i]) {
            count++
        }
        if(count == a.length) {
            return "Array-lər bərabərdir."
        }
    }
    return "Array-lər bərabərdir."
}

console.log(compareArrays(a, b))