import { writable } from 'svelte/store'

export const todosList = writable([])
export const bookMarks = writable([])
export const userLogin = writable(false)