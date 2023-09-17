<script>
    /** @type {string} */
    export let title = "";

    /** @type {string} */
    export let url;

    export let openInNewTab = true;

    export let darkMode = false;

    let target = openInNewTab ? "_blank" : "";
</script>

<div class="cta-container" class:dark={darkMode}>
    <a href="{url}" target={target}>
        <button>
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
        background: transparent;
        border: 2px solid #000;
        color: #000;
        width: 100%;
        padding: 0.7rem 2rem;
        font-size: 1rem;
        font-family: "Jetbrains Mono", "Fira code", "Courier New", Courier, monospace;
        cursor: pointer;
    }

    .cta-container button:hover {
        /*border-color: blue;*/
        /*color: blue;*/
        background: #FFCC70;
        text-shadow: 1.5px 1.5px 1px #fff;
        /*box-shadow: 1px 1px 1px #000;*/
    }

    .cta-container button:active {
        border-color: #444;
        color: #444;
        background-color: rgba(0, 13, 255, 0.06);
    }

    .cta-container button:focus {
        outline: none;
    }

    .cta-container.dark button {
        border-color: #fff;
        color: #fff;
    }

    .cta-container.dark button:hover {
        background: #22668D;
        font-weight: bold;
        text-shadow: 1.5px 1.5px 1px #000;
    }
</style>