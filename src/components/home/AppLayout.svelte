<script>
    import {appLayoutCatSearch, appLayoutForm, appLayoutMonoSketch} from "$lib/graphs.js";
    import Space from "../shared/Space.svelte";
    import DemoContent from "../shared/DemoContent.svelte";
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

<section class="background">
    <h1>UI mockup</h1>
    <Space height="2rem"/>

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
    <Space height="2rem"/>
</section>

<style>
    section {
        padding: 4rem 0;
        background-color: #fff;
        background-position: 1.3rem 1.85rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 200;
    }

    .carousel-container {
        width: 100%;
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

    .graph-item {
        margin: 0 1rem;
        font-size: calc(min(1.2rem, 0.6vw + 7px));
    }
</style>