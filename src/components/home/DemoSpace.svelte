<script>
    import {graphs} from "$lib/graphs.js";
    import DemoContent from "./DemoContent.svelte";

    let index = graphs.length - 1;
    let demoContent = graphs[index];
    let demoContentIndicator = Array.from({length: graphs.length}, (_, i) => i === index ? '■' : '□').join('\n');
    $: demoContent = graphs[index];
    $: demoContentIndicator = Array.from({length: graphs.length}, (_, i) => i === index ? '■' : '□').join('\n');

    setInterval(() => {
        index = (index + 1) % graphs.length;
    }, 8000);
</script>

<div class="demo-space">
    <div class="demo-container">
        <DemoContent value="{demoContent}"/>
    </div>
    <pre class="demo-page-indicators">{demoContentIndicator}</pre>
</div>

<style>
    .demo-space {
        margin-top: 5rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 32rem;
        position: relative;
    }

    @media (min-width: 1200px) {
        .demo-space {
            align-items: center;
            width: 50rem;
            margin-top: 0;
            margin-left: 3.5rem;
        }
    }

    .demo-space .demo-page-indicators {
        display: flex;
        justify-content: center;
        height: 10rem;
    }

    @media (min-width: 700px) {
        .demo-space .demo-page-indicators {
            display: flex;
            position: absolute;
            right: -1rem;
            top: calc(50% - 5rem);
        }
    }

    .demo-container {
        max-height: 35rem;
        min-height: 20rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>