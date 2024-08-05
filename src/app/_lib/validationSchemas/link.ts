import { z } from 'zod';

// form schemas
export const CreateLinkFormSchema = z.object({
  original: z.string().url("Link can't be empty"),
});

export const EditLinkFormSchema = z.object({
  id: z.string().uuid("Link id can't be empty"),
  original: z.string().url("Original link can't be empty"),
  shortened: z.string().url("Shortened link can't be empty"),
});

// input schemas
export const CreateLinkInputSchema = z.object({
  original: z.string().url("Link can't be empty"),
});

export const EditLinkInputSchema = z.object({
  id: z.string().uuid("Link id can't be empty"),
  original: z.string().url("Link can't be empty"),
  shortened: z.string().url().optional(),
});

export const DeleteLinkInputSchema = z.object({
  id: z.string().uuid("Link id can't be empty"),
  original: z.string().url("Link can't be empty"),
  shortened: z.string().url().optional(),
});

// output schemas
export const CreateLinkOutputSchema = z.array(
  z.object({
    id: z.string(),
    original: z.string(),
    shortened: z.string(),
  })
);
