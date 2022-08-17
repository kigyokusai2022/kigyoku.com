$(function () {
    const hum = $('#hamburger, .close');
    const nav = $('.nav-mobile');
    hum.on('click', function() {
        nav.toggleClass('toggle');
    });
})