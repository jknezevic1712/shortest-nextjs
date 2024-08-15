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
import LinkDTO from '@/shared/dtos/link';

type InferredLinkSchema = z.infer<
	typeof createLinkFormSchema | typeof editLinkFormSchema
>;

const defaultFormData: z.infer<typeof createLinkFormSchema> = {
	original: '',
};
export default function useManageLinkForm(
	initialData?: LinkDTO,
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
		if (initialData) {
			const editData = data as z.infer<typeof editLinkFormSchema>;

			const [links, error] = await editLinkAction.execute({
				id: editData.id,
				original: editData.original,
				shortened: editData.shortened,
			});

			if (error) {
				return toast({
					title: error.name ?? 'Error while editing link',
					description: error.message ?? 'Please try again later.',
				});
			}

			updateLinks(links);
		} else {
			const [links, error] = await createLinkAction.execute({
				original: data.original,
			});

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
