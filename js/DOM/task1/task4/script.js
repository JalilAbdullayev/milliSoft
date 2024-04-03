let div = document.querySelector('div');

let currentWidth = div.offsetWidth;
let currentHeight = div.offsetHeight;
let currenBorderWidth = parseFloat(getComputedStyle(div).getPropertyValue('border-width'));

window.addEventListener('change', () => {
    let width = document.getElementById('width').value;
    div.style.width = currentWidth + +width + 'px';

    let height = document.getElementById('height').value;
    div.style.height = currentHeight + +height + 'px';

    let borderWidth = parseFloat(document.getElementById('borderWidth').value);
    div.style.borderWidth = currenBorderWidth + borderWidth + 'px';
});