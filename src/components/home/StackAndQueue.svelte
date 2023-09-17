<script>
    import {stack, queue} from "$lib/graphs.js";
    import DemoContent from "./DemoContent.svelte";
    import Space from "../shared/Space.svelte";
</script>
<section>
    <h1>Simple data structure</h1>
    <Space height="1rem"/>
    <div class="graph">
        <div class="graph-item">
            <DemoContent value="{stack}" isEditable="{true}"/>
        </div>
        <div class="graph-item">
            <DemoContent value="{queue}" isEditable="{true}"/>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5rem 0;
    }

    h1 {
        font-size: 2rem;
        font-weight: 200;
    }

    .graph {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0 2rem;
        width: 100%;
        max-width: 100rem;
        font-size: calc(min(0.9rem, 0.6vw + 5px));
    }
    .graph-item {
        margin: 0 1rem;
    }

    @media (max-width: 76rem) {
        .graph {
            flex-direction: column;
            font-size: calc(min(1rem, 0.6vw + 7px));
        }
        .graph-item {
            margin: 1rem 0 0;
        }
    }
</style>