<script>
    /** @type {string} */
    export let title = "";

    /** @type {string} */
    export let url;

    export let openInNewTab = true;

    export let darkMode = false;

    let target = openInNewTab ? "_blank" : "";
</script>

<div class="cta-container" class:dark={darkMode} class:light={!darkMode}>
    <a href="{url}" target={target}>
        <button class="grain-background">
            {#if title}
                {title}
            {:else}
                <slot></slot>
            {/if}
        </button>
    </a>
</div>

<style>
    .cta-container {
        display: flex;
        justify-content: center;
    }

    .cta-container a {
        width: 100%;
    }

    .cta-container a:focus {
        outline: none;
    }

    .cta-container button {
        border: 2px solid #EA5455;
        color: #EA5455;
        width: 100%;
        padding: 0.7rem 2rem;
        font-size: 1rem;
        font-family: "Jetbrains Mono", "Fira code", "Courier New", Courier, monospace;
        cursor: pointer;
    }

    .cta-container.light button {
        background: #fff;
    }

    .cta-container button:hover {
        background-color: #FF6D60;
        color: white;
    }

    .cta-container button:active {
        background: #F45050;
    }

    .cta-container button:focus {
        outline: none;
    }

    .cta-container.dark button {
        background-color: #22668D;
        border-color: #fff;
        color: #fff;
    }

    .cta-container.dark button:hover {
        text-shadow: 1.5px 1.5px 1px #000;
        box-shadow: 2.5px 2.5px 1px #000;
    }

    .cta-container.dark button:active {
        text-shadow: 1px 1px 0px #000;
        box-shadow: 1px 1px 0px #000;
    }
</style>