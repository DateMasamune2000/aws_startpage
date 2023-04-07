<script>
    import { bookMarks } from "./stores";
    export let bm = "";
    export let index

    function deleteBookmark(){
        $bookMarks.splice(index,1)
        $bookMarks = $bookMarks
    }
</script>

<div>
    <label for="bookmarks"><input type="radio" id="{index}" name="{bm}" on:click={()=>window.open(bm)}> {bm}</label>
    <i class="bi bi-x-circle" on:click={deleteBookmark} on:keypress={deleteBookmark}></i>
</div>

<style>
    i{
        float: right;
    }
</style>