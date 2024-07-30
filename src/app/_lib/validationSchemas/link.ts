import { z } from 'zod';

export const linkSchema = z.object({
	id: z.number(),
	old: z.string().url("Original link can't be empty"),
	new: z.string().url("Shortened link can't be empty"),
});
