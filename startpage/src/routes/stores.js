import { writable } from "svelte/store";

const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=12.97&longitude=77.59&hourly=temperature_2m");

const data = await response.json();

console.log(data);

export const weatherData = {
	"tmp": data.hourly["temperature_2m"][0],
	"hum": 50,
};
