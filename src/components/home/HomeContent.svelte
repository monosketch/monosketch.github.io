<script>
    import HomeHeader from "./HomeHeader.svelte";
    import OpenSource from "./OpenSource.svelte";
    import Wonder from "./Wonder.svelte";
    import ClientServer from "./ClientServer.svelte";
    import FooterNav from "../FooterNav.svelte";
    import AppLayout from "./AppLayout.svelte";
    import BuildingBlocks from "./BuildingBlocks.svelte";
</script>

<main class="container">
    <HomeHeader/>
    <OpenSource/>
    <BuildingBlocks/>
    <Wonder/>
    <ClientServer/>
    <AppLayout/>
    <FooterNav/>
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