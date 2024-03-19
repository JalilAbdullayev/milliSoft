var text = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. ab, accusamus? lorem ipsum dolor sit amet,' +
    ' consectetur adipisicing elit. ab, accusamus?';

function capitalize(text) {
    var arr = text.split(". ");
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(". ");
}

document.write(capitalize(text));