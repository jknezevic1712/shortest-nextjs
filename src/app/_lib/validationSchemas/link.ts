import { z } from 'zod';

export const LinkSchema = z.object({
	id: z.string().uuid('Link needs to have unique uuid'),
	old: z.string().url("Original link can't be empty"),
	new: z.string().url("Shortened link can't be empty"),
});
