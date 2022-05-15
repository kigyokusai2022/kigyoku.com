<!-- ヘッダー -->
<script>
    import HeaderButton from "./HeaderButton.svelte";
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

    header {
        display: flex;
        width: 100%;
        height: 10vh;
        background-color: #333333;
        align-items: center;
    }

    .logo {
        color: white;
        margin-left: 50px;
        margin-right: auto;
        font-family: Quicksand, sans-serif;
        font-size: 40px;
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
