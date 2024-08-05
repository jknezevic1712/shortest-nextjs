import { baseProcedure } from '@/_lib/procedures';

import {
  CreateLinkInputSchema,
  CreateLinkOutputSchema,
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
  // .output(CreateLinkOutputSchema)
  .handler(async ({ input, ctx }) => {
    console.log('Create link action');
    await ctx.linksService.createLink(input.original);

    revalidatePath('/dashboard', 'page');
  });

export const editLink = baseProcedure
  .createServerAction()
  .input(EditLinkInputSchema)
  .handler(async ({ input, ctx }) => {
    console.log('Edit link action');
    await ctx.linksService.editLink({
      id: input.id,
      original: input.original,
      shortened: input.shortened,
    });

    revalidatePath('/dashboard', 'page');
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

    revalidatePath('/dashboard', 'page');
  });
