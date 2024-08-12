// utils
import LinkDTO from '@/shared/dtos/link';
import { v7 as uuidv7 } from 'uuid';
import {
	CreateLinkError,
	DeleteLinkError,
	EditLinkError,
	FetchLinksError,
	UnknownLinksError,
} from '@/shared/errors/linksError';
// types
import ILinksRepository from '@/repositories/links';
import type { Link } from '@/shared/types/types';

export default class LinksService {
	private _linksRepository: ILinksRepository;

	constructor(linksRepository: ILinksRepository) {
		this._linksRepository = linksRepository;
	}

	async fetchLinks() {
		try {
			const links = await this._linksRepository.fetchLinks();
			return links.reverse();
		} catch (error) {
			if (error instanceof FetchLinksError) {
				throw new FetchLinksError(error.message, error.status, {
					cause: error.cause,
				});
			}

			throw new UnknownLinksError(
				'Unknown error ocurred, please try again later.',
				'ERROR'
			);
		}
	}

	async createLink(originalUrl: string) {
		const linkDTO = new LinkDTO({
			id: uuidv7(),
			original: originalUrl,
			shortened: `https://shortened.io/sowlj3`,
		});

		try {
			const links = await this._linksRepository.createLink(linkDTO);
			return links.reverse();
		} catch (error) {
			if (error instanceof CreateLinkError) {
				throw new CreateLinkError(error.message, error.status, {
					cause: error.cause,
				});
			}

			throw new UnknownLinksError(
				'Unknown error ocurred, please try again later.',
				'ERROR'
			);
		}
	}

	async editLink(link: Link) {
		const linkDTO = new LinkDTO({
			id: link.id,
			original: link.original,
			shortened: link.shortened,
		});

		try {
			const links = await this._linksRepository.editLink(linkDTO);
			return links.reverse();
		} catch (error) {
			if (error instanceof EditLinkError) {
				throw new EditLinkError(error.message, error.status, {
					cause: error.cause,
				});
			}

			throw new UnknownLinksError(
				'Unknown error ocurred, please try again later.',
				'ERROR'
			);
		}
	}

	async deleteLink(link: Link) {
		const linkDTO = new LinkDTO({
			id: link.id,
			original: link.original,
			shortened: link.shortened,
		});

		try {
			const links = await this._linksRepository.deleteLink(linkDTO);
			return links.reverse();
		} catch (error) {
			if (error instanceof DeleteLinkError) {
				throw new DeleteLinkError(error.message, error.status, {
					cause: error.cause,
				});
			}

			throw new UnknownLinksError(
				'Unknown error ocurred, please try again later.',
				'ERROR'
			);
		}
	}
}
