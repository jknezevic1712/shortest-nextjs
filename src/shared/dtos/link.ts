// types

import type { Link } from '@/shared/types/types';

export default class LinkDTO {
	private _id: string;
	private _original: string;
	private _shortened: string | undefined;

	constructor({
		id,
		original,
		shortened,
	}: {
		id: string;
		original: string;
		shortened?: string;
	}) {
		this._id = id;
		this._original = original;
		this._shortened = shortened;
	}

	public get id() {
		return this._id;
	}

	public get original() {
		return this._original;
	}

	public get shortened() {
		return this._shortened;
	}

	static fromDb(data: Link) {
		return new LinkDTO({
			id: data.id,
			original: data.original,
			shortened: data.shortened,
		});
	}
}
