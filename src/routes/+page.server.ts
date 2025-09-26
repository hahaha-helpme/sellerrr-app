import type { PageServerLoad } from './$types';
import { getHomepagePage } from '$lib/server/homepage';

export const prerender = true;

export const load: PageServerLoad = async () => ({
  page: getHomepagePage()
});
