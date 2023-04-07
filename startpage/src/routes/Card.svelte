<script>
  import Bookmarks from "./Bookmarks.svelte";
  import Todos from "./Todos.svelte";
  export let cardTitle = "Default"
</script>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">

<div class="card" style="width: 18rem;">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">{cardTitle}</h5>
    {#if cardTitle==='Bookmarks'}
    <Bookmarks/>    
    {:else if cardTitle==='Todos'}
    <Todos/>
    {:else}
    <Bookmarks/>    
    {/if}
  </div>
</div>