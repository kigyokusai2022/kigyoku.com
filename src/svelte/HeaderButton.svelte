<!-- ヘッダーのボタン -->
<script>
    /**
     * 引数なしのFunction。クリック時に呼び出される
     * @type Function
     */
    export let callback

    /**
     * ボタンのラベル
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