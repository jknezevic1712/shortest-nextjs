// types
import type ILinksRepository from '@/repositories/links';
import type { LinkDelete, LinkInsert, LinkUpdate } from '@/shared/types/types';

export default class LinksService {
	private _linksRepository: ILinksRepository;

	constructor(linksRepository: ILinksRepository) {
		this._linksRepository = linksRepository;
	}

	async fetchLinks() {
		const links = await this._linksRepository.fetchLinks();
		return links.map((link) => link.toPlainObject()).reverse();
	}

	async createLink(link: LinkInsert) {
		const links = await this._linksRepository.createLink(link);
		return links.map((link) => link.toPlainObject()).reverse();
	}

	async editLink(link: LinkUpdate) {
		const links = await this._linksRepository.editLink(link);
		return links.map((link) => link.toPlainObject()).reverse();
	}

	async deleteLink(link: LinkDelete) {
		const links = await this._linksRepository.deleteLink(link);
		return links.map((link) => link.toPlainObject()).reverse();
	}
}
