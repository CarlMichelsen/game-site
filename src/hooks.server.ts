import type { Provider } from '@auth/core/providers';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import { environment } from '$lib/environment';

//console.log('secret', environment.githubAuthClientId, environment.githubAuthSecret);

const authConfigGithub = GitHub({
	clientId: environment.githubAuthClientId,
	clientSecret: environment.githubAuthSecret
});
const config: SvelteKitAuthConfig = {
	prefix: '/auth',
	providers: [authConfigGithub] as Provider[]
};

export const handle = SvelteKitAuth(config);

// disgusting
// https://www.reddit.com/r/sveltejs/comments/1030h1s/authjs_sveltekit/
