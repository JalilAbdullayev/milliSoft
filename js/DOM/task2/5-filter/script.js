let cards = document.querySelector('#cards');
let all = document.querySelector('#all');

let filters = ['nature', 'car', 'people'];
let elements = [{
    name: 'Nature 1',
    img: 'image/nature1.jpg',
    text: 'Lorem ipsum dolor...',
    category: filters[0]
}, {
    name: 'Nature 2',
    img: 'image/nature2.jpg',
    text: 'Lorem ipsum dolor...',
    category: filters[0]
}, {
    name: 'Nature 3',
    img: 'image/nature3.jpg',
    text: 'Lorem ipsum dolor...',
    category: filters[0]
}, {
    name: 'Car 1',
    img: 'image/car1.webp',
    text: 'Lorem ipsum dolor...',
    category: filters[1]
}, {
    name: 'Car 2',
    img: 'image/car2.webp',
    text: 'Lorem ipsum dolor...',
    category: filters[1]
}, {
    name: 'Car 3',
    img: 'image/car3.webp',
    text: 'Lorem ipsum dolor...',
    category: filters[1]
}, {
    name: 'People 1',
    img: 'image/people1.jpg',
    text: 'Lorem ipsum dolor...',
    category: filters[2]
}, {
    name: 'People 2',
    img: 'image/people2.jpg',
    text: 'Lorem ipsum dolor...',
    category: filters[2]
}, {
    name: 'People 3',
    img: 'image/people3.jpg',
    text: 'Lorem ipsum dolor...',
    category: filters[2]
}]

function createFilter() {
    filters.forEach((filter) => {
        document.querySelector('#filter').innerHTML += `
        <input type="radio" name="filter" id="${filter}"/>
        <label for="${filter}">
            ${filter}
        </label>
        `
    });
}

all.setAttribute('checked', '')
createFilter()

function createCard() {
    elements.forEach((element) => {
        cards.innerHTML += `
        <div class="card ${element.category}">
            <div class="card-img">
                <img src="${element.img}" alt=""/>
                <h3>
                    ${element.name}
                </h3>
                <p>
                    ${element.text}
                </p>
            </div>
        </div>
        `
    });
}

createCard()

function filter() {
    cards.innerHTML = '';
    let value = this.getAttribute('id');
    let result = elements.filter((element) => element.category === value);
    result.forEach((element) => {
        cards.innerHTML += `
        <div class="card ${element.category}">
            <div class="card-img">
                <img src="${element.img}" alt=""/>
                <h3>
                    ${element.name}
                </h3>
                <p>
                    ${element.text}
                </p>
            </div>
        </div>
        `
    });
    if(this.id === 'all') {
        createCard();
    }
}

document.querySelectorAll('input').forEach((el) => el.addEventListener('click', filter));