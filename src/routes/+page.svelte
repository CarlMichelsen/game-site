<script lang="ts">
	import HeaderBar from "$lib/components/header/HeaderBar.svelte";
	import LoginButton from "$lib/components/util/LoginButton.svelte";

	const play = () => {
		window.location.href = "/home";
	}
</script>

<svelte:head>
	<title>CurrentCapitalism</title>
	<meta name="description" content="Landing page" />
</svelte:head>

<div class="container mx-auto">
	
	<HeaderBar loggedIn={false} />
	<section class="mt-20">
		<div class="w-72 mx-auto">
			<LoginButton on:click={play}>Start Playing</LoginButton>
		</div>
	</section>
</div>