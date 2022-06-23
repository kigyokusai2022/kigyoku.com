<script>
    import Router from 'svelte-spa-router';
    import Header from "./Header.svelte";
    import Hero from "./Hero.svelte";

    const routes = {
        '/': Hero
    }
</script>

<style>
</style>



<Header/>
<Router {routes} />