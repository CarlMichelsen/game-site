<script lang="ts">
    import HeaderBar from "$lib/components/header/HeaderBar.svelte";
    import Login from "$lib/components/body/Login.svelte";
</script>

<HeaderBar loggedIn={false} />

<section class="mt-20">
    <Login />
</section>