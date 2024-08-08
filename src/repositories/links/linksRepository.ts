// utils
import supabaseClient from '@/_lib/supabase/server';
import { dummyLinks } from '@/app/_lib/utils/dashboard/dataTable';
// types and interfaces
import LinkDTO from '@/dtos/link';
import ILinksRepository from '.';
import type { SupabaseClient } from '@supabase/supabase-js';

// TODO: If testing environment, use TestingLinksRepository
// TODO: If error happens, throw your own error
export default class LinksRepository implements ILinksRepository {
	private _db: SupabaseClient;

	constructor() {
		this._db = supabaseClient;
	}

	private generateTestLinks() {
		return dummyLinks;
	}

	public async fetchLinks() {
		const { data, error } = await this._db.from('links').select();

		if (error) {
			throw new Error(error.code + ' ' + error.message);
		}

		if (!data) return [];

		const mappedData = data.map((item) => item);
		return mappedData as LinkDTO[];
	}

	public async createLink(link: LinkDTO) {
		const { error } = await this._db.from('links').insert({
			id: link.id,
			original: link.original,
			shortened: link.shortened,
		});

		if (error) {
			throw new Error(error.code + ' ' + error.message);
		}

		const newLinks = await this.fetchLinks();
		return newLinks;
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
			throw new Error(error.code + ' ' + error.message);
		}

		const newLinks = await this.fetchLinks();
		return newLinks;
	}

	public async deleteLink(link: LinkDTO) {
		const { error } = await this._db.from('links').delete().eq('id', link.id);

		if (error) {
			throw new Error(error.code + ' ' + error.message);
		}

		const newLinks = await this.fetchLinks();
		return newLinks;
	}
}
