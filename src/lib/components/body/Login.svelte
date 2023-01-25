<script lang="ts">
    import IconCallToAction from '../util/IconCallToAction.svelte';
    import githubIcon from '$lib/images/github-icon.svg';
    import googleIcon from '$lib/images/google-icon.svg';
    import currentCapitalismIcon from '$lib/images/current-capitalism-icon.svg';
</script>

<div class="mx-auto w-72">
    <IconCallToAction icon={currentCapitalismIcon} text="CurrentCapitalism Login" on:click={() => console.log("CurrentCapitalism")}/>
    <br/>
    <IconCallToAction icon={githubIcon} text="Github Login" on:click={() => console.log("Github")}/>
    <br/>
    <IconCallToAction icon={googleIcon} text="Google Login" on:click={() => console.log("Google")}/>
</div>