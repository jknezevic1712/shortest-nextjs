import { baseProcedure } from '@/_lib/procedures';

export const fetchLinks = baseProcedure
	.createServerAction()
	.handler(async ({ ctx }) => {
		const links = await ctx.linksService.fetchLinks();

		return links;
	});
