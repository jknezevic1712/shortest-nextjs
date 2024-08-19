// types
import type { ILinksRepository } from '@/repositories/links';
import type { LinkDelete, LinkInsert, LinkUpdate } from '@/shared/types/types';

export class LinksService {
	private _linksRepository: ILinksRepository;

	constructor(linksRepository: ILinksRepository) {
		this._linksRepository = linksRepository;
	}

	async fetchLinks() {
		const links = await this._linksRepository.fetchLinks();
		return links.map((link) => link.toPlainObject()).reverse();
	}

	async createLink(link: LinkInsert) {
		await this._linksRepository.createLink(link);
		return await this.fetchLinks();
	}

	async editLink(link: LinkUpdate) {
		await this._linksRepository.editLink(link);
		return await this.fetchLinks();
	}

	async deleteLink(link: LinkDelete) {
		await this._linksRepository.deleteLink(link);
		return await this.fetchLinks();
	}
}
