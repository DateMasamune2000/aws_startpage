<script>
  // @ts-ignore
	import { each,onMount } from "svelte/internal";
	import Todo from "./Todo.svelte";
	import { todosList } from "./stores";
	import { email } from "./stores";

	onMount(setTodos)
	function getTodos(){
		return fetch(`http://localhost:3000/todos/${$email}`)
	}

	function setTodos(){
		getTodos().then(response=>response.json()).then((data)=>{
			$todosList = data
			console.log(data)
		}).catch((e)=>console.log(e))
	}

	function sendTodos(){
		var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        var raw = JSON.stringify({"email":$email,"todos": $todosList});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch("http://localhost:3000/todos", requestOptions)
	}

	function createTodos(){
		sendTodos().then(response=>response.json()).catch((e)=>console.log('error',e))
	}

	export let Desc = "default"
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
    <button class="btn" type="submit" on:click={createTodos}>Save Todos</button>
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
