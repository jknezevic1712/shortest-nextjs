// utils
import LinkDTO from '@/shared/dtos/link';
import { v7 as uuidv7 } from 'uuid';
import { LinksError } from '@/shared/errors/linksError';
// types
import ILinksRepository from '@/repositories/links';
import type { Link } from '@/app/_lib/types/links';

export default class LinksService {
	private _linksRepository: ILinksRepository;

	constructor(linksRepository: ILinksRepository) {
		this._linksRepository = linksRepository;
	}

	async fetchLinks() {
		const { links, error } = await this._linksRepository.fetchLinks();

		if (error) {
			throw new LinksError(error.message, { cause: error.details });
		}

		return links.reverse();
	}

	async createLink(originalUrl: string) {
		const linkDTO = new LinkDTO({
			id: uuidv7(),
			original: originalUrl,
			shortened: `https://shortened.io/sowlj3`,
		});

		const { links, error } = await this._linksRepository.createLink(linkDTO);

		if (error) {
			throw new LinksError(error.message, { cause: error.details });
		}

		return links.reverse();
	}

	async editLink(link: Link) {
		const linkDTO = new LinkDTO({
			id: link.id,
			original: link.original,
			shortened: link.shortened,
		});

		const { links, error } = await this._linksRepository.editLink(linkDTO);

		if (error) {
			throw new LinksError(error.message, { cause: error.details });
		}

		return links.reverse();
	}

	async deleteLink(link: Link) {
		const linkDTO = new LinkDTO({
			id: link.id,
			original: link.original,
			shortened: link.shortened,
		});

		const { links, error } = await this._linksRepository.deleteLink(linkDTO);

		if (error) {
			throw new LinksError(error.message, { cause: error.details });
		}

		return links.reverse();
	}
}
