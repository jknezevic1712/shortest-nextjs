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

		if (!data) return [];

		const mappedData = data.map((item) => item);
		return mappedData as LinkDTO[];
	}

	public async createLink(link: LinkDTO) {
		const { data, error } = await this._db
			.from('links')
			.insert({
				id: link.id,
				original: link.original,
				shortened: link.shortened,
			})
			.select();

		return data as LinkDTO[];
	}

	public async editLink(link: LinkDTO) {
		const { data, error } = await this._db
			.from('links')
			.update({
				original: link.original,
				shortened: link.shortened,
			})
			.eq('id', link.id)
			.select();

		return data as LinkDTO[];
	}

	public async deleteLink(link: LinkDTO) {
		const { data, error } = await this._db
			.from('links')
			.delete()
			.eq('id', link.id)
			.select();

		return data as LinkDTO[];
	}
}
