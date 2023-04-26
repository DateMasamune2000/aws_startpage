<script>
	import { InlineCalendar } from 'svelte-calendar';
	import { base } from '$app/paths';

	const theme = {
  "calendar": {
    "width": "250px",
    "maxWidth": "100vw",
    "legend": {
      "height": "30px"
    },
    "shadow": "0px 10px 26px rgba(0, 0, 0, 0.25)",
    "colors": {
      "text": {
        "primary": "#FFFFC1",
        "highlight": "#102770"
      },
      "background": {
        "primary": "#102770",
        "highlight": "#eb7400",
        "hover": "#eee"
      },
      "border": "#eee"
    },
    "font": {
      "regular": "14px",
      "large": "1px"
    },
    "grid": {
      "disabledOpacity": ".35",
      "outsiderOpacity": ".6"
    }
  }
}

let calendarOpened = false

function setYear(){
	let date = new Date("July 1 2023")
	Date.prototype.setTime(date)
}
	
</script>

{#if calendarOpened}
  <button class="btn" on:click={()=>{calendarOpened = false}}>Close Calendar</button>
<InlineCalendar {theme} />
<div>
  <button class="btn" on:click={()=>{setYear}}>Open Calendar</button>
</div>
{:else}
<div>
  <button class="btn" on:click={()=>{calendarOpened = true}}>Open Calendar</button>
</div>
{/if}


<style>

button{
    margin: 4px;
    width: 100%;
		background-color: #4f88b9;
	}
	button:hover{
		background-color: #4f88b9;
	}
</style>
