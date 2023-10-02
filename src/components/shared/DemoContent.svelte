<script !src="">
    /** @type {string} */
    export let value = '';
    export let isEditable = false;

    function onBlue(e) {
        e.target.textContent = value;
    }
</script>

<pre contenteditable="{isEditable}" on:blur="{onBlue}">
    {#if value}
    {value}
    {:else}
        <slot></slot>
    {/if}
</pre>

<style>
    pre {
        font-family: "Jetbrains Mono", "Fira code", "Courier New", Courier, monospace;
        font-size: 1em;
        overflow-x: auto;
    }

    pre:active, pre:focus {
        outline: none;
    }
</style>