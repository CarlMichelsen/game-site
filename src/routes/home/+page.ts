import { redirect, type LoadEvent } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (loadEvent: LoadEvent) => {
	const { session } = await loadEvent.parent();
	if (!session) {
		console.log('home not allowed!');
		throw redirect(302, '/login');
	}
	console.log('home loaded');
	return {};
};
