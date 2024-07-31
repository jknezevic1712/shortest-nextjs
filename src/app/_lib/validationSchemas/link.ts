import { z } from 'zod';

export const LinkSchema = z.object({
	id: z.string().uuid('Link needs to have unique uuid'),
	original: z.string().url("Original link can't be empty"),
	shortened: z.string().url("Shortened link can't be empty"),
});
