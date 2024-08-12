import { z } from 'zod';

export const HandleManagingLinkSchema = z.discriminatedUnion('action', [
	z.object({ action: z.literal('create'), original: z.string() }),
	z.object({ action: z.literal('edit'), id: z.string(), original: z.string() }),
]);
