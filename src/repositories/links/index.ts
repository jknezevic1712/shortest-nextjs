import LinkDTO from '@/shared/dtos/link';
// types
import type { LinkDelete, LinkInsert, LinkUpdate } from '../types';

export default interface ILinksRepository {
	fetchLinks(): Promise<LinkDTO[]>;
	createLink(link: LinkInsert): Promise<LinkDTO[]>;
	editLink(link: LinkUpdate): Promise<LinkDTO[]>;
	deleteLink(link: LinkDelete): Promise<LinkDTO[]>;
}
