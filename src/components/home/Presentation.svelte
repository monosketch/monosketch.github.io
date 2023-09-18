<script>
    import {presentationAscii, presentationGithubAction} from "$lib/graphs.js";
    import DemoContent from "../shared/DemoContent.svelte";
    import Space from "../shared/Space.svelte";
</script>

<section class="grain-background">
    <Space height="4rem"/>
    <h1 class="section-title">Presentations</h1>
    <Space height="2rem"/>
    <p class="section-subtitle quote">Thanks to MonoSketch, I no longer rely on Power Point or Google Presentations to craft my presentations.</p>
    <Space height="1rem"/>
    <div class="graph">
        <a class="graph-item" href="">
            <DemoContent value="{presentationAscii}" isEditable="{false}"/>
        </a>
        <a class="graph-item" href="">
            <DemoContent value="{presentationGithubAction}" isEditable="{false}"/>
        </a>
    </div>

    <p class="footnote">* ASCII font is not supported yet</p>
    <Space height="4rem"/>
</section>

<style>
    section {
        background-color: #713ABE;
        color: white;
    }

    .graph {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 72rem;
        padding: 1rem;
        font-size: 0.7rem;
    }

    .graph-item {
        color: black;
        border: 1px solid #ccc;
        padding: 1rem;
        width: 32rem;
        border-radius: 4px;
        margin: 1rem;
        background: white;
        box-shadow: 6px 6px 1px #0004;
        flex-shrink: 0;
    }

    .graph-item:hover {
        box-shadow: 6px 6px 1px #0008;
        background-color: #662549;
        color: #fff;
    }

    .footnote {
        text-align: center;
        font-style: italic;
        font-size: 0.7rem;
    }

    a {
        text-decoration: none;
    }

    .quote:before, .quote:after {
        position: absolute;
        font-family: "Times", "serif";
        font-size: 8rem;
        opacity: 0.3;
    }

    .quote:before {
        margin-left: -4.5rem;
        margin-top: -2.2rem;
    }

    .quote:after {
        margin-left: 0;
        margin-top: -1.5rem;
    }

    @media (max-width: 76rem) {
        .graph {
            flex-direction: column;
        }

        .graph-item {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 40rem;
            margin: 0 2rem 1rem;
        }
    }

    @media (max-width: 45rem) {
        .graph {
            font-size: calc(min(0.7rem, 0.8vw + 5px));
        }
    }
</style>