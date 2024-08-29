import { nanoid } from 'nanoid';
// types
import type { ColumnDef } from '@tanstack/react-table';
import type { Link } from '@/shared/types/types';

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
		accessorKey: 'created_at',
		header: 'Created At',
	},
	{
		accessorKey: 'updated_at',
		header: 'Updated At',
	},
	{
		accessorKey: 'actions',
		header: '',
	},
];

export const dummyLinks: Link[] = [
	{
		id: nanoid(8),
		original: 'https://www.extremelylonglink.com',
		shortened: 'shortest.com/z20ssd',
		created_at: '',
		updated_at: '',
	},
	{
		id: nanoid(8),
		original: 'https://www.anotherreallylongtestlink.com',
		shortened: 'shortest.com/yj2dol',
		created_at: '',
		updated_at: '',
	},
	{
		id: nanoid(8),
		original: 'https://www.testinglink.com',
		shortened: 'shortest.com/asdk4l',
		created_at: '',
		updated_at: '',
	},
];
