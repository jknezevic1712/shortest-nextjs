// utils
import { linkSchema } from '../../validationSchemas/link';
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
		accessorKey: 'old',
		header: 'Original',
	},
	{
		accessorKey: 'new',
		header: 'Shortened',
	},
	{
		accessorKey: 'actions',
		header: '',
	},
];

export const dummyLinks: z.infer<typeof linkSchema>[] = [
	{
		id: 1,
		old: 'reallyloooooooooooooooooooooooooooooonglonglonglonglonglonglonglonglonglonglonglonglonglonglink@test.com',
		new: 'shortest.com/z20ssd',
	},
	{
		id: 2,
		old: 'reallyLongTestLink@test.com',
		new: 'shortest.com/yj2dol',
	},
	{
		id: 3,
		old: 'reallyLongTestLink@test.com',
		new: 'shortest.com/asdk4l',
	},
];
