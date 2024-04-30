$(window).scroll(() => {
    if($(this).scrollTop() > 0) {
        $('.navbar').addClass('bg-white').removeClass('bg-transparent').attr('data-bs-theme', 'light');
        $('.nav-link, .navbar-brand').addClass('shrinked');
    } else {
        $('.navbar').addClass('bg-transparent').removeClass('bg-white').attr('data-bs-theme', 'dark');
        $('.nav-link, .navbar-brand').removeClass('shrinked');
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

$(document).ready(() => {
    'use strict';

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