// utils
import { databaseClient } from '@database/database';
import { dummyLinks } from '@/app/_lib/utils/dashboard/dataTable';
import {
	FetchLinksError,
	CreateLinkError,
	EditLinkError,
	DeleteLinkError,
} from '@/shared/errors/linksError';
// types and interfaces
import LinkDTO from '@/shared/dtos/link';
import ILinksRepository from '.';
import type { DatabaseClient } from '@database/database';

// TODO: If testing environment, use TestingLinksRepository
export default class LinksRepository implements ILinksRepository {
	private _db: DatabaseClient;

	constructor() {
		this._db = databaseClient;
	}

	private generateTestLinks() {
		return dummyLinks;
	}

	public async fetchLinks() {
		const { data, error } = await this._db.from('links').select();

		if (error) {
			throw new FetchLinksError(error.message, error.code, {
				cause: error.details,
			});
		}

		const links = data as LinkDTO[];
		return links;
	}

	public async createLink(link: LinkDTO) {
		const { error } = await this._db.from('links').insert({
			id: link.id,
			original: link.original,
			shortened: link.shortened!,
		});

		if (error) {
			throw new CreateLinkError(error.message, error.code, {
				cause: error.details,
			});
		}

		const links = await this.fetchLinks();
		return links;
	}

	public async editLink(link: LinkDTO) {
		const { error } = await this._db
			.from('links')
			.update({
				original: link.original,
				shortened: link.shortened,
			})
			.eq('id', link.id);

		if (error) {
			throw new EditLinkError(error.message, error.code, {
				cause: error.details,
			});
		}

		const links = await this.fetchLinks();
		return links;
	}

	public async deleteLink(link: LinkDTO) {
		const { error } = await this._db.from('links').delete().eq('id', link.id);

		if (error) {
			throw new DeleteLinkError(error.message, error.code, {
				cause: error.details,
			});
		}

		const links = await this.fetchLinks();
		return links;
	}
}
