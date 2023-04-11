<script>
    export let Desc = "default"
	export let coordinate_string = "";
    import { weatherData } from "./stores";
	import { refreshWeather } from "./stores";
	import { onMount } from "svelte";
	import Geolocation from "svelte-geolocation";

	let coordinateData = {
		"lat": 0,
		"long": 0,
	}

	async function setCoordinates () {
		let temp = coordinate_string.split(' ');
		coordinateData = {
			"lat": lat,
			"long": long
		};
	};

	async function rw() {
		setCoordinates();
		$weatherData = await refreshWeather(
				coordinateData["lat"],
				coordinateData["long"]);
	};

	let lat = 0;
	let long = 0;

	onMount(async() => {
		$weatherData = await refreshWeather(
				lat,
				long);
	});

	let visible = false;
	function toggleVisible() {
		visible = !visible;
	}

	let coords = [];

	async function setLocation() {
		$weatherData = await refreshWeather(
			coords[1],
			coords[0],
		);
	}

</script>

<Geolocation getPosition bind:coords />
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
Latitude: <input type="text" bind:value={lat} class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
</div>
<br/>
<div class="input-group mb-3">
Longitude: <input type="text" bind:value={long} class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
<button class="btn" id="basic_addon1" on:click={rw}>Set Coordinates</button>
</div>
</div>
<br/>
<div class="row">
<button class="btn btn-secondary" on:click={setLocation}>Use current location<button>
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
		background-color: #03C988;
	}
	button:hover{
		background-color: #03C988;
	}
</style>

