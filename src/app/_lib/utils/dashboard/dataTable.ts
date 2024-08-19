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
		accessorKey: 'actions',
		header: '',
	},
];

export const dummyLinks: Link[] = [
	{
		id: nanoid(8),
		original: 'https://www.extremelylonglink.com',
		shortened: 'shortest.com/z20ssd',
	},
	{
		id: nanoid(8),
		original: 'https://www.anotherreallylongtestlink.com',
		shortened: 'shortest.com/yj2dol',
	},
	{
		id: nanoid(8),
		original: 'https://www.testinglink.com',
		shortened: 'shortest.com/asdk4l',
	},
];
