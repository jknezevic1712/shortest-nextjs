// utils
import createClient from '@/_lib/supabase/server';
import { dummyLinks } from '@/app/_lib/utils/dashboard/dataTable';
// types and interfaces
import LinkDTO from '@/dtos/link';
import ILinksRepository from '.';
import type { SupabaseClient } from '@supabase/supabase-js';

export default class LinksRepository implements ILinksRepository {
	// TODO: To be of SupabaseClient type
	private _db: SupabaseClient;

	constructor() {
		this._db = createClient();
	}

	private generateTestLinks() {
		return dummyLinks.map((link) => LinkDTO.fromDb(link));
	}

	async fetchLinks() {
		// const linkCollection = this.generateTestLinks();
		// return linkCollection;

		return (await this._db.from('testingTable').select()).data as any;
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
