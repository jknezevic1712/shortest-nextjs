'use client';

// utils
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  CreateLinkFormSchema,
  EditLinkFormSchema,
} from '../validationSchemas/link';
import { createLink, editLink } from '@/app/dashboard/actions';
// types
import type { Link } from '../types/links';

type InferredLinkSchema = z.infer<
  typeof CreateLinkFormSchema | typeof EditLinkFormSchema
>;

const defaultFormData: z.infer<typeof CreateLinkFormSchema> = {
  original: '',
};
export default function useManageLinkForm(
  initialData?: Link,
  extraAction?: () => void
) {
  const form = useForm<InferredLinkSchema>({
    defaultValues: initialData ? initialData : defaultFormData,
  });

  async function onSubmit(data: InferredLinkSchema) {
    console.log('Submitted ', data);
    const formData = new FormData();
    formData.append('original', data.original);

    if (initialData) {
      console.log('edit on submit');

      formData.append('id', (data as z.infer<typeof EditLinkFormSchema>).id);

      await editLink({
        id: (data as z.infer<typeof EditLinkFormSchema>).id,
        original: data.original,
        shortened: (data as z.infer<typeof EditLinkFormSchema>).shortened,
      });
    } else {
      console.log('create on submit');

      await createLink(formData);
    }

    // extraAction?.();
  }

  return {
    form,
    onSubmit,
  };
}
