import type { Tables } from '@database/database.type';

export type Link = Tables<'links'>;

export type LinkInsert = Pick<Link, 'original'>;
export type LinkUpdate = Link;
export type LinkDelete = Pick<Link, 'id'>;
