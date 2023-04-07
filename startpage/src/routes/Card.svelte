<script>
  import Bookmarks from "./Bookmarks.svelte";
  import Todos from "./Todos.svelte";
  import Weather from "./Weather.svelte";
  export let cardTitle = "Default"
</script>


<div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">{cardTitle}</h5>
    {#if cardTitle==='Bookmarks'}
    <Bookmarks/>    
    {:else if cardTitle==='Todos'}
    <Todos/>
    {:else if cardTitle==='Bookmarks'}
    <Bookmarks/>
	{:else}
	<Weather/>
    {/if}
  </div>
</div>
<style>

  .card{
    background-color: #ADA2FF;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

</style>

