let input = document.querySelectorAll('input');
let cards = document.querySelector('#cards');
let card = document.querySelectorAll('.card');
let all = document.querySelector('#all');

function filter() {
    card.forEach((card) => {
        if(card.classList.contains(this.id)) {
            card.style.display = 'flex';
            cards.style.gap = '105px';
        } else {
            card.style.display = 'none';
        }
    });
}

input.forEach((input) => {
    input.addEventListener('click', filter);
})

all.addEventListener('click', () => {
    card.forEach((card) => {
        card.style.display = 'flex';
    });
});