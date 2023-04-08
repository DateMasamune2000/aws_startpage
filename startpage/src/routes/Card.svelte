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
    {:else}
   <Weather/>
    {/if}
  </div>
</div>


<style>

  .card{
    color: #FFFFC1;
    background-color: #5715b9;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: height 1s ease-in-out;
  }

  .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.404);
  }

</style>

