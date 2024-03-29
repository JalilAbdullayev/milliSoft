var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula';

var vowel = 0;
text = text.toLowerCase();
for(var i = 0; i < text.length; i++) {
    if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
        vowel++;
    }
}
console.log(vowel)

//Regular Expressionla
var vowelCount = text.match(/[aeiou]/gi).length;
var consonantCount = text.match(/[qwrtypsdfghjklzxcvbnm]/gi).length;
console.log("Saitlər:", vowelCount);
console.log("Samitlər:", consonantCount);