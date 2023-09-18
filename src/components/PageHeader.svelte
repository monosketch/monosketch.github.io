<script>
    import GitHubStars from "./shared/icon/GitHubStars.svelte";
    import Left from "./pageheader/Left.svelte";
    import Right from "./pageheader/Right.svelte";
</script>

<nav>
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

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
</style>