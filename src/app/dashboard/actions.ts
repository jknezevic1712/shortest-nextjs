'use server';

// utils
import { baseProcedure } from '@/app/_lib/zsa/zsa-procedures';
import {
	CreateLinkInputSchema,
	DeleteLinkInputSchema,
	EditLinkInputSchema,
	FetchedLinksOutputSchema,
} from '../_lib/validationSchemas/link';
import { ZSAError } from 'zsa';
import { ServiceLocator } from '@/services/serviceLocator';

export const fetchLinks = baseProcedure
	.createServerAction()
	.output(FetchedLinksOutputSchema)
	.handler(async () => {
		console.log('FETCHING LINKS');
		const linksService = ServiceLocator.getService('LinksService');
		if (!linksService)
			throw new ZSAError('ERROR', {
				message: "Links service doesn't exist",
				status: 'ERROR',
				options: {
					cause: "Links service doesn't exist",
				},
			});

		try {
			const links = await linksService.fetchLinks();

			return links;
		} catch (err) {
			throw new ZSAError('ERROR', err);
		}
	});

export const createLink = baseProcedure
	.createServerAction()
	.input(CreateLinkInputSchema, { type: 'formData' })
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input }) => {
		console.log('CREATING LINK');
		const linksService = ServiceLocator.getService('LinksService');
		if (!linksService)
			throw new ZSAError('ERROR', {
				message: "Links service doesn't exist",
				status: 'ERROR',
				options: {
					cause: "Links service doesn't exist",
				},
			});

		try {
			const links = await linksService.createLink(input.original);

			return links;
		} catch (err) {
			throw new ZSAError('ERROR', err);
		}
	});

export const editLink = baseProcedure
	.createServerAction()
	.input(EditLinkInputSchema, { type: 'formData' })
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input }) => {
		console.log('EDITING LINK');
		const linksService = ServiceLocator.getService('LinksService');
		if (!linksService)
			throw new ZSAError('ERROR', {
				message: "Links service doesn't exist",
				status: 'ERROR',
				options: {
					cause: "Links service doesn't exist",
				},
			});

		try {
			const links = await linksService.editLink({
				id: input.id,
				original: input.original,
				shortened: input.shortened,
			});

			return links;
		} catch (err) {
			throw new ZSAError('ERROR', err);
		}
	});

export const deleteLink = baseProcedure
	.createServerAction()
	.input(DeleteLinkInputSchema)
	.output(FetchedLinksOutputSchema)
	.handler(async ({ input }) => {
		console.log('DELETING LINKS');
		const linksService = ServiceLocator.getService('LinksService');
		if (!linksService)
			throw new ZSAError('ERROR', {
				message: "Links service doesn't exist",
				status: 'ERROR',
				options: {
					cause: "Links service doesn't exist",
				},
			});

		try {
			const links = await linksService.deleteLink({
				id: input.id,
				original: input.original,
				shortened: input.shortened,
			});

			return links;
		} catch (err) {
			throw new ZSAError('ERROR', err);
		}
	});
