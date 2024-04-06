let images = document.querySelectorAll(".image");
let imagesImg = document.querySelectorAll(".image img");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
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
        modalImg.setAttribute('src', imagesImg[index].src);
        modal.appendChild(modalImg);

        let title = document.createElement('h3');
        let titleText = document.createTextNode(imagesImg[index].alt);
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
    });
});