import ILinksRepository from '@/repositories/links';

export default class LinksService {
	private _linksRepository: ILinksRepository;

	constructor(linksRepository: ILinksRepository) {
		this._linksRepository = linksRepository;
	}

	async fetchLinks() {
		const links = await this._linksRepository.fetchLinks();

		return links;
	}
}
