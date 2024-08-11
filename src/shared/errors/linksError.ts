export class UnknownLinksError extends Error {
	status?: string;

	constructor(message: string, status?: string) {
		super(message);
		this.status = status;
	}
}

export class FetchLinksError extends Error {
	status?: string;

	constructor(message: string, status?: string, options?: ErrorOptions) {
		super(message, options);
		this.status = status;
	}
}

export class CreateLinkError extends Error {
	status?: string;

	constructor(message: string, status?: string, options?: ErrorOptions) {
		super(message, options);
		this.status = status;
	}
}

export class EditLinkError extends Error {
	status?: string;

	constructor(message: string, status?: string, options?: ErrorOptions) {
		super(message, options);
		this.status = status;
	}
}

export class DeleteLinkError extends Error {
	status?: string;

	constructor(message: string, status?: string, options?: ErrorOptions) {
		super(message, options);
		this.status = status;
	}
}
