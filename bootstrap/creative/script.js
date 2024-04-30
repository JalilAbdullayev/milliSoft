$(document).ready(() => {
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
        } else if(scroll >= about && scroll < services) {
            $('.nav-link').removeClass('text-orange');
            $('.nav-link:first').addClass('text-orange');
        } else if(scroll >= services && scroll < portfolio) {
            $('.nav-link').removeClass('text-orange');
            $('.nav-link:eq(1)').addClass('text-orange');
        } else if(scroll >= portfolio && scroll < contact) {
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
        $(this).find('.hover').toggleClass('opacity-0');
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