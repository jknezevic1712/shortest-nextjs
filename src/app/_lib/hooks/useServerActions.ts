'use client';

import { useServerAction } from 'zsa-react';
import { createLink, editLink } from '@/app/dashboard/actions';

export default function useServerActions() {
	const createLinkAction = useServerAction(createLink);
	const editLinkAction = useServerAction(editLink);

	return {
		createLinkAction,
		editLinkAction,
	};
}
