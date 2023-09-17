<script>
    import VSpace from "./VSpace.svelte";
</script>

<section class="grain-background">
    <h1>Wonder what can we do with MonoSketch?</h1>
    <VSpace space="1rem" />
    <h2>See examples</h2>
</section>

<style>
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8rem 2rem;
        background-color: #8C3333;
        color: white;
    }

    h1 {
        text-align: center;
        font-size: 3em;
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