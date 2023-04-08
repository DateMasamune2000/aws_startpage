<script>
    // @ts-ignore
    import { each } from "svelte/internal";
    import Bookmark from "./Bookmark.svelte";
    import { bookMarks } from "./stores";
    export let Desc = "default";

    let currentBookmark = ""
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
        <input type="url" on:keypress={addBookmark} bind:value={currentBookmark} class="form-control" placeholder="Bookmark a tab..." aria-label="Username" aria-describedby="basic-addon1">
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
</style>