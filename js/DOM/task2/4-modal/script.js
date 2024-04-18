let array = [{
    name: 'Image 1',
    image: 'image1.jpg'
}, {
    name: 'Image 2',
    image: 'image2.webp'
}, {
    name: 'Image 3',
    image: 'image3.avif'
}, {
    name: 'Image 4',
    image: 'image4.avif'
}];

array.forEach((element, index) => {
    let image = document.createElement('img');
    image.setAttribute('src', 'image/' + element.image);
    image.setAttribute('alt', element.name);
    image.setAttribute('onclick', 'showModal(' + index + ')');
    document.getElementById('container').appendChild(image);
});

function showModal(i) {
    let modalContainer = document.createElement('div');
    modalContainer.setAttribute('id', 'modal-container');
    document.body.appendChild(modalContainer);

    modalContainer.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    let modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    modalContainer.appendChild(modal);

    let modalImg = document.createElement('img');
    modalImg.setAttribute('src', 'image/' + array[i].image);
    modal.appendChild(modalImg);

    let title = document.createElement('h3');
    let titleText = document.createTextNode(array[i].name);
    title.appendChild(titleText);
    modal.appendChild(title);

    let close = document.createElement('span');
    close.setAttribute('class', 'close');
    let closeIcon = document.createTextNode("X");
    close.appendChild(closeIcon);
    modal.appendChild(close);

    close.addEventListener('click', () => {
        modalContainer.style.display = "none";
    })

    modalContainer.style.display = "flex";
}