// utils
import createClient from '@/_lib/supabase/server';
import { dummyLinks } from '@/app/_lib/utils/dashboard/dataTable';
// types and interfaces
import LinkDTO from '@/dtos/link';
import ILinksRepository from '.';
import type { SupabaseClient } from '@supabase/supabase-js';

export default class LinksRepository implements ILinksRepository {
  private _db: SupabaseClient;

  constructor() {
    this._db = createClient();
  }

  private generateTestLinks() {
    return dummyLinks.map((link) => LinkDTO.fromDb(link));
  }

  public async fetchLinks() {
    // TODO: If testing environment, use generateTestLinks function instead
    // TODO: If error happens, throw your own error
    const { data, error } = await this._db.from('links').select();

    return data as LinkDTO[];
  }

  public async createLink(link: LinkDTO) {
    const linkCollection = this.fetchLinks();
    return linkCollection;
  }

  public async deleteLink(linkId: string) {
    const linkCollection = this.fetchLinks();
    return linkCollection;
  }
}
