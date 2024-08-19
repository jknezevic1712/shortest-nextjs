// utils
import { databaseClient } from '@database/database';
import {
	FetchLinksError,
	CreateLinkError,
	EditLinkError,
	DeleteLinkError,
} from '@/shared/errors/linksError';
import LinkDTO from '@/shared/dtos/linkDTO';
import { v7 as uuidv7 } from 'uuid';
// types
import type { ILinksRepository } from '.';
import type { DatabaseClient } from '@database/database';
import type { LinkInsert, LinkUpdate, LinkDelete } from '@/shared/types/types';

export class LinksRepository implements ILinksRepository {
	private _db: DatabaseClient;

	constructor() {
		this._db = databaseClient;
	}

	public async fetchLinks() {
		const { data, error } = await this._db.from('links').select();

		if (error) {
			throw new FetchLinksError(error.message, {
				cause: error.details,
			});
		}

		return data.map((item) => LinkDTO.fromDb(item));
	}

	public async createLink(link: LinkInsert) {
		// TODO generate actual shortened link
		const newLink = {
			id: uuidv7(),
			original: link.original,
			shortened: `https://shortened.io/sowlj3`,
		};

		const { error } = await this._db.from('links').insert(newLink);

		if (error) {
			throw new CreateLinkError(error.message, {
				cause: error.details,
			});
		}
	}

	public async editLink(link: LinkUpdate) {
		const { error } = await this._db
			.from('links')
			.update({
				original: link.original,
				shortened: link.shortened,
			})
			.eq('id', link.id);

		if (error) {
			throw new EditLinkError(error.message, {
				cause: error.details,
			});
		}
	}

	public async deleteLink(link: LinkDelete) {
		const { error } = await this._db.from('links').delete().eq('id', link.id);

		if (error) {
			throw new DeleteLinkError(error.message, {
				cause: error.details,
			});
		}
	}
}
