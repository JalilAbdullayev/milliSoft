$(document).ready(() => {
    let headerImg = $('#header-img img');
    let galleryImg = $('.gallery-img');
    let currentImage = 0;

    function changeImage() {
        currentImage = (currentImage + 1) % galleryImg.length;
        headerImg.attr('src', galleryImg.eq(currentImage).children().first().attr('src'));
    }

    let interval = setInterval(changeImage, 3000);

    galleryImg.click(function() {
        currentImage = $(this).index();
        headerImg.attr('src', $(this).children().first().attr('src'));
        clearInterval(interval);
    })

    headerImg.attr('src', galleryImg.eq(0).children().first().attr('src'));

    $('#next').click(() => {
        changeImage();
    })

    $('#previous').click(() => {
        currentImage = (currentImage - 1 + galleryImg.length) % galleryImg.length;
        headerImg.attr('src', galleryImg.eq(currentImage).children().first().attr('src'));
    })
})
