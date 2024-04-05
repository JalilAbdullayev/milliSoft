let headerImg = document.querySelector('#header-img img');
let galleryImg = document.getElementsByClassName('gallery-img');
let next = document.querySelector('#next');
let previous = document.querySelector('#previous');

for(let i = 0; i < galleryImg.length; i++) {
    galleryImg[i].addEventListener('click', () => {
        headerImg.src = galleryImg[i].children[0].src;
    })

    document.addEventListener('DOMContentLoaded', () => {
        headerImg.src = galleryImg[0].children[0].src;
    })
}

next.addEventListener('click', () => {
    if(headerImg.src === galleryImg[5].children[0].src) {
        headerImg.src = galleryImg[0].children[0].src;
    } else {
        for(let i = 0; i < galleryImg.length; i++) {
            if(headerImg.src === galleryImg[i].children[0].src) {
                headerImg.src = galleryImg[i + 1].children[0].src;
                break;
            }
        }
    }
})

previous.addEventListener('click', () => {
    if(headerImg.src === galleryImg[0].children[0].src) {
        headerImg.src = galleryImg[5].children[0].src;
    } else {
        for(let i = 0; i < galleryImg.length; i++) {
            if(headerImg.src === galleryImg[i].children[0].src) {
                headerImg.src = galleryImg[i - 1].children[0].src;
            }
        }
    }
})