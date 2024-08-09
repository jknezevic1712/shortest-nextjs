// utils
import LinkDTO from '@/shared/dtos/link';
import { v7 as uuidv7 } from 'uuid';
// types
import ILinksRepository from '@/repositories/links';
import type { Link } from '@/app/_lib/types/links';

export default class LinksService {
	private _linksRepository: ILinksRepository;

	constructor(linksRepository: ILinksRepository) {
		this._linksRepository = linksRepository;
	}

	async fetchLinks() {
		const links = await this._linksRepository.fetchLinks();

		return links.reverse();
	}

	async createLink(originalUrl: string) {
		const linkDTO = new LinkDTO({
			id: uuidv7(),
			original: originalUrl,
			shortened: `https://shortened.io/sowlj3`,
		});

		const links = await this._linksRepository.createLink(linkDTO);

		return links.reverse();
	}

	async editLink(link: Link) {
		const linkDTO = new LinkDTO({
			id: link.id,
			original: link.original,
			shortened: link.shortened,
		});

		const links = await this._linksRepository.editLink(linkDTO);

		return links.reverse();
	}

	async deleteLink(link: Link) {
		const linkDTO = new LinkDTO({
			id: link.id,
			original: link.original,
			shortened: link.shortened,
		});

		const links = await this._linksRepository.deleteLink(linkDTO);

		return links.reverse();
	}
}
