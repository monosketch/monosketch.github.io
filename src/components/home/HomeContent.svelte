<script>
    import DemoSpace from "./DemoSpace.svelte";
    import HomeHeader from "./HomeHeader.svelte";
    import CtaButton from "../shared/CtaButton.svelte";
    import VSpace from "../shared/VSpace.svelte";
</script>

<main class="container">
    <HomeHeader/>
    <VSpace space="2rem"/>

    <VSpace space="2rem"/>
    <p>MonoSketch is an open source project</p>
    <VSpace space="2rem"/>
    <CtaButton url="https://app.monosketch.io/" title="Start sketching"/>
    <VSpace space="2rem"/>


    <DemoSpace/>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
    }
</style>