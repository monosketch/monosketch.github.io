<script>
    import Sponsor from "./Sponsor.svelte";
    import Kofi from "../../shared/icon/Kofi.svelte";
    import GitHubSponsor from "../../shared/icon/GitHubSponsor.svelte";
    import Space from "../../shared/Space.svelte";
</script>

<h2>Support</h2>

<p>If you would like to support the project financially, you can do so by becoming a GitHub Sponsor or
    contributing via Kofi.</p>

<Space height="2rem"/>
<div class="sponsor-list">
    <Sponsor
            title="Ko-Fi"
            color="#29abe0"
            href="https://ko-fi.com/M4M5MRS2T">
        <Kofi/>
    </Sponsor>
    <Space width="4rem"/>
    <Sponsor
            title="GitHub Sponsor"
            color="#C539B4"
            href="https://github.com/sponsors/tuanchauict">
        <GitHubSponsor size="{20}"/>
    </Sponsor>
</div>

<style>
    h2 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
    }

    .sponsor-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        justify-content: center;
    }

</style>