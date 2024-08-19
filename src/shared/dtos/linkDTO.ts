// types
import type { Link } from '@/shared/types/types';

export default class LinkDTO {
	constructor(
		private _id: string,
		private _original: string,
		private _shortened: string
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

	public toPlainObject() {
		return {
			id: this.id,
			original: this.original,
			shortened: this.shortened,
		};
	}

	static fromDb(data: Link) {
		return new LinkDTO(data.id, data.original, data.shortened);
	}
}