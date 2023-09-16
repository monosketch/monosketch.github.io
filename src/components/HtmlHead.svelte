<script>
    export let title = "MonoSketch - Unleash your ideas with ASCII";
    export let description = "MonoSketch is a powerful ASCII sketching and diagramming app that lets you effortlessly transform your ideas into visually stunning designs.";
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{description}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{description}">
    <meta property="og:url" content="https://monosketch.io/">
    <meta property="og:type" content="website">

    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BFGVEMQF8M"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'G-BFGVEMQF8M');
    </script>
</svelte:head>