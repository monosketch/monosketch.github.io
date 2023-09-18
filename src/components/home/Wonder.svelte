<script>
    import Space from "../shared/Space.svelte";

    /** @type {string} */
    export let title;
    export let description = '';
</script>

<section>
    <h1>{title}</h1>
    <Space height="1rem"/>
    {#if {description}}
        <h2>See examples</h2>
    {/if}
</section>

<style>
    section {
        padding: 4rem 2rem;
        background-color: white;
    }

    h1 {
        text-align: center;
        font-size: 2.5em;
        font-weight: 200;
    }

    h2 {
        text-align: center;
        font-size: 2em;
        font-weight: 200;
        font-style: italic;
        display: none;
    }
</style>