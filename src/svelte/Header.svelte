<!-- ヘッダー -->
<script>
    import HeaderButton from "./HeaderButton.svelte";
    let a = "n"
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

    header {
        z-index: 10;
        display: flex;
        width: 100%;
        height: 100px;
        background-color: #333333;
        align-items: center;
        position: fixed;
    }

    .logo {
        color: white;
        margin-left: 50px;
        margin-right: auto;
        font-family: Quicksand, sans-serif;
        font-size: 45px;
    }

    ul {
        margin-right: 50px;
    }

    li {
        list-style: none;
        display: inline-block;
        padding: 10px;
    }
</style>

<header>
    <div class="logo">Kigyokusai 2022</div>
    <nav>
        <ul class="list">
<!--            <li><HeaderButton callback={() => {}} label="ホーム"/></li>-->
<!--            <li><HeaderButton callback={() => {}} label="日程"/></li>-->
<!--            <li><HeaderButton callback={() => {}} label="イベント"/></li>-->
<!--            <li><HeaderButton callback={() => {}} label="アクセス"/></li>-->
        </ul>
    </nav>
</header>
