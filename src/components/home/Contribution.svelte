<script>
    import DemoContent from "../shared/DemoContent.svelte";
    import {contributionCats} from "$lib/graphs.js";
    import Space from "../shared/Space.svelte";
    import CtaButton from "../shared/CtaButton.svelte";
    import Github from "../shared/icon/Github.svelte";
    import SponsorList from "./contribution/SponsorList.svelte";

    const baseRepoUrl = "https://github.com/tuanchauict/MonoSketch";
    const licenseUrl = baseRepoUrl + "/blob/main/LICENSE";

    let isSupportEnabled = false;
</script>

<section>
    <div class="container">
        <h1>Contribution</h1>
        <Space height="2rem"/>
        <div>
            <p>MonoSketch is an open-source project licensed under the
                <a href="{licenseUrl}">Apache License 2.0</a>.
            </p>
            <p>If you find this project useful, please consider starring the repository on GitHub.
                Contributions are also welcome through pull requests or by opening issues on GitHub.</p>
            <Space height="2rem"/>

            <CtaButton url="{baseRepoUrl}">
                <div class="cta">
                    <div class="github-icon">
                        <Github/>
                    </div>
                    MonoSketch on GitHub
                </div>
            </CtaButton>
            {#if isSupportEnabled}
                <Space height="4rem"/>
                <SponsorList/>
            {/if}

        </div>


        <Space height="4rem"/>
        <div class="graph">
            <DemoContent value="{contributionCats}"/>
        </div>

    </div>
</section>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 50rem;
        padding: 4rem 2rem;
    }

    h1 {
        text-align: center;
        font-size: 2.5em;
        font-weight: 200;
    }


    .graph {
        color: #F39F5A;
        font-size: calc(min(1.2rem, 0.8vw + 5px));
    }

    p {
        margin-top: 0.5rem;
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