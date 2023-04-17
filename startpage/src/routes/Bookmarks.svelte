<script>
    // @ts-ignore
    import { each, onMount } from "svelte/internal";
    import Bookmark from "./Bookmark.svelte";
    import { bookMarks } from "./stores";
    import { email } from "./stores";
    import { database_url } from "./stores";
    onMount(setBookmarks)
    function getBookmarks(){
        return fetch(`${database_url}:3000/bookmarks/${$email}`)
    }

    function setBookmarks(){
        getBookmarks().then(response=>response.json()).then((data)=>{
            $bookMarks = data
            console.log(data)
        }).catch((e)=>console.log(e))
    }

    function sendBookmarks(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        var raw = JSON.stringify({"email":$email,"bookMarks": $bookMarks});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch(database_url+":3000/bookmarks", requestOptions)
    }

    function createBookmarks(){
        sendBookmarks().then(response => response.json()).then(data=>console.log(data))
        .catch(error => console.log('error', error));
    }
    
    let currentBookmark = ""
    export let Desc = "default";
    // @ts-ignore
    function addBookmark(e){
        if(e.key === "Enter"){
            $bookMarks.push(currentBookmark)
            $bookMarks = $bookMarks
            currentBookmark = ""
        }
    }
</script>

<div class="card-text">
    <p>{Desc = "Easily save, import, organize and access."}</p>
    <p>
        {#each $bookMarks as bm,i}
            <Bookmark bm={bm} index={i}/>
        {/each}
    </p>
    <div class="input-group mb-3">
        <label for=""><input type="url" on:keypress={addBookmark} bind:value={currentBookmark} class="form-control" placeholder="Bookmark a tab..." aria-label="Username" aria-describedby="basic-addon1"></label>
    </div>
    <div>
        <button class="btn" type="submit" on:click={createBookmarks}>Save Bookmarks</button>
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