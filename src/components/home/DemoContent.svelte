<script !src="">
    /** @type {string} */
    export let value;
    export let isEditable = false;

    function onBlue(e) {
        e.target.textContent = value;
    }
</script>

<pre contenteditable="{isEditable}" on:blur="{onBlue}">
    {value}
</pre>

<style>
    pre {
        font-family: "Jetbrains Mono", "Fira code", "Courier New", Courier, monospace;
        font-size: 0.85rem;
    }

    pre:active, pre:focus {
        outline: none;
    }
</style>