

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