'use client';

import { useServerAction } from 'zsa-react';
import {
	createLink,
	editLink,
	getUser,
	loginUserWithProvider,
	logoutUser,
} from '@/app/dashboard/actions';

export default function useServerActions() {
	const createLinkAction = useServerAction(createLink);
	const editLinkAction = useServerAction(editLink);
	const signInWithProvider = useServerAction(loginUserWithProvider);
	const signOutUser = useServerAction(logoutUser);
	const getUserData = useServerAction(getUser);

	return {
		createLinkAction,
		editLinkAction,
		signInWithProvider,
		signOutUser,
		getUserData,
	};
}
