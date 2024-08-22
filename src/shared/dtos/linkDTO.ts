// types
import type { Link } from '@/shared/types/types';

export default class LinkDTO {
	constructor(
		private _id: string,
		private _original: string,
		private _shortened: string,
		private _created_at: string,
		private _updated_at: string
	) {}

	public get id() {
		return this._id;
	}

	public get original() {
		return this._original;
	}

	public get shortened() {
		return this._shortened;
	}

	public get created_at() {
		return this._created_at;
	}

	public get updated_at() {
		return this._updated_at;
	}

	public toPlainObject() {
		return {
			id: this.id,
			original: this.original,
			shortened: this.shortened,
			created_at: this.created_at,
			updated_at: this.updated_at,
		};
	}

	static fromDb(data: Link) {
		return new LinkDTO(
			data.id,
			data.original,
			data.shortened,
			data.created_at,
			data.updated_at
		);
	}
}
