<script>
    import VSpace from "../shared/VSpace.svelte";
</script>

<h2 id="brand-name">MonoSketch [*]</h2>
<h1>Unleash your ideas <span class="non-break">with ASCII <span class="character">&nbsp;</span></span></h1>
<VSpace space="0.5rem"/>
<p>MonoSketch is a powerful ASCII sketching and diagramming app that lets you effortlessly transform your
    ideas into visually stunning designs.</p>

<style>
    h1 {
        font-size: 2.4rem;
        font-weight: 400;
        margin: 0.8rem 0 0.4rem 0;
    }

    h2 {
        font-size: 1.4rem;
        font-weight: bold;
        color: white;
    }

    .character {
        outline: 4px solid white;
    }

    p {
        font-size: 1.2rem;
        line-height: 1.7rem;
        margin-bottom: 0.4rem;
    }

    .non-break {
        white-space: nowrap;
    }

    @media (max-width: 76rem) {
        h1 {
            margin-top: 4rem;
        }
    }
</style>
