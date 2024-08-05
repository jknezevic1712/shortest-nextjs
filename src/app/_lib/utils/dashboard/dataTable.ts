// utils
import { CreateLinkOutputSchema } from '../../validationSchemas/link';
import { z } from 'zod';
// types
import type { ColumnDef } from '@tanstack/react-table';
import type { Link } from '@app/_lib/types/links';

export const linkDataTableColumns: ColumnDef<Link>[] = [
	{
		accessorKey: 'id',
		header: '#',
	},
	{
		accessorKey: 'original',
		header: 'Original',
	},
	{
		accessorKey: 'shortened',
		header: 'Shortened',
	},
	{
		accessorKey: 'actions',
		header: '',
	},
];

export const dummyLinks: z.infer<typeof CreateLinkOutputSchema> = [
	{
		id: '1',
		original:
			'reallyloooooooooooooooooooooooooooooonglonglonglonglonglonglonglonglonglonglonglonglonglonglink.com',
		shortened: 'shortest.com/z20ssd',
	},
	{
		id: '2',
		original: 'reallyLongTestLink.com',
		shortened: 'shortest.com/yj2dol',
	},
	{
		id: '3',
		original: 'reallyLongTestLink.com',
		shortened: 'shortest.com/asdk4l',
	},
];
