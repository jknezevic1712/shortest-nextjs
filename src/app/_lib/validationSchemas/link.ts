import { z } from 'zod';

// form schemas
export const createLinkFormSchema = z.object({
	original: z.string().url('Please check the url provided'),
});

export const editLinkFormSchema = z.object({
	id: z.string().uuid("Link id can't be empty"),
	original: z.string().url('Please check the url provided'),
	shortened: z.string().url('Shortened url must be provided'),
});

// input schemas
export const createLinkInputSchema = z.object({
	original: z.string().url('Please check the url provided'),
});

export const editLinkInputSchema = z.object({
	id: z.string().uuid("Link id can't be empty"),
	original: z.string().url('Please check the url provided'),
	shortened: z.string().url('Shortened url must be provided'),
});

export const deleteLinkInputSchema = z.object({
	id: z.string().uuid("Link id can't be empty"),
});

// output schemas
export const fetchedLinksOutputSchema = z.array(
	z.object({
		id: z.string().uuid("Link id can't be empty"),
		original: z.string().url('Please check the url provided'),
		shortened: z.string().url('Shortened url must be provided'),
	})
);
