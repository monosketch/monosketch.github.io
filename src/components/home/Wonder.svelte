<script>
    import Space from "../shared/Space.svelte";
</script>

<section class="grain-background">
    <h1>More samples</h1>
    <Space height="1rem" />
    <h2>See examples</h2>
</section>

<style>
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem 2rem;
        background-color: white;
        /*color: white;*/
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