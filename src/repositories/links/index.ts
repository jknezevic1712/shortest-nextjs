import LinkDTO from '@/shared/dtos/linkDTO';
// types
import type { LinkDelete, LinkInsert, LinkUpdate } from '@/shared/types/types';

export default interface ILinksRepository {
	fetchLinks(): Promise<LinkDTO[]>;
	createLink(link: LinkInsert): Promise<LinkDTO[]>;
	editLink(link: LinkUpdate): Promise<LinkDTO[]>;
	deleteLink(link: LinkDelete): Promise<LinkDTO[]>;
}
