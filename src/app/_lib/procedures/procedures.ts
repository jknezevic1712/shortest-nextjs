import { createServerActionProcedure } from 'zsa';

import LinksRepository from '@/repositories/links/linksRepository';
import LinksService from '@/services/links/linksService';

export const baseProcedure = createServerActionProcedure().handler(() => {
	const linksRepository = new LinksRepository();
	const linksService = new LinksService(linksRepository);

	return {
		linksService,
	};
});
