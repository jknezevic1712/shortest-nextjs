import { useAtom } from 'jotai/react';
import { useCallback } from 'react';
// utils
import { linksAtom } from '@app/_lib/store/links';
import LinkDTO from '@/shared/dtos/link';

export default function useLinksStore() {
	const [links, setLinks] = useAtom(linksAtom);

	const updateLinks = useCallback(
		(links: LinkDTO[]) => {
			setLinks(links);
		},
		[setLinks]
	);

	return {
		links,
		updateLinks,
	};
}
