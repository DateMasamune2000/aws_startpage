<script>
    import Form from "./Form.svelte";
    import { userLogin } from "./stores";

    function logout(){
        $userLogin = false
    }
</script>
<!-- As a heading -->
<nav class="navbar">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-white">CC Project</span>
        <button on:click={logout} class="btn" role="search"><i class="bi bi-person" style="font-size: larger;"></i></button>
    </div>
    

</nav>


<style>

nav{
    background-color: #03C988;
}
</style>
