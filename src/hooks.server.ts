import type { Provider } from '@auth/core/providers';
import GitHub from '@auth/core/providers/github';
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import { environment } from '$lib/environment';

const authConfigGithub = GitHub({
	clientId: environment.githubAuthClientId,
	clientSecret: environment.githubAuthSecret
});
const providers = [authConfigGithub] as Provider[];
const config: SvelteKitAuthConfig = {
	trustHost: environment.development,
	providers: environment.development ? [] : providers
};

export const handle = SvelteKitAuth(config);
