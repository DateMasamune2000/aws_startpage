<script>
    import { subscribe } from "svelte/internal";
    export let Desc = "default"
	export let coordinate_string = "";
    import { weatherData } from "./stores";
    import { coordinateData } from "./stores";
	import { refreshWeather } from "./stores";

	function setCoordinates () {
		let temp = coordinate_string.split(' ');
		let temp2 = {
			"lat": Number(temp[0]),
			"long": Number(temp[1])
		};

		$coordinateData = temp2;
	};
</script>

<div class="card-text">
<p>{Desc = "Get weather information"}</p>
<p>{$weatherData["tmp"]}</p>
    <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
<div class="input-group mb-3">
<button class="input_group_text" id="basic_addon1" on:click={refreshWeather}>@</button>
<input type="text" on:keypress={setCoordinates} bind:value={coordinate_string} class="form-control" placeholder="<x> <y>" aria-label="Username" aria-describedby="basic-addon1">
</div>
</div>

