<script>
    import DemoContent from "./DemoContent.svelte";
    import {catHello} from "$lib/graphs.js";
    import VSpace from "../shared/VSpace.svelte";
    import CtaButton from "../shared/CtaButton.svelte";
    import Github from "../shared/icon/Github.svelte";
    import NonBreak from "../shared/NonBreak.svelte";

</script>

<section>
    <VSpace space="1em"/>
    <div class="graph">
        <DemoContent value="{catHello}"/>
    </div>
    <VSpace space="2em"/>
    <h1>MonoSketch is <NonBreak>Open source</NonBreak></h1>
    <p>
        I'm passionate about creating ASCII graphs, versatile visual aids for demonstrations and code integration.
    </p>
    <p>
        After an unsuccessful search for a good solution, I was inspired to embark on this project.
    </p>
    <VSpace space="3em"/>
    <CtaButton url="https://github.com/tuanchauict/MonoSketch">
        <div class="cta">
            <div class="github-icon">
                <Github/>
            </div>
            Explore the source code
        </div>
    </CtaButton>
    <VSpace space="2em"/>

</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2em 0;
    }

    h1 {
        font-size: 2rem;
        font-weight: 200;
        margin: 0 0 1rem;
        padding: 0 2rem;
        text-align: center;
    }

    .graph {
        margin-left: 8rem;
        font-size: 1.2rem;
    }

    p {
        max-width: 50rem;
        margin: 0.5rem 2rem;
        text-align: center;
        font-size: 1.2rem;
        font-style: italic;
        font-weight: 200;
    }

    .cta {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .github-icon {
        margin-right: 0.8em;
        display: flex;
        justify-content: center;
    }
</style>

