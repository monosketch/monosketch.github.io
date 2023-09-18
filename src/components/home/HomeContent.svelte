<script>
    import HomeHeader from "./HomeHeader.svelte";
    import OpenSource from "./OpenSource.svelte";
    import Wonder from "./Wonder.svelte";
    import ClientServer from "./ClientServer.svelte";
    import FooterNav from "../FooterNav.svelte";
    import AppLayout from "./AppLayout.svelte";
    import BuildingBlocks from "./BuildingBlocks.svelte";
    import Presentation from "./Presentation.svelte";
    import Contribution from "./Contribution.svelte";
    import PageHeader from "../PageHeader.svelte";
</script>

<main class="container">
    <PageHeader targetId="brand-name"/>
    <HomeHeader/>
    <OpenSource/>
    <BuildingBlocks/>
    <Wonder title="More examples"/>
    <ClientServer/>
    <AppLayout/>
    <Presentation/>
    <Contribution/>
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