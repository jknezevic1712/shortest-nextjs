import {
	GetUserError,
	LoginError,
	LogoutError,
} from '@/shared/errors/authError';
import { databaseClient } from '@database/database';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// types
import type { DatabaseClient } from '@database/database';
import type { Provider } from '@supabase/supabase-js';

export class AuthService {
	private _db: DatabaseClient;

	constructor() {
		this._db = databaseClient;
	}

	public async loginUserWithProvider(provider: Provider) {
		const redirectTo =
			process.env.NODE_ENV === 'development'
				? 'http://localhost:3000/api/auth/callback'
				: 'https://shortest-nextjs.vercel.app/api/auth/callback';

		const { data, error } = await this._db.auth.signInWithOAuth({
			provider: provider,
			options: {
				redirectTo,
			},
		});

		if (error) {
			throw new LoginError(error.message, {
				cause: error.cause,
			});
		}

		revalidatePath('/');
		redirect(data.url);
	}

	public async logoutUser() {
		const { error } = await this._db.auth.signOut();

		if (error) {
			throw new LogoutError(error.message, {
				cause: error.cause,
			});
		}

		revalidatePath('/');
		redirect('/');
	}

	public async getUser() {
		const { data, error } = await this._db.auth.getUser();

		if (error) {
			throw new GetUserError(error.message, {
				cause: error.cause,
			});
		}

		return data.user;
	}
}
