var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" +
    " dolore magna aliqua.";

function substring(str, start, end) {
    var result = '';
    for(var i = start; i < end && i < str.length; i++) {
        result += str[i];
    }
    return result;
}

document.write(substring(text, 1, 25))