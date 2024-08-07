'use server';

import { baseProcedure } from '@/_lib/procedures';

import {
	CreateLinkInputSchema,
	DeleteLinkInputSchema,
	EditLinkInputSchema,
} from '../_lib/validationSchemas/link';
import { revalidatePath } from 'next/cache';

export const fetchLinks = baseProcedure
	.createServerAction()
	.handler(async ({ ctx }) => {
		const links = await ctx.linksService.fetchLinks();

		return links;
	});

export const createLink = baseProcedure
	.createServerAction()
	.input(CreateLinkInputSchema, { type: 'formData' })
	.handler(async ({ input, ctx }) => {
		await ctx.linksService.createLink(input.original);

		revalidatePath('/dashboard');
	});

export const editLink = baseProcedure
	.createServerAction()
	.input(EditLinkInputSchema, { type: 'formData' })
	.handler(async ({ input, ctx }) => {
		await ctx.linksService.editLink({
			id: input.id,
			original: input.original,
			shortened: input.shortened,
		});

		revalidatePath('/dashboard');
	});

export const deleteLink = baseProcedure
	.createServerAction()
	.input(DeleteLinkInputSchema)
	.handler(async ({ input, ctx }) => {
		await ctx.linksService.deleteLink({
			id: input.id,
			original: input.original,
			shortened: input.shortened,
		});

		revalidatePath('/dashboard');
	});
