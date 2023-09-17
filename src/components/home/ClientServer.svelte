<script>
    import {clientServer, clientServer2} from "$lib/graphs.js";
    import DemoContent from "./DemoContent.svelte";
    import VSpace from "../shared/VSpace.svelte";
</script>

<section class="grain-background">
    <div class="container">
        <h1>Client - Server<br/>communication</h1>
        <div class="graph">
            <h2>HTTPS</h2>
            <div class="graph-item">
                <DemoContent value="{clientServer}" isEditable="{true}"/>
            </div>
            <VSpace space="3rem"/>
            <h2>System</h2>
            <div class="graph-item">
                <DemoContent value="{clientServer2}" isEditable="{true}"/>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #377D71;
        color: white;
        padding: 4rem 2rem;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        max-width: 75rem;
    }

    h1 {
        font-size: 2rem;
        font-weight: 200;
        margin: 5rem 2rem;
    }

    .graph {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        font-size: calc(min(1.2rem, 0.7vw + 7px));
    }

    h2 {
        text-align: center;
    }
    .graph-item {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 57rem) {
        h1 {
            text-align: center;
        }
        .container {
            flex-direction: column;
            font-size: calc(min(1rem, 0.6vw + 7px));
        }
    }
</style>