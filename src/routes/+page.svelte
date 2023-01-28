<script lang="ts">
	import Login from "$lib/components/body/Login.svelte";
	import HeaderBar from "$lib/components/header/HeaderBar.svelte";

	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
</script>

<svelte:head>
	<title>CurrentCapitalism</title>
	<meta name="description" content="Landing page" />
</svelte:head>

<div class="container mx-auto">
	
	<HeaderBar loggedIn={false} />
	<section class="mt-20">
		{#if Object.keys($page.data.session || {}).length}
			{#if $page.data?.session?.user?.image}
				<span style="background-image: url('{$page.data.session.user.image}')" class="rounded-full" />
			{/if}
			<button on:click={() => signOut()}>sign out</button>
		{:else}
			<Login />
		{/if}
	</section>
</div>

<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.neutral.900);
	  color: theme(colors.neutral.100);
	}
</style>