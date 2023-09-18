<script>

    /** @type {string} */
    export let title;

    /** @type {string} */
    export let href;

    /** @type {string} */
    export let color;
</script>

<a href="{href}" style="background-color: {color}">
    <slot></slot>
    <span class="title">{title}</span>
</a>

<style>
    a {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        text-decoration: none;
        color: white;
        background: inherit;
        min-height: 40px;
        padding: 0 16px 0 12px;
        border-radius: 20rem;

        box-shadow: 1px 2px 1px #000;
    }

    .title {
        margin-left: 4px;
        font-size: 14px;
        font-weight: bold;
    }

    a:hover .title{
        text-shadow: 0 0 4px #FFE9A0;
    }
</style>