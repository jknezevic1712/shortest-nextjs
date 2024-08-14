import { z } from 'zod';
import LinkDTO from '@/shared/dtos/link';

// form schemas
export const CreateLinkFormSchema = z.object({
	original: z.string().url('Please check the url provided'),
});

export const EditLinkFormSchema = z.object({
	id: z.string().uuid("Link id can't be empty"),
	original: z.string().url('Please check the url provided'),
});

// input schemas
export const CreateLinkInputSchema = z.object({
	original: z.string().url('Please check the url provided'),
});

export const EditLinkInputSchema = z.object({
	id: z.string().uuid("Link id can't be empty"),
	original: z.string().url('Please check the url provided'),
	shortened: z.string().url('Shortened url must be provided'),
});

export const DeleteLinkInputSchema = z.object({
	id: z.string().uuid("Link id can't be empty"),
	original: z.string().url('Please check the url provided'),
	shortened: z.string().url('Shortened url must be provided'),
});

// output schemas
export const FetchedLinksOutputSchema = z.array(z.instanceof(LinkDTO));
