<script>
    export let Desc = "default"
    import { weatherData } from "./stores";
</script>

<div class="card-text">
<p>{Desc = "Get weather information"}</p>
<p>{weatherData.tmp}</p>
</div>

