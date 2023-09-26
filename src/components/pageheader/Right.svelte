<script>
    import GitHubStars from "../shared/icon/GitHubStars.svelte";
    import NonBreak from "../shared/NonBreak.svelte";
</script>

<div class="tool">
    <a class="github-star" href="https://github.com/tuanchauict/MonoSketch/stargazers">
        <GitHubStars/>
    </a>
    <a class="cta" href="https://app.monosketch.io"><NonBreak>Start sketching</NonBreak></a>
</div>

<style>
    .tool {
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    .cta {
        padding: 0.4rem 1rem;
        font-size: 0.8rem;
        border: 1px solid #C51605;
        color: #C51605;
        font-weight: bold;
        border-radius: 1rem;
        margin: 0 1rem;
        box-shadow: 2.5px 2.5px 1px #DD4A48;
    }

    .cta:hover {
        background-color: #FD8D14;
        border-color: #FD8D14;
        color: white;
    }

    .github-star {
        display: flex;
    }

    a {
        text-decoration: none;
    }

    @media (max-width: 100rem) {
        .cta {
            display: none;
        }
        .github-star {
            margin-right: 1rem;
        }
    }
</style>