import { writable } from "svelte/store";

export const todosList = writable([])
export const bookMarks = writable([])
export const userLogin = writable(false)

export let weatherData = writable({ "tmp": 0, "hum": 0 });

export const refreshWeather = async (lat, lng) => {
	const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lng + "&hourly=temperature_2m");

	const data = await response.json();

	return ({
		"tmp": data.hourly["temperature_2m"][0],
		"hum": 50,
		"unit": data.hourly_units["temperature_2m"]
	});
}

