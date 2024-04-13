let headerImg = document.querySelector('#header-img img');
let galleryImg = document.getElementsByClassName('gallery-img');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');
let currentImage = 0;

function changeImage() {
    currentImage = (currentImage + 1) % galleryImg.length;
    headerImg.src = galleryImg[currentImage].children[0].src;
}

let interval = setInterval(changeImage, 3000);

for(let i = 0; i < galleryImg.length; i++) {
    galleryImg[i].addEventListener('click', () => {
        currentImage = i;
        headerImg.src = galleryImg[i].children[0].src;
        clearInterval(interval);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    headerImg.src = galleryImg[0].children[0].src;
})

next.addEventListener('click', () => {
    changeImage();
})

previous.addEventListener('click', () => {
    currentImage = (currentImage - 1 + galleryImg.length) % galleryImg.length;
    headerImg.src = galleryImg[currentImage].children[0].src;
})
