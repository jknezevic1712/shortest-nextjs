import LinkDTO from '@/dtos/link';

export default interface ILinksRepository {
	fetchLinks(): Promise<LinkDTO[]>;
	createLink(link: LinkDTO): Promise<LinkDTO[]>;
	deleteLink(linkId: string): Promise<LinkDTO[]>;
}
