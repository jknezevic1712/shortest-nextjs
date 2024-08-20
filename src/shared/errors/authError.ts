export class LoginError extends Error {
	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
	}
}

export class LogoutError extends Error {
	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
	}
}

export class GetUserError extends Error {
	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
	}
}
