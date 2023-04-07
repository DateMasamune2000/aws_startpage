<script>
    import { todosList } from "./stores";
    export let todo = ""
    export let index

    function deleteSelf(){
        console.log("deleting self")
        $todosList.splice(index,1)
        $todosList = $todosList
    
    }
</script>


<div>
<label><input type="checkbox" id={index} name={todo}> {todo}</label>
<i class="bi bi-x-circle" on:click={deleteSelf}></i>
</div>

<style>
    
    i{
        float: right;
    }    
</style>