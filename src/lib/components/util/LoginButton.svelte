<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<button 
    class="bg-green-800 hover:bg-green-600 h-12 w-72 mx-auto p-1 shadow-2xl rounded-sm font-bold text-lg"
    on:click={() => dispatch("click")}><slot /></button>