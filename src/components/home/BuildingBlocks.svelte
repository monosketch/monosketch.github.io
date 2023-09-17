<script>
    import {buildingBlocks, buildingBlocks2, simpleGraph} from "$lib/graphs.js";
    import DemoContent from "./DemoContent.svelte";
    import Space from "../shared/Space.svelte";
    import CtaButton from "../shared/CtaButton.svelte";
</script>
<section>
    <div class="graph">
        <div class="item-group">
            <div class="graph-item">
                <h2>with building blocks</h2>
                <DemoContent value="{buildingBlocks}" isEditable="{true}"/>
            </div>
            <Space height="2rem"/>
            <div class="graph-item">
                <h2>...and apply formats</h2>
                <DemoContent value="{buildingBlocks2}" isEditable="{true}"/>
            </div>
        </div>

        <div class="graph-item">
            <h2>the result</h2>
            <DemoContent value="{simpleGraph}" isEditable="{true}"/>
        </div>
    </div>

    <Space height="3rem"/>
    <div class="cta-container">
        <CtaButton url="https://app.monosketch.io/" title="Start sketching" darkMode={false}/>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 3rem 0;
    }

    h1 {
        font-size: 2rem;
        font-weight: 200;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 400;
        margin-bottom:0.5rem;
        padding: 0;
    }

    .graph {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 0 2rem;
        width: 100%;
        max-width: 100rem;
        font-size: calc(min(0.9rem, 0.8vw + 5px));
    }

    .item-group {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: flex-start;
        margin-right: 3rem;
    }

    .graph-item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
        align-items: center;
        margin: 0 2rem;
        /*outline: 1px solid red;*/
    }

    .cta-container {
        width: 100%;
        max-width: 40rem;
        padding: 0 2rem;
    }

    @media (max-width: 60rem) {
        .graph {
            flex-direction: column;
            align-items: center;
            font-size: calc(min(1.2rem, 1.3vw + 6px));
        }
        .graph-item {
            margin: 1rem 0 0;
        }

        .item-group {
            margin-right: 0;
            margin-bottom: 2rem;
        }

        .cta-container {
            max-width: 80rem;
        }
    }
</style>