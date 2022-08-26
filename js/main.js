/**
 * ハンバーガー処理
 */
$(function () {
    const menuButton = $('#menu-button');
    const menuHamburger = $('#menu-button .hamburger')
    const label = $('#menu-button .menu-label')
    const nav = $('.nav-mobile');
    nav.hide()
    menuButton.on('click', function () {
        switch (label.text()) {
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

/**
 * ヒーロー画面スクロール処理
 */
$(function () {
    let count = 1;
    const hero = document.getElementById("hero-images")
    setInterval(function () {
        hero.scrollTo({
                top: 0,
                left: count * window.innerWidth,
                behavior: 'smooth'
            }
        )
        count++;
        if(hero.children.length <= count) {
            count = 0
        }
    }, 10000);
})