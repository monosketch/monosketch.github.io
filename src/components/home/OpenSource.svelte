<script>
    import DemoContent from "./DemoContent.svelte";
    import {catHello} from "$lib/graphs.js";
    import Space from "../shared/Space.svelte";
    import CtaButton from "../shared/CtaButton.svelte";
    import Github from "../shared/icon/Github.svelte";
    import NonBreak from "../shared/NonBreak.svelte";

</script>

<section>
    <Space height="0.5em"/>
    <div class="graph">
        <DemoContent value="{catHello}"/>
    </div>
    <Space height="2em"/>
    <h1 class="section-title">MonoSketch is <NonBreak>Open source</NonBreak></h1>
    <p>
        I'm passionate about creating ASCII graphs, versatile visual aids for demonstrations and code integration.
    </p>
    <p>
        After an unsuccessful search for a good solution, I was inspired to embark on this project.
    </p>
    <Space height="3em"/>
    <CtaButton url="https://github.com/tuanchauict/MonoSketch">
        <div class="cta">
            <div class="github-icon">
                <Github/>
            </div>
            Explore the source code
        </div>
    </CtaButton>
    <Space height="2em"/>

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
        margin: 0 0 1rem;
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

