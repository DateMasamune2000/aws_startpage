<script>
    import { database_url } from "./stores";
    import { bookMarks } from "./stores";
    import { email } from "./stores";
    export let bm = "";
    export let index

    function getBookmarks(){
        return fetch(`http://54.236.118.194:3000/delete/bookmarks/${$email}/${index}`)
    }

    function deleteBookmark(){
        console.log(index)
        $bookMarks.splice(index,1)
        getBookmarks().then(response=>response.json()).catch((e)=>console.log(e))
        $bookMarks = $bookMarks
    }
</script>

<div>
    <label for="bookmarks" id="{index}" name="{bm}" on:click={()=>window.open(bm)}> {bm}</label>
    <i class="bi bi-x-circle" on:click={deleteBookmark} on:keypress={deleteBookmark}></i>
</div>

<style>
    i{
        float: right;
    }
</style>