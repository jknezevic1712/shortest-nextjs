'use server';

// utils
import { baseProcedure } from '@/_lib/procedures';
import {
	CreateLinkInputSchema,
	DeleteLinkInputSchema,
	EditLinkInputSchema,
	FetchedLinksOutputSchema,
} from '../_lib/validationSchemas/link';

export const fetchLinks = baseProcedure
	.createServerAction()
	.output(FetchedLinksOutputSchema)
	.handler(async ({ ctx }) => {
		const links = await ctx.linksService.fetchLinks();

		return links.map((link) => ({
			id: link.id,
			original: link.original,
			shortened: link.shortened!,
		}));
	});

export const createLink = baseProcedure
	.createServerAction()
	.input(CreateLinkInputSchema, { type: 'formData' })
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input, ctx }) => {
		const links = await ctx.linksService.createLink(input.original);

		return links.map((link) => ({
			id: link.id,
			original: link.original,
			shortened: link.shortened!,
		}));
	});

export const editLink = baseProcedure
	.createServerAction()
	.input(EditLinkInputSchema, { type: 'formData' })
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input, ctx }) => {
		const links = await ctx.linksService.editLink({
			id: input.id,
			original: input.original,
			shortened: input.shortened,
		});

		return links.map((link) => ({
			id: link.id,
			original: link.original,
			shortened: link.shortened!,
		}));
	});

export const deleteLink = baseProcedure
	.createServerAction()
	.input(DeleteLinkInputSchema)
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input, ctx }) => {
		const links = await ctx.linksService.deleteLink({
			id: input.id,
			original: input.original,
			shortened: input.shortened,
		});

		return links.map((link) => ({
			id: link.id,
			original: link.original,
			shortened: link.shortened!,
		}));
	});
