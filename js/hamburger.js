$(function () {
    const hum = $('#hamburger');
    const humLabel = $('#hamburger .hamburger-label')
    const nav = $('.nav-mobile');
    hum.on('click', function() {
        hum.toggleClass('open-hamburger');
        switch(humLabel.text()) {
            case "MENU":
                humLabel.text("CLOSE");
                break;
            case "CLOSE":
                humLabel.text("MENU");
                break;
        }
        nav.fadeToggle()
    });
})