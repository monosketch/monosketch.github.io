<script>
    import HomeHeader from "./HomeHeader.svelte";
    import OpenSource from "./OpenSource.svelte";
    import Wonder from "../shared/Wonder.svelte";
    import StackAndQueue from "./StackAndQueue.svelte";
    import ClientServer from "./ClientServer.svelte";
    import FooterNav from "../FooterNav.svelte";
    import AppLayout from "./AppLayout.svelte";
</script>

<main class="container">
    <HomeHeader/>
    <OpenSource/>
    <Wonder/>
    <StackAndQueue/>
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