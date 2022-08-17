$(function () {
    const hum = $('#hamburger');
    const humLabel = $('#hamburger .hamburger-label')
    const nav = $('.nav-mobile');
    hum.on('click', function() {
        hum.toggleClass('open-hamburger');
        switch(humLabel.text()) {
            case "メニュー":
                humLabel.text("閉じる");
                break;
            case "閉じる":
                humLabel.text("メニュー");
                break;
        }
        nav.fadeToggle()
    });
})