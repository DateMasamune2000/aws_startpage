<script>
    export let Desc = "default"
	export let coordinate_string = "";
    import { weatherData } from "./stores";
	import { refreshWeather } from "./stores";
	import { onMount } from "svelte";

	let coordinateData = {
		"lat": 0,
		"long": 0,
	}

	async function setCoordinates () {
		let temp = coordinate_string.split(' ');
		var temp2 = {
			"lat": Number(temp[0]),
			"long": Number(temp[1])
		};

		coordinateData = temp2;
	};

	async function rw() {
		setCoordinates();
		$weatherData = await refreshWeather(
				coordinateData["lat"],
				coordinateData["long"]);
	};

	onMount(async() => {
		$weatherData = await refreshWeather(
				coordinateData["lat"],
				coordinateData["long"]);
	});

	let visible = false;
	function toggleVisible() {
		visible = !visible;
	}
</script>

<div class="card-text">
<p>{Desc = "Get weather information"}</p>
<ul>
<li>Temperature: {$weatherData["tmp"]} {$weatherData["unit"]}</li>
<li>Humidity: {$weatherData["hum"]}</li>
</ul>
<div class="container">
{#if visible}
<div class="row">
<button class="btn btn-primary" on:click={toggleVisible}>Hide location settings</button>
</div>
<br/>
<div class="row">
<div class="input-group mb-3">
<!-- <span class="input-group-text" id="basic-addon1">@</span> -->
<button class="btn" id="basic_addon1" on:click={rw}>@</button>
<input type="text" bind:value={coordinate_string} class="form-control" placeholder="<x> <y>" aria-label="Username" aria-describedby="basic-addon1">
</div>
</div>
{:else}
<div class="row">
<button class="btn" on:click={toggleVisible}>Show location settings</button>
</div>
{/if}
</div>
</div>

<style>
	button{
		background-color: #4f88b9;
	}
	button:hover{
		background-color: #4f88b9;
	}
</style>

