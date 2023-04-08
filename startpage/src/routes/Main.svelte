<script>
    import Card from "./Card.svelte";
    import NavBar from "./NavBar.svelte";
</script>

<div class="main-content">
<NavBar/>
<!-- <div class="mx-auto p-2" id="main-container">
<div class="container text-center ">
<div class="row g-2">
    <div class="col-6">
    <div class="p-3"><Card cardTitle="Bookmarks"/></div>
    </div>
    <div class="col-6">
    <div class="p-3"><Card cardTitle="Todos"/></div>
    </div>
    <div class="col-6">
    <div class="p-3"><Card cardTitle="Time"/></div>
    </div>
    <div class="col-6">
    <div class="p-3"><Card cardTitle="Weather"/></div>
    </div>
</div>
</div>
</div> -->
<div class="mx-auto d-flex flex-sm-wrap justify-content-evenly cards" style="max-width: 60%;">
  <div class="p-2"><Card cardTitle="Bookmarks"/></div>
  <div class="p-2"><Card cardTitle="Todos"/></div>
  <div class="p-2"><Card cardTitle="Time"/></div>
  <div class="p-2"><Card cardTitle="Weather"/></div>
  <!-- <div class="p-2"><Card cardTitle="Bookmarks"/></div> -->

</div>
</div>

<style>
  .cards{
    margin: auto;
  }
  .main-content{
    color: #FBF1D3;
    background-color: #282A3A;
    width: 100vw;
    height: 100vh;
  }
</style>