import type { Provider } from '@auth/core/providers';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import { GITHUB_AUTH_CLIENT_ID, GITHUB_AUTH_SECRET } from '$env/static/private';

console.log('Very secret', GITHUB_AUTH_CLIENT_ID, GITHUB_AUTH_SECRET);
const authConfigGithub = GitHub({
	clientId: GITHUB_AUTH_CLIENT_ID,
	clientSecret: GITHUB_AUTH_SECRET
});
const config: SvelteKitAuthConfig = {
	prefix: '/auth',
	providers: [authConfigGithub] as Provider[]
};

export const handle = SvelteKitAuth(config);

// disgusting
// https://www.reddit.com/r/sveltejs/comments/1030h1s/authjs_sveltekit/
