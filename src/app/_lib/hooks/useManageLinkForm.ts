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
import useLinksStore from './useLinks';
import { useToast } from './useToast';
// types
import type { Link } from '@/shared/types/types';

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
	const { updateLinks } = useLinksStore();
	const { toast } = useToast();

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
			const [links, errors] = await editLinkAction.execute(formData);

			if (!links || errors) {
				return toast({
					title: errors.name ?? 'Error while editing link',
					description: errors.message ?? 'Please try again later.',
				});
			}

			updateLinks(links);
		} else {
			const [links, errors] = await createLinkAction.execute(formData);

			if (!links || errors) {
				return toast({
					title: errors.name ?? 'Error while creating link',
					description: errors.message ?? 'Please try again later.',
				});
			}

			updateLinks(links);
		}

		extraAction?.();
	}

	return {
		form,
		onSubmit,
	};
}
