<!-- ヒーロー画面 -->
<script>
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

    .hero {
        height: 100vh;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-image: url("img/hero.jpg");
        text-align: center;
        vertical-align: middle;
    }

    .box {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .text {
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        color: white;
        font-family: Quicksand, sans-serif;
        font-size: 80px;
        animation-name: show-text;
        animation-timing-function: ease;
        animation-duration: 3s;
    }

    @keyframes show-text {
        0% {
            transform: translateY(-100%) translateX(-50%);
            opacity: 0
        }
        100% {
            transform: translateY(-50%) translateX(-50%);
            opacity: 1;
        }
    }
</style>

<section class="hero">
    <div class="box">
        <div class="text">
            COMING SOON...
        </div>
    </div>
</section>