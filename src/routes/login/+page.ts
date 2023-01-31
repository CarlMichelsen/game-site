import { redirect, type LoadEvent } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = async (loadEvent: LoadEvent) => {
	const { session } = await loadEvent.parent();

	if (session) {
		console.log('already logged in');
		throw redirect(302, '/home');
	}
	return {};
};
