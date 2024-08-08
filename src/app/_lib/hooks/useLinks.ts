import { useAtom } from 'jotai/react';
import { useCallback } from 'react';
// utils
import { linksAtom } from '@app/_lib/store/links';
// types
import type { Link } from '../types/links';

export default function useLinksStore() {
	const [links, setLinks] = useAtom(linksAtom);

	const updateLinks = useCallback(
		(links: Link[]) => {
			setLinks(links);
		},
		[setLinks]
	);

	return {
		links,
		updateLinks,
	};
}
