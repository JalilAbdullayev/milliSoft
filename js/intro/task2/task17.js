var text = 'Lorem ipsum ipsum dolor sit amet amet consectetur adipiscing elit.';

var textSplit = text.split(' ');
var count;

for(var i = 0; i < textSplit.length; i++) {
    count = 0;
    for(var j = 0; j < textSplit.length; j++) {
        if(textSplit[i] === textSplit[j]) {
            count++;
        }
    }
    if(count >= 2) {
        console.log(`${textSplit[i]}-${count}`);
    }
}