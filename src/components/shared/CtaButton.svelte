<script>
    /** @type {string} */
    export let title;

    /** @type {string} */
    export let url;

    export let openInNewTab = true;

    let target = openInNewTab ? "_blank" : "";
</script>

<div class="cta-container">
    <a href="{url}" target={target}>
        <button>{title}</button>
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
        border: 2px solid black;
        color: black;
        width: 100%;
        padding: 0.5rem;
        font-family: "Jetbrains Mono", "Fira code", "Courier New", Courier, monospace;
        cursor: pointer;
    }

    .cta-container button:hover {
        border-color: blue;
        color: blue;
    }

    .cta-container button:active {
        border-color: #444;
        color: #444;
        background-color: rgba(0, 13, 255, 0.06);
    }

    .cta-container button:focus {
        outline: none;
        border-color: #0000e8;
        color: #0000e8;
    }
</style>