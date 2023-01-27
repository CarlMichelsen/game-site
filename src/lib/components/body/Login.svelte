<script lang="ts">
    import githubIcon from '$lib/images/github-icon.svg';
    import googleIcon from '$lib/images/google-icon.svg';
    import steamIcon from '$lib/images/steam-icon.svg';

    import IconCallToAction from '../util/IconCallToAction.svelte';
    import LoginButton from '../util/LoginButton.svelte';
    import ValidatedInput from '../util/form/ValidatedInput.svelte';
    
	
</script>

<div class="mx-auto w-96 text-center">
    <h2 class="relative text-xl font-bold">Play now!</h2>
    

    <br />
    <ValidatedInput id="login-email-field" type="email" placeholder="email" />
    <br />
    <ValidatedInput id="login-password-field" type="password" placeholder="password" />
    <br />

    <LoginButton on:click={() => console.log("CurrentCapitalism")}>Login</LoginButton>
    <br />
    <br />
    <div class="space-y-2">
        <IconCallToAction icon={steamIcon} text="Login with Steam" on:click={() => console.log("Steam")}/>
        <IconCallToAction icon={githubIcon} text="Login with Github" on:click={() => console.log("Github")}/>
        <IconCallToAction icon={googleIcon} text="Login with Google" on:click={() => console.log("Google")}/>
    </div>
</div>