<script lang="ts">
    import githubIcon from '$lib/images/github-icon.svg';
    import googleIcon from '$lib/images/google-icon.svg';
    import steamIcon from '$lib/images/steam-icon.svg';

    import IconCallToAction from '../util/IconCallToAction.svelte';
    import LoginButton from '../util/LoginButton.svelte';
    import ValidatedInput from '../util/form/ValidatedInput.svelte';
    
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';

    let authorizing = false;

    const wrappedSignIn = async (identityService: string) => {
        authorizing = true;
        await signIn(identityService);
        authorizing = false;
    }
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
        <IconCallToAction icon={steamIcon} text="Login with Steam" on:click={() => wrappedSignIn("steam")}/>
        <IconCallToAction icon={githubIcon} text="Login with Github" on:click={() => wrappedSignIn("github")}/>
        <IconCallToAction icon={googleIcon} text="Login with Google" on:click={() => wrappedSignIn("google")}/>
    </div>
</div>