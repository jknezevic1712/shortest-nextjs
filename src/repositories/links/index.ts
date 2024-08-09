import LinkDTO from '@/shared/dtos/link';
import type { PostgrestError } from '@supabase/supabase-js';

export default interface ILinksRepository {
	fetchLinks(): Promise<{ links: LinkDTO[]; error: PostgrestError | null }>;
	createLink(
		link: LinkDTO
	): Promise<{ links: LinkDTO[]; error: PostgrestError | null }>;
	editLink(
		link: LinkDTO
	): Promise<{ links: LinkDTO[]; error: PostgrestError | null }>;
	deleteLink(
		link: LinkDTO
	): Promise<{ links: LinkDTO[]; error: PostgrestError | null }>;
}
