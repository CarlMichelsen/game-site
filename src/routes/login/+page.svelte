<script lang="ts">
    import HeaderBar from "$lib/components/header/HeaderBar.svelte";
    import Login from "$lib/components/body/Login.svelte";
    import { page } from "$app/stores";

    const isLoggedIn = (pageStore: typeof $page) => {
        console.log("isLoggedIn", pageStore);
        if (Object.keys(pageStore.data?.session || {}).length) {
		    window.location.href = "/home";
        }
	}

    $: isLoggedIn($page);
</script>

<HeaderBar loggedIn={false} />

<section class="mt-20">
    <Login />
</section>