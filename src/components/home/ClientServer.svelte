<script>
    import {clientServer, clientServer2} from "$lib/graphs.js";
    import DemoContent from "../shared/DemoContent.svelte";
    import Space from "../shared/Space.svelte";
</script>

<section class="grain-background">
    <div class="container">
        <h1 class="section-title">Client - Server<br/>communication</h1>
        <div class="graph">
            <div class="graph-item">
                <DemoContent value="{clientServer}" isEditable="{true}"/>
            </div>
            <Space height="3rem"/>
        </div>
    </div>
    <Space height="3rem"/>
    <div class="container reverse">
        <div class="graph">
            <div class="graph-item">
                <DemoContent value="{clientServer2}" isEditable="{true}"/>
            </div>
        </div>
        <h1 class="section-title">App<br/>System</h1>
    </div>
</section>

<style>
    section {
        flex-wrap: wrap;
        background-color: #A3423C;
        color: white;
        padding: 4rem 2rem;
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        max-width: 75rem;
    }

    .container.reverse {
        align-content: flex-end;
        justify-content: flex-end;
    }

    h1 {
        margin: 5rem 2rem;
    }

    .graph {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        font-size: calc(min(1.2rem, 0.7vw + 7px));
    }

    .graph-item {
        display: flex;
        justify-content: center;
    }

    @media (max-width: 68rem) {
        h1 {
            text-align: center;
            margin: 1rem;
        }

        .container {
            flex-direction: column;
            align-items: center;
            font-size: calc(min(1rem, 0.6vw + 5px));
        }

        .container.reverse {
            flex-direction: column-reverse;
        }
    }
</style>