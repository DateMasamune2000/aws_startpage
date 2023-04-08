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
<label class="form-check-label"><input type="checkbox"  class="form-check-input" id={index} name={todo}> {todo}</label>
<i class="bi bi-x-circle" on:click={deleteSelf} on:keypress={deleteSelf}></i>
</div>

<style>

    i{
        float: right;
    }    
</style>