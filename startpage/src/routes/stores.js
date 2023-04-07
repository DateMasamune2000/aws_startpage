import { writable } from "svelte/store";

export let coordinateData = {
	"lat": 0,
	"long": 0,
};

export let weatherData = { "tmp": 0, "hum": 0 };

await weatherData;

export const refreshWeather = async () => {
	const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + coordinateData["lat"] + "&longitude=" + coordinateData["long"] + "&hourly=temperature_2m");

	const data = await response.json();

	weatherData = {
		"tmp": data.hourly["temperature_2m"][0],
		"hum": 50,
	};
}
