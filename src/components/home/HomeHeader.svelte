<script>
    import PageInfo from "./HomePageInfo.svelte";
    import CtaButton from "../shared/CtaButton.svelte";
    import VSpace from "../shared/VSpace.svelte";
    import DemoContent from "./DemoContent.svelte";
    import {circus} from "$lib/graphs.js";
</script>
<div class="header-background">
    <div class="header-container">
        <div class="info">
            <PageInfo/>

            <VSpace space="2.5rem"/>
            <CtaButton url="https://app.monosketch.io/" title="Start sketching" darkMode={true}/>
        </div>
        <div class="demo-container">
            <DemoContent value="{circus}" isEditable="{true}" />
        </div>

    </div>
</div>

<style>
    .header-background {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: #213555;
        color: white;
        height: 85vh;
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
        /*outline: 1px solid #ff0000;*/
    }

    .demo-container {
        padding: 0 2rem;
        /*outline: 1px solid #ff0000;*/
    }

    @media (max-width: 76rem) {
        .header-background {
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
        }
    }
</style>