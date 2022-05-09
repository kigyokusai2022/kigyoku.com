<script>
    import HeaderButton from "./HeaderButton.svelte";
</script>

<div class="header">
    <div class="logo">BEYOND</div>
    <div class="list-menu">
        <ul class="list">
            <li><HeaderButton callback={() => {}} label="ホーム"/></li>
            <li><HeaderButton callback={() => {}} label="日程"/></li>
            <li><HeaderButton callback={() => {}} label="イベント"/></li>
            <li><HeaderButton callback={() => {}} label="アクセス"/></li>
        </ul>
    </div>
</div>

<style>
    .header {
        color: white;
        margin-top: 0;
        background-color: #222222;
    }
    .list-menu{
        margin-bottom: 50px;
    }
    
    .logo {
        margin: 20px 0 20px 20px;
        float: left;
    }

    ul.list {
        margin: 0 30px 0 0;
        display: flex;
        justify-content: flex-end;
        list-style: none;
    }

    li {
        color: white;
        padding: 10px 50px 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>