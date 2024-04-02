let filter_fruit = document.getElementById('filter_fruit');
let filter_vegetable = document.getElementById('filter_vegetable');
let filter_driedFruit = document.getElementById('filter_driedFruit');
let filter_driedVegetable = document.getElementById('filter_driedVegetable');

let fruits = document.getElementById('fruits');
let vegetables = document.getElementById('vegetables');
let driedFruits = document.getElementById('driedFruits');
let driedVegetables = document.getElementById('driedVegetables');

filter_fruit.style.color = '#408858';

let style = document.createElement('style');
document.head.appendChild(style);

style.appendChild(document.createTextNode(`#${filter_fruit.id}::after {
            opacity: 1;
        }`));
style.appendChild(document.createTextNode(`#${filter_driedFruit.id}::after {
            opacity: 0;
        }`));
style.appendChild(document.createTextNode(`#${filter_driedVegetable.id}::after {
            opacity: 0;
        }`));
style.appendChild(document.createTextNode(`#${filter_vegetable.id}::after {
            opacity: 0;
        }`));

function filter() {
    filter_fruit.addEventListener('click', () => {
        filter_fruit.style.color = '#408858';
        filter_driedFruit.style.color = '#7B8E9D';
        filter_driedVegetable.style.color = '#7B8E9D';
        filter_vegetable.style.color = '#7B8E9D';

        style.appendChild(document.createTextNode(`#${filter_fruit.id}::after {
            opacity: 1;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedFruit.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedVegetable.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_vegetable.id}::after {
            opacity: 0;
        }`));

        fruits.style.opacity = '1';
        vegetables.style.opacity = '0';
        driedFruits.style.opacity = '0';
        driedVegetables.style.opacity = '0';

        setTimeout(() => {
            fruits.style.display = 'flex';
            vegetables.style.display = 'none';
            driedFruits.style.display = 'none';
            driedVegetables.style.display = 'none';
        }, 300);
    });

    filter_vegetable.addEventListener('click', () => {
        filter_fruit.style.color = '#7B8E9D';
        filter_vegetable.style.color = '#408858';
        filter_driedFruit.style.color = '#7B8E9D';
        filter_driedVegetable.style.color = '#7B8E9D';

        style.appendChild(document.createTextNode(`#${filter_fruit.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_vegetable.id}::after {
            opacity: 1;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedFruit.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedVegetable.id}::after {
            opacity: 0;
        }`));

        fruits.style.opacity = '0';
        vegetables.style.opacity = '1';
        driedFruits.style.opacity = '0';
        driedVegetables.style.opacity = '0';

        setTimeout(() => {
            fruits.style.display = 'none';
            vegetables.style.display = 'flex';
            driedFruits.style.display = 'none';
            driedVegetables.style.display = 'none';
        }, 300);
    });

    filter_driedFruit.addEventListener('click', () => {
        filter_fruit.style.color = '#7B8E9D';
        filter_vegetable.style.color = '#7B8E9D';
        filter_driedFruit.style.color = '#408858';
        filter_driedVegetable.style.color = '#7B8E9D';

        style.appendChild(document.createTextNode(`#${filter_fruit.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_vegetable.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedFruit.id}::after {
            opacity: 1;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedVegetable.id}::after {
            opacity: 0;
        }`));

        fruits.style.opacity = '0';
        vegetables.style.opacity = '0';
        driedFruits.style.opacity = '1';
        driedVegetables.style.opacity = '0';

        setTimeout(() => {
            fruits.style.display = 'none';
            vegetables.style.display = 'none';
            driedFruits.style.display = 'flex';
            driedVegetables.style.display = 'none';
        }, 300);
    });

    filter_driedVegetable.addEventListener('click', () => {
        filter_fruit.style.color = '#7B8E9D';
        filter_vegetable.style.color = '#7B8E9D';
        filter_driedFruit.style.color = '#7B8E9D';
        filter_driedVegetable.style.color = '#408858';

        style.appendChild(document.createTextNode(`#${filter_fruit.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_vegetable.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedFruit.id}::after {
            opacity: 0;
        }`));
        style.appendChild(document.createTextNode(`#${filter_driedVegetable.id}::after {
            opacity: 1;
        }`));

        fruits.style.opacity = '0';
        vegetables.style.opacity = '0';
        driedFruits.style.opacity = '0';
        driedVegetables.style.opacity = '1';

        setTimeout(() => {
            fruits.style.display = 'none';
            vegetables.style.display = 'none';
            driedFruits.style.display = 'none';
            driedVegetables.style.display = 'flex';
        }, 300);
    });
}

filter();