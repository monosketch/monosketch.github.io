<script>
    import {appLayoutCatSearch, appLayoutForm, appLayoutMonoSketch} from "$lib/graphs.js";
    import VSpace from "../shared/VSpace.svelte";
    import DemoContent from "./DemoContent.svelte";
    import {onMount, onDestroy} from 'svelte';

    let currentSlide = 0;
    /**
     * @type {number}
     */
    let interval;

    const items = [
        appLayoutCatSearch,
        appLayoutMonoSketch,
        appLayoutForm
    ];

    const k = 1; // Number of items to swipe

    const swipe = () => {
        currentSlide += k;
        if (currentSlide >= items.length) {
            currentSlide = 0;
        }
    };

    onMount(() => {
        interval = setInterval(swipe, 4000);
    });

    onDestroy(() => {
        clearInterval(interval);
    });

</script>

<section>
    <h1>UI mockup</h1>
    <VSpace space="1rem"/>

    <div class="carousel-container ">
        <div class="carousel" style="width: {items.length*100}%;transform: translateX(-{currentSlide * 100 / items.length}%)">
            {#each items as item, index}
                <div class="carousel-item" key={index}>
                    <div class="graph-item">
                        <DemoContent value="{item}" isEditable="{true}"/>
                    </div>
                </div>

            {/each}
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

    .graph-item {
        margin: 0 1rem;
        font-size: calc(min(0.9rem, 0.6vw + 5px));
    }

    @media (max-width: 76rem) {
        .graph-item {
            margin: 1rem 0 0;
        }
    }

    .carousel-container {
        width: 100%;
        max-width: 60rem;
        overflow: hidden;
    }

    .carousel {
        display: flex;
        transition: transform 0.5s ease;
    }

    .carousel-item {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        align-items: center;
    }
</style>