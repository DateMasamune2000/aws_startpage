<script>
  import { each } from "svelte/internal";

    export let Desc = "default"
    let todosList = []
    let currentTodo = ""
    function addTodo(e){
        if(e.key === "Enter"){
        todosList.push(currentTodo)
        todosList = todosList
        currentTodo = ""
        }
    }
</script>

<div class="card-text">

<p>{Desc = "Add or remove your Todos at the click of a button"}</p>
<p>
    {#each todosList as todo,i}
        <input type="checkbox" id={i} name="todo1">
        <label for={i}>{todo}</label><br>
    {/each}
</p>
<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input type="text" on:keypress={addTodo} bind:value={currentTodo} class="form-control" placeholder="Add a Todo..." aria-label="Username" aria-describedby="basic-addon1">
  </div>
</div>