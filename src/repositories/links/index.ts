import LinkDTO from '@/shared/dtos/link';

export default interface ILinksRepository {
	fetchLinks(): Promise<LinkDTO[]>;
	createLink(link: LinkDTO): Promise<LinkDTO[]>;
	editLink(link: LinkDTO): Promise<LinkDTO[]>;
	deleteLink(link: LinkDTO): Promise<LinkDTO[]>;
}
