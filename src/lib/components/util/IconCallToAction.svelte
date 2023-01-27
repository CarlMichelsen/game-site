<script lang="ts">
	import { createEventDispatcher } from "svelte";


    export let icon: string;
    export let text: string;
    const dispatch = createEventDispatcher();
</script>

<button 
    on:click={() => dispatch("click")}
    class="grid grid-cols-7 bg-neutral-700 hover:bg-neutral-500 h-12 w-72 mx-auto p-1 shadow-2xl rounded-sm">
    <img src={icon} alt="call-to-action" class="svg-icon flex-none" />
    <span class="col-span-6 text-center items-center font-bold mt-2">{text}</span>
</button>