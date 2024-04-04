let quotes = [
    {
        quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        author: 'Nelson Mandela'
    },
    {
        quote: 'The way to get started is to quit talking and begin doing.',
        author: 'Walt Disney'
    }, {
        quote: 'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.',
        author: 'Steve Jobs'
    },
    {
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        author: 'Eleanor Roosevelt'
    },
    {
        quote: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
        author: 'Oprah Winfrey'
    },
    {
        quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
        author: 'James Cameron'
    }
]

let p = document.createElement('p');
let h3 = document.createElement('h3');

let button = document.createElement('button');
let buttonText = document.createTextNode('Change');
button.appendChild(buttonText);
document.body.appendChild(button);

function quote() {
    let random = Math.floor(Math.random() * quotes.length);

    while (p.firstChild) p.removeChild(p.firstChild);
    let quote = document.createTextNode('"' + quotes[random].quote + '"');
    p.appendChild(quote);
    document.querySelector('div').appendChild(p);

    while (h3.firstChild) h3.removeChild(h3.firstChild);
    let author = document.createTextNode(quotes[random].author);
    h3.appendChild(author);
    document.querySelector('div').appendChild(h3);
}

document.addEventListener('DOMContentLoaded', quote);
button.addEventListener('click', quote);