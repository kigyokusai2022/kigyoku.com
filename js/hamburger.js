$(function () {
    const menuButton = $('#menu-button');
    const menuHamburger = $('#menu-button .hamburger')
    const label = $('#menu-button .menu-label')
    const nav = $('.nav-mobile');
    nav.hide()
    menuButton.on('click', function() {
        switch(label.text()) {
            case "メニュー":
                label.text("閉じる");
                break;
            case "閉じる":
                label.text("メニュー");
                break;
        }
        menuHamburger.toggleClass("open-hamburger")
        nav.fadeToggle()
    });
})