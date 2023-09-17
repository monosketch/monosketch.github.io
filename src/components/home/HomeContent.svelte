<script>
    import DemoSpace from "./DemoSpace.svelte";
    import HomeHeader from "./HomeHeader.svelte";
    import OpenSource from "./OpenSource.svelte";
    import Wonder from "../shared/Wonder.svelte";
</script>

<main class="container">
    <HomeHeader/>
    <OpenSource/>
    <Wonder/>
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