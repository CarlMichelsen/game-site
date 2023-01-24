<script lang="ts">
    import IconCallToAction from '../util/IconCallToAction.svelte';
    import githubIcon from '$lib/images/github-icon.svg';
    import googleIcon from '$lib/images/google-icon.svg';
</script>

<div class="mx-auto w-52">
    <IconCallToAction icon={githubIcon} text="Login with GitHub" on:click={() => console.log("github")}/>
    <br/>
    <IconCallToAction icon={googleIcon} text="Login with Google" on:click={() => console.log("google")}/>
</div>