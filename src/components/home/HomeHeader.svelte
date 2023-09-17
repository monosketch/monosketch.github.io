<script>
    import PageInfo from "./HomePageInfo.svelte";
    import CtaButton from "../shared/CtaButton.svelte";
    import Space from "../shared/Space.svelte";
    import DemoContent from "./DemoContent.svelte";
    import {circus} from "$lib/graphs.js";
</script>

<section class="grain-background">
    <div class="header-container">
        <div class="info">
            <PageInfo/>

            <Space height="2.5rem"/>
            <CtaButton url="https://app.monosketch.io/" title="Start sketching" darkMode={true}/>
        </div>
        <div class="demo-container">
            <DemoContent value="{circus}" isEditable="{true}" />
        </div>

    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #374259;
        color: white;
        height: 90vh;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 80rem;
    }

    .info {
        justify-content: flex-start;
        width: 32rem;
        flex-shrink: 0;
        padding: 2rem;
    }

    .demo-container {
        padding: 0 2rem;
        font-size: calc(min(0.9rem, 0.6vw + 7px));
    }

    @media (max-width: 76rem) {
        section {
            height: auto;
        }
        .header-container {
            flex-direction: column;
            justify-content: flex-start;
            height: auto;
            margin-top: 3rem;
            width: 100%;
            max-width: 50rem;
        }

        .info {
            width: 100%;
        }

        .demo-container {
            width: 100%;
            padding-bottom: 2rem;
            display: flex;
            justify-content: center;
            font-size: calc(min(1.2rem, 0.6vw + 7px));
        }
    }
</style>