<script lang="ts">
	import Login from "$lib/components/body/Login.svelte";
	import HeaderBar from "$lib/components/header/HeaderBar.svelte";
</script>

<svelte:head>
	<title>CurrentCapitalism</title>
	<meta name="description" content="Game app" />
</svelte:head>

<div class="container mx-auto">
	<HeaderBar loggedIn={false} />
	<br />
	<br />
	<br />
	<section>
		<Login />
	</section>
</div>

<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.neutral.900);
	  color: theme(colors.neutral.100);
	}
</style>