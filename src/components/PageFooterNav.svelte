<script>
    const basePath = import.meta.env.BASE_URL;
</script>

<nav class="grain-background">
    <div class="container">
        <div>
            Copyright 2023&nbsp;<a href="https://github.com/tuanchauict">@tuanchauict</a>
        </div>
        <div>
            <a href="{basePath}commerce-disclosure">Commerce disclosure</a>
        </div>
    </div>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: #374259;
        padding: 1.5rem 2rem;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        color: #fff;
        font-size: 0.9rem;
    }

    a {
        color: #78C1F3;
        text-decoration: none;
    }
</style>