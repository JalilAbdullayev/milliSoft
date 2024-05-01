$(document).ready(() => {
    const modalImg = $('.modal img');
    const modalText = $('.modal h4');
    const images = [{
        id: 1,
        src: 'image/1.jpg',
        name: 'Project Name'
    }, {
        id: 2,
        src: 'image/2.jpg',
        name: 'Project Name'
    }, {
        id: 3,
        src: 'image/3.jpg',
        name: 'Project Name'
    }, {
        id: 4,
        src: 'image/4.jpg',
        name: 'Project Name'
    }, {
        id: 5,
        src: 'image/5.jpg',
        name: 'Project Name'
    }, {
        id: 6,
        src: 'image/6.jpg',
        name: 'Project Name'
    }];

    images.forEach(image => {
        $('#portfolio').append(`
        <a class="col-4 m-0 p-0 position-relative" id="${image.id}" data-bs-toggle="modal" data-bs-target="#modal">
        <img src="${image.src}" class="img-fluid" alt=""/>
        <div class="hover w-100 h-100 position-absolute top-50 start-50 translate-middle opacity-0">
            <div class="text-center position-absolute top-50 start-50 translate-middle">
                <span class="text-white-50 fw-semibold">
                    CATEGORY
                </span>
                <h3 class="text-white">
                    ${image.name}
                </h3>
            </div>
        </div>
    </a>
        `);
    });
    $(window).scroll(() => {
        const about = $('#about').offset().top - 100;
        const services = $('#services').offset().top - 100;
        const portfolio = $('#portfolio').offset().top - 100;
        const contact = $('#download').offset().top - 100;
        const scroll = $(this).scrollTop();

        if(scroll > 0) {
            $('.navbar').addClass('bg-white').removeClass('bg-transparent').attr('data-bs-theme', 'light');
            $('.nav-link, .navbar-brand').addClass('shrink');
        } else {
            $('.navbar').addClass('bg-transparent').removeClass('bg-white').attr('data-bs-theme', 'dark');
            $('.nav-link, .navbar-brand').removeClass('shrink');
        }

        if(scroll < about) {
            $('.nav-link').removeClass('text-orange');
        } else if(scroll < services) {
            $('.nav-link').removeClass('text-orange');
            $('.nav-link:first').addClass('text-orange');
        } else if(scroll < portfolio) {
            $('.nav-link').removeClass('text-orange');
            $('.nav-link:eq(1)').addClass('text-orange');
        } else if(scroll < contact) {
            $('.nav-link').removeClass('text-orange');
            $('.nav-link:eq(2)').addClass('text-orange');
        } else if(scroll >= contact) {
            $('.nav-link').removeClass('text-orange');
            $('.nav-link:last').addClass('text-orange');
        }
    });

    $('nav a').hover(function() {
        $(this).toggleClass('opacity-100');
    });

    $('#portfolio a').hover(function() {
        $(this).find('.hover')
            .css('cursor', 'pointer')
            .toggleClass('opacity-0');
    }).click(function() {
        modalImg
            .attr('src', $(this).find('img').attr('src'))
            .attr('id', $(this).attr('id'));
        modalText.text($(this).find('h3').text());
    });

    $('#left').click(function() {
        const id = modalImg.attr('id');
        const index = images.findIndex(image => image.id == id);
        if(index > 0) {
            modalImg
                .attr('src', images[index - 1].src)
                .attr('id', images[index - 1].id);
            modalText.text(images[index - 1].name);
        } else {
            modalImg
                .attr('src', images[images.length - 1].src)
                .attr('id', images[images.length - 1].id);
            modalText.text(images[images.length - 1].name);
        }
    });

    $('#right').click(function() {
        const id = modalImg.attr('id');
        const index = images.findIndex(image => image.id == id);
        if(index < images.length - 1) {
            modalImg
                .attr('src', images[index + 1].src)
                .attr('id', images[index + 1].id);
            modalText.text(images[index + 1].name);
        } else {
            modalImg
                .attr('src', images[0].src)
                .attr('id', images[0].id);
            modalText.text(images[0].name);
        }
    });

    $('.form-control').focus(function() {
        $(this).toggleClass('focus');
    }).blur(function() {
        $(this).toggleClass('focus');
    });

    const forms = $('.needs-validation');

    forms.each((index, form) => {
        $(form).on('submit', event => {
            if(!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            $(form).addClass('was-validated');
        });
    });
});