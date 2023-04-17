import { writable } from "svelte/store";

export const todosList = writable([])
export const bookMarks = writable([])
export const userLogin = writable(false)
export const email = writable()
export const database_url = "http://54.236.118.194"

export let weatherData = writable({ "tmp": 0, "hum": 0 });

export const refreshWeather = async (lat, lng) => {
	const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lng + "&hourly=temperature_2m,relativehumidity_2m");

	const data = await response.json();

	return ({
		"tmp": data.hourly["temperature_2m"][0],
		"hum": data.hourly["relativehumidity_2m"][0],
		"unit": data.hourly_units["temperature_2m"]
	});
}

