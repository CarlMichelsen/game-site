<script lang="ts">
	import Profile from "./Profile.svelte";
    export let loggedIn: boolean;
</script>

{#if loggedIn}
<div class="grid grid-cols-2">
    <Profile username="Carl" />
    <div></div>
</div>
{:else}
    <h1 class="font-bold text-3xl text-center mt-2">
        <span class="text-green-800">Current</span><span class="text-green-600">Capitalism</span>
    </h1>
{/if}