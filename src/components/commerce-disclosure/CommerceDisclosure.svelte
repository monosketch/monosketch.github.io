<script>
    import PageHeader from "../PageHeader.svelte";
    import FooterNav from "../FooterNav.svelte";
    import Table from "./Table.svelte";
    import Space from "../shared/Space.svelte";
</script>
<main>
    <PageHeader/>
    <div class="content">
        <Space height="6rem"/>
        <h1 class="section-title">Commerce Disclosure</h1>
        <Space height="2rem"/>
        <Table/>

        <Space height="6rem"/>
    </div>
    <FooterNav/>
</main>
<style>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-direction: column;
        min-height: 100vh;
    }

    .content {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        max-width: 45rem;
    }
</style>