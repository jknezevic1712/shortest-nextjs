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
import LinkDTO from '@/shared/dtos/link';

type InferredLinkSchema = z.infer<
	typeof CreateLinkFormSchema | typeof EditLinkFormSchema
>;

const defaultFormData: z.infer<typeof CreateLinkFormSchema> = {
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
			initialData ? EditLinkFormSchema : CreateLinkFormSchema
		),
		defaultValues: initialData ? initialData : defaultFormData,
	});

	async function onSubmit(data: InferredLinkSchema) {
		const formData = new FormData();
		formData.append('original', data.original);

		if (initialData) {
			formData.append('id', (data as z.infer<typeof EditLinkFormSchema>).id);
			const [links, error] = await editLinkAction.execute(formData);

			if (error) {
				return toast({
					title: error.name ?? 'Error while editing link',
					description: error.message ?? 'Please try again later.',
				});
			}

			updateLinks(links);
		} else {
			const [links, error] = await createLinkAction.execute(formData);

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
