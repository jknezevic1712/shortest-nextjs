'use server';

// utils
import { baseProcedure } from '@/app/_lib/zsa/zsa-procedures';
import {
	createLinkInputSchema,
	deleteLinkInputSchema,
	editLinkInputSchema,
	fetchedLinksOutputSchema,
} from '../_lib/validationSchemas/link';
import { ZSAError } from 'zsa';
import { ServiceLocator } from '@/services/serviceLocator';
import {
	CreateLinkError,
	DeleteLinkError,
	EditLinkError,
	FetchLinksError,
} from '@/shared/errors/linksError';

export const fetchLinks = baseProcedure
	.createServerAction()
	.output(fetchedLinksOutputSchema)
	.handler(async () => {
		console.log('FETCHING LINKS');
		const linksService = ServiceLocator.getService('LinksService');

		try {
			const links = await linksService.fetchLinks();

			return links;
		} catch (err) {
			if (err instanceof FetchLinksError) {
				throw new ZSAError('ERROR', 'Cannot fetch links.');
			}

			throw new ZSAError('ERROR', err);
		}
	});

export const createLink = baseProcedure
	.createServerAction()
	.input(createLinkInputSchema)
	.output(fetchedLinksOutputSchema)
	.handler(async ({ input }) => {
		console.log('CREATING LINK');
		const linksService = ServiceLocator.getService('LinksService');

		try {
			const links = await linksService.createLink(input);

			return links;
		} catch (err) {
			if (err instanceof CreateLinkError) {
				throw new ZSAError('ERROR', 'Cannot create link.');
			}

			throw new ZSAError('ERROR', err);
		}
	});

export const editLink = baseProcedure
	.createServerAction()
	.input(editLinkInputSchema)
	.output(fetchedLinksOutputSchema)
	.handler(async ({ input }) => {
		console.log('EDITING LINK');
		const linksService = ServiceLocator.getService('LinksService');

		try {
			const links = await linksService.editLink(input);

			return links;
		} catch (err) {
			if (err instanceof EditLinkError) {
				throw new ZSAError('ERROR', 'Cannot edit link.');
			}

			throw new ZSAError('ERROR', err);
		}
	});

export const deleteLink = baseProcedure
	.createServerAction()
	.input(deleteLinkInputSchema)
	.output(fetchedLinksOutputSchema)
	.handler(async ({ input }) => {
		console.log('DELETING LINKS');
		const linksService = ServiceLocator.getService('LinksService');

		try {
			const links = await linksService.deleteLink(input);

			return links;
		} catch (err) {
			if (err instanceof DeleteLinkError) {
				throw new ZSAError('ERROR', 'Cannot delete link.');
			}

			throw new ZSAError('ERROR', err);
		}
	});
