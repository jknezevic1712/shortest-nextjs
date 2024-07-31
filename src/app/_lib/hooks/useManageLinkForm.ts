// utils
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { LinkSchema } from '../validationSchemas/link';
import { v7 as uuidv7 } from 'uuid';
// types
import type { Link } from '../types/links';

type InferredLinkSchema = z.infer<typeof LinkSchema>;

const defaultFormData: Partial<InferredLinkSchema> = {
	id: uuidv7(),
	original: '',
};
export default function useManageLinkForm(
	formData?: Link,
	extraAction?: () => void
) {
	const form = useForm<InferredLinkSchema>({
		resolver: zodResolver(LinkSchema),
		defaultValues: formData ? formData : defaultFormData,
	});

	function onSubmit(data: InferredLinkSchema) {
		console.log('Submitted ', data);

		extraAction?.();
	}

	return {
		form,
		onSubmit,
	};
}
