<script>
    import { onDestroy, tick } from 'svelte';
  
    let time = new Date();
    export let Desc = ""
    const updateTime = () => {
      time = new Date();
    };
  
    const interval = setInterval(updateTime, 1000);
  
    onDestroy(() => {
      clearInterval(interval);
    });
  
    tick();
</script>
  
<div class="card-text">
    <p>{Desc = "The current time is: "}</p> 
    <p>{time.toLocaleTimeString()}</p>  
</div>