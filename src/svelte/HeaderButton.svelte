<script>
    /**
     * @type function
     */
    export let callback

    /**
     * @type string
     */
    export let label
</script>

<style>
    button {
        color: white;
        background: transparent;
        border: transparent;
        cursor: pointer;
    }
</style>

<button on:click={callback.call(null)}>{label}</button>