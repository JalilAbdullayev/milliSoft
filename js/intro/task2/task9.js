var space = 'Lorem      ipsum dolor    sit     amet,      consectetur adipiscing elit. Donec a diam lectus. Sed sit' +
    ' amet       ipsum     mauris.     ';

function removeSpaces() {
    return space.replace(/\s/g, ' ');
}

document.write(removeSpaces())