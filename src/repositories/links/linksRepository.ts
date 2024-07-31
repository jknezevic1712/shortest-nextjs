import { dummyLinks } from '@/app/_lib/utils/dashboard/dataTable';
// interfaces
import LinkDTO from '@/dtos/link';
import ILinksRepository from '.';

export default class LinksRepository implements ILinksRepository {
	// TODO: To be of SupabaseClient type
	private _db: any;

	constructor() {
		this._db = false;
	}

	private generateTestLinks() {
		return dummyLinks.map((link) => LinkDTO.fromDb(link));
	}

	async fetchLinks() {
		const linkCollection = this.generateTestLinks();
		return linkCollection;
	}

	async createLink(link: LinkDTO) {
		const linkCollection = this.fetchLinks();
		return linkCollection;
	}

	async deleteLink(linkId: string) {
		const linkCollection = this.fetchLinks();
		return linkCollection;
	}
}
