import type { Provider } from '@auth/core/providers';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import { environment } from '$lib/environment';
import { redirect } from '@sveltejs/kit';

const authConfigGithub = GitHub({
	clientId: environment.githubAuthClientId,
	clientSecret: environment.githubAuthSecret
});

const config: SvelteKitAuthConfig = {
	trustHost: environment.development,
	secret: environment.authSecret,
	events: {
		async signIn() {
			redirect(302, '/home');
		}
	},
	providers: [authConfigGithub] as Provider[]
};

export const handle = SvelteKitAuth(config);
