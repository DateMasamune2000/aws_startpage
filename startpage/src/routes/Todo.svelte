<script>
    import { todosList } from "./stores";
    import { email } from "./stores";
    export let todo = ""
    export let index

    function getTodos(){
        return fetch(`http://localhost:3000/delete/todos/${$email}/${index}`)
    }

    function deleteSelf(){
        console.log(index)
        $todosList.splice(index,1)
        getTodos().then(response=>response.json()).catch((e)=>console.log(e))
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