'use client';

// utils
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	CreateLinkFormSchema,
	EditLinkFormSchema,
} from '../validationSchemas/link';
import useServerActions from './useServerActions';
import { zodResolver } from '@hookform/resolvers/zod';
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
	const { createLinkAction, editLinkAction } = useServerActions();

	const form = useForm<InferredLinkSchema>({
		resolver: zodResolver(
			initialData ? EditLinkFormSchema : CreateLinkFormSchema
		),
		defaultValues: initialData ? initialData : defaultFormData,
	});

	async function onSubmit(data: InferredLinkSchema) {
		const formData = new FormData();
		formData.append('original', data.original);

		if (initialData) {
			formData.append('id', (data as z.infer<typeof EditLinkFormSchema>).id);
			await editLinkAction.execute(formData);
		} else {
			await createLinkAction.execute(formData);
		}

		extraAction?.();
	}

	return {
		form,
		onSubmit,
	};
}
