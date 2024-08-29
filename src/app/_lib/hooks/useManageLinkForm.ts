'use client';

// utils
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	createLinkFormSchema,
	editLinkFormSchema,
} from '../validationSchemas/link';
import useServerActions from './useServerActions';
import { zodResolver } from '@hookform/resolvers/zod';
import useLinksStore from './useLinks';
import { useToast } from './useToast';
// types
import type { Link } from '@/shared/types/types';

type InferredLinkSchema = z.infer<
	typeof createLinkFormSchema | typeof editLinkFormSchema
>;

const defaultFormData: z.infer<typeof createLinkFormSchema> = {
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
			initialData ? editLinkFormSchema : createLinkFormSchema
		),
		defaultValues: initialData ? initialData : defaultFormData,
	});

	async function onSubmit(data: InferredLinkSchema) {
		if ('id' in data && 'shortened' in data && 'updated_at' in data) {
			const [links, error] = await editLinkAction.execute(data);

			if (error) {
				return toast({
					title: error.name ?? 'Error while editing link',
					description: error.message ?? 'Please try again later.',
				});
			}

			updateLinks(links);
		} else {
			const [links, error] = await createLinkAction.execute(data);

			if (error) {
				return toast({
					title: error.name ?? 'Error while creating link',
					description: error.message ?? 'Please try again later.',
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
