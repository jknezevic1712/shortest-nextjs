// utils
import { databaseClient } from '@database/database';
import { dummyLinks } from '@/app/_lib/utils/dashboard/dataTable';
import { LinksError } from '@/shared/errors/linksError';
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

		const links = data as LinkDTO[];

		return {
			links,
			error,
		};
	}

	public async createLink(link: LinkDTO) {
		const { error } = await this._db
			.from('links')
			.insert({
				id: link.id,
				original: link.original,
				shortened: link.shortened!,
			})
			.select('*');

		const { links, error: fetchLinksError } = await this.fetchLinks();

		if (fetchLinksError) {
			throw new LinksError(fetchLinksError.message, {
				cause: fetchLinksError.details,
			});
		}

		return {
			links,
			error,
		};
	}

	public async editLink(link: LinkDTO) {
		const { error } = await this._db
			.from('links')
			.update({
				original: link.original,
				shortened: link.shortened,
			})
			.eq('id', link.id);

		const { links, error: fetchLinksError } = await this.fetchLinks();

		if (fetchLinksError) {
			throw new LinksError(fetchLinksError.message, {
				cause: fetchLinksError.details,
			});
		}

		return {
			links,
			error,
		};
	}

	public async deleteLink(link: LinkDTO) {
		const { error } = await this._db
			.from('links')
			.delete()
			.eq('id', link.id)
			.select('*');

		const { links, error: fetchLinksError } = await this.fetchLinks();

		if (fetchLinksError) {
			throw new LinksError(fetchLinksError.message, {
				cause: fetchLinksError.details,
			});
		}

		return {
			links,
			error,
		};
	}
}
