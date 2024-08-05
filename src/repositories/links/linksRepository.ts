// utils
import createClient from '@/_lib/supabase/server';
import { dummyLinks } from '@/app/_lib/utils/dashboard/dataTable';
// types and interfaces
import LinkDTO from '@/dtos/link';
import ILinksRepository from '.';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Link } from '@/app/_lib/types/links';

// TODO: If testing environment, use generateTestLinks function instead to fetch links and operate on them
// TODO: If error happens, throw your own error
export default class LinksRepository implements ILinksRepository {
  private _db: SupabaseClient;

  constructor() {
    this._db = createClient();
  }

  private generateTestLinks() {
    return dummyLinks.map((link) => LinkDTO.fromDb(link));
  }

  public async fetchLinks() {
    const { data, error } = await this._db.from('links').select();

    return data as LinkDTO[];
  }

  public async createLink(link: LinkDTO) {
    console.log('REPO creating link ', link.original);

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
    console.log('REPO edit link ', link.id);

    const { data, error } = await this._db
      .from('links')
      .update({
        original: link.original,
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
