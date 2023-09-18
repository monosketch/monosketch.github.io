<script>
    import Left from "./pageheader/Left.svelte";
    import Right from "./pageheader/Right.svelte";
    import {onMount, onDestroy} from 'svelte';

    export let targetId = '';

    let isVisible = !targetId;

    /**
     * @type {IntersectionObserver}
     */
    let observer;

    /**
     * @type {HTMLElement | null}
     */
    let target;

    if (targetId) {
        onMount(() => {
            target = document.getElementById(targetId);
            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    isVisible = !entry.isIntersecting;
                });
            }, {
                rootMargin: '0px',
                threshold: 0.5
            });
            if (target) {
                observer.observe(target);
            }
        });

        onDestroy(() => {
            if (target && observer) {
                observer.unobserve(target);
            }
        });
    }
</script>

<nav class:visible={isVisible} class:gone={!isVisible}>
    <div class="container">
        <Left/>
        <Right/>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: 3rem;
        background: #ffffffef;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
        display: flex;
    }

    nav {
        transition: opacity 0.2s ease;
    }

    nav.visible {
        opacity: 1;
        pointer-events: auto;
    }

    nav.gone {
        opacity: 0;
        pointer-events: none;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
</style>