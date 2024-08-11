'use server';

// utils
import { baseProcedure } from '@/shared/procedures/procedures';
import {
	CreateLinkInputSchema,
	DeleteLinkInputSchema,
	EditLinkInputSchema,
	FetchedLinksOutputSchema,
} from '../_lib/validationSchemas/link';
import {
	DeleteLinkError,
	EditLinkError,
	FetchLinksError,
} from '@/shared/errors/linksError';
import { ZSAError } from 'zsa';

export const fetchLinks = baseProcedure
	.createServerAction()
	.output(FetchedLinksOutputSchema)
	.handler(async ({ ctx }) => {
		try {
			const links = await ctx.linksService.fetchLinks();

			return links.map((link) => ({
				id: link.id,
				original: link.original,
				shortened: link.shortened!,
			}));
		} catch (err) {
			if (err instanceof FetchLinksError) {
				throw new ZSAError('ERROR', 'Error while fetching links.');
			}

			throw new ZSAError(
				'ERROR',
				'Unknown error ocurred. Please try again later.'
			);
		}
	});

export const createLink = baseProcedure
	.createServerAction()
	.input(CreateLinkInputSchema, { type: 'formData' })
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input, ctx }) => {
		try {
			const links = await ctx.linksService.createLink(input.original);

			return links.map((link) => ({
				id: link.id,
				original: link.original,
				shortened: link.shortened!,
			}));
		} catch (err) {
			if (err instanceof FetchLinksError) {
				throw new ZSAError('ERROR', 'Error while creating link.');
			}

			throw new ZSAError(
				'ERROR',
				'Unknown error ocurred. Please try again later.'
			);
		}
	});

export const editLink = baseProcedure
	.createServerAction()
	.input(EditLinkInputSchema, { type: 'formData' })
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input, ctx }) => {
		try {
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
		} catch (err) {
			if (err instanceof EditLinkError) {
				throw new ZSAError('ERROR', 'Error while editing link.');
			}

			throw new ZSAError(
				'ERROR',
				'Unknown error ocurred. Please try again later.'
			);
		}
	});

export const deleteLink = baseProcedure
	.createServerAction()
	.input(DeleteLinkInputSchema)
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input, ctx }) => {
		try {
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
		} catch (err) {
			if (err instanceof DeleteLinkError) {
				throw new ZSAError('ERROR', 'Error while deleting link.');
			}

			throw new ZSAError(
				'ERROR',
				'Unknown error ocurred. Please try again later.'
			);
		}
	});
