<script>
    import Card from "./Card.svelte";
  import Form from "./Form.svelte";
    import NavBar from "./NavBar.svelte";

  import { userLogin } from "./stores";

</script>

<div class="main-content">

{#if $userLogin==false}
  <Form/>
{:else}
<NavBar/>

<div class="mx-auto d-flex flex-sm-wrap justify-content-evenly cards" style="max-width: 60%;">
  <div class="p-2"><Card cardTitle="Bookmarks"/></div>
  <div class="p-2"><Card cardTitle="Todos"/></div>
  <div class="p-2"><Card cardTitle="Time"/></div>
  <div class="p-2"><Card cardTitle="Weather"/></div>
 

</div>
{/if}
</div>

<style>
  .cards{
    margin: auto;
  }
  .main-content{
    color: #FBF1D3;
    background-color: #242433;
    width: 100vw;
    height: 100vh;
    user-select: none;
  }
</style>