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
Latitude<br/>
<input type="text" bind:value={lat} class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
Longitude:<br/>
<input type="text" bind:value={long} class="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
</div>
<br/>
<div class="row">
<button class="btn btn-primary" id="btn-primary" on:click={rw}>Set Coordinates</button>
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

