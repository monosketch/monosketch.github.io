<script>
    import CtaButton from "../shared/CtaButton.svelte";
    import VSpace from "../shared/VSpace.svelte";
    import PageTitle from "./HomeInfo.svelte";
    import GithubCta from "./GithubCta.svelte";
</script>

<main class="container">

    <div class="info">
        <PageTitle/>

        <VSpace space="2.5rem"/>
        <CtaButton url="https://app.monosketch.io/" title="Start sketching"/>
        <GithubCta/>
    </div>
    <div class="demo-space">
        <div class="demo-container">
            <pre id="demo-content"></pre>
        </div>
        <div class="demo-page-indicators"></div>
    </div>
</main>