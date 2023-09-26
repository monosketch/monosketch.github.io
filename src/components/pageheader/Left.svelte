<script>
    import NonBreak from "../shared/NonBreak.svelte";

    const basePath = import.meta.env.BASE_URL;
</script>

<div class="brand">
    <h1><a href="{basePath}"><NonBreak>MonoSketch [*]</NonBreak></a></h1>
</div>

<style>
    .brand {
        padding: 0 1rem;
    }

    h1 {
        font-size: 1.3rem;
    }

    a {
        text-decoration: none;
        color: #000;
    }
</style>