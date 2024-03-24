var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "

function saitSil(text) {
    return text.replace(/[aeiou]/gi, '');
}

console.log(saitSil(text))