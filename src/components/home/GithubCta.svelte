<script>
    import Github from "../shared/icon/Github.svelte";
</script>

<div class="github">
    <a href="https://github.com/tuanchauict/MonoSketch" target="_blank">
        <div class="github-icon">
            <Github/>
        </div>

        Explore the source code
    </a>
</div>

<style>
    .github {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    a {
        display: flex;
        text-decoration: none;
        font-size: 0.9rem;
    }

    .github-icon {
        width: 22px;
        height: 22px;
        margin-right: 8px;
        margin-top: -1px;
    }
</style>