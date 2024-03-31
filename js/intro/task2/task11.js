var a = [1, 2, 3]
var b = [1, 2, 4, 5]


var count = 0;
if(a.length == b.length) {
    for(var i = 0; i < a.length; i++) {
        if(a.sort()[i] == b.sort()[i]) {
            count++
        }
    }
    if(count == a.length) {
        console.log("Array-lər bərabərdir.")
    } else {
        console.log("Array-lər fərqlidir.")
    }
} else {
    console.log("Array-lər fərqlidir.")
}