<script>
  // @ts-ignore
	import { each } from "svelte/internal";
	import Todo from "./Todo.svelte";
	export let Desc = "default"
	import { todosList } from "./stores";
    let currentTodo = ""
    // @ts-ignore
    function addTodo(e){
        if(e.key === "Enter"){
        $todosList.push(currentTodo)
        $todosList = $todosList
        currentTodo = ""
        }
    }

</script>

<div class="todosCard card-text">

<p>{Desc = "Add or remove your Todos at the click of a button."}</p>
<p>
    {#each $todosList as todo,i}
        <Todo todo={todo} index={i}/>
    {/each}
</p>
  <div class="input-group mb-3">
      <input type="text" on:keypress={addTodo} bind:value={currentTodo} class="form-control" placeholder="Add a Todo..." aria-label="Username" aria-describedby="basic-addon1">
  </div>
  <div>
    <button class="btn" type="submit">Save Todos</button>
  </div>
</div>

<style>
	input{
		border: none;
		color:beige;
		background-color: #282A3A;
	}
	input:focus{
		outline: none;
		color:beige;
		background-color: #282A3A;
	}
	input::placeholder{
		color:beige;
	}
	button{
		width: 100%;
		background-color: #4f88b9;
	}
	button:hover{
		background-color: #4f88b9;
	}
</style>
