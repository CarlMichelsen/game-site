<script lang="ts">
	import { onMount } from "svelte";

    export let id: string;
	export let type: string;
	export let placeholder: string;
	export let value: string = "";
    export let update: boolean = false;

    const change = (text: string, updateFlag: boolean) => {
        console.log(`<${id}>`,"change", `"${text}"`, updateFlag);


        if (!updateFlag) return;
        update = false;
    };

    let ref: HTMLInputElement;
    $: change(value, update);
    onMount(() => ref && (ref.type = type));
</script>

<div class="validated-input-field">
    <label for={id} class="sr-only">{placeholder}</label>
    <input
        {id}
        {placeholder}
        bind:this={ref}
        bind:value
        class="w-full bg-transparent h-12 outline-none border-b focus:border-green-400 text-lg"
        />
</div>