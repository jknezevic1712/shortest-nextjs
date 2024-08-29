import type { Tables } from '@database/database.type';

export type Link = Tables<'links'>;

export type LinkInsert = Pick<Link, 'original'>;
export type LinkUpdate = Pick<
	Link,
	'id' | 'original' | 'shortened' | 'updated_at'
>;
export type LinkDelete = Pick<Link, 'id'>;
