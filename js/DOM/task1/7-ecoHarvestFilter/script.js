let filter_fruit = document.getElementById('filter_fruit');
let filter_vegetable = document.getElementById('filter_vegetable');
let filter_driedFruit = document.getElementById('filter_driedFruit');
let filter_driedVegetable = document.getElementById('filter_driedVegetable');

let fruits = document.getElementById('fruits');
let vegetables = document.getElementById('vegetables');
let driedFruits = document.getElementById('driedFruits');
let driedVegetables = document.getElementById('driedVegetables');

const products = [fruits, vegetables, driedFruits, driedVegetables];
const filters = [filter_fruit, filter_vegetable, filter_driedFruit, filter_driedVegetable];

let style = document.createElement('style');
document.head.appendChild(style);

function filterProduct(filter, product) {
    const productArr = products.filter(p => p !== product);
    const filterArr = filters.filter(f => f !== filter);
    filterArr.forEach(f => f.style.color = '#7B8E9D');
    filter.style.color = '#408858';
    let styles = "";
    filterArr.forEach(f => {
        if(f !== event.target) {
            styles += `#${f.id}::after {
            opacity: 0;
            }`;
        }
    });

    style.appendChild(document.createTextNode(`#${filter.id}::after {
            opacity: 1;
        }`));

    style.appendChild(document.createTextNode(styles));
    productArr.forEach(p => p.style.opacity = '0');

    product.style.opacity = '1';

    setTimeout(() => {
        productArr.forEach(p => p.style.display = 'none');
        product.style.display = 'flex';
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => filterProduct(filter_fruit, fruits));


filter_fruit.addEventListener('click', () => filterProduct(filter_fruit, fruits));

filter_vegetable.addEventListener('click', () => filterProduct(filter_vegetable, vegetables));

filter_driedFruit.addEventListener('click', () => filterProduct(filter_driedFruit, driedFruits));

filter_driedVegetable.addEventListener('click', () => filterProduct(filter_driedVegetable, driedVegetables));