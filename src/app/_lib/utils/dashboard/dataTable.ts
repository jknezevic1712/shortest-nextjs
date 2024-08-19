import { v7 as uuidv7 } from 'uuid';
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
		id: uuidv7(),
		original: 'https://www.extremelylonglink.com',
		shortened: 'shortest.com/z20ssd',
	},
	{
		id: uuidv7(),
		original: 'https://www.anotherreallylongtestlink.com',
		shortened: 'shortest.com/yj2dol',
	},
	{
		id: uuidv7(),
		original: 'https://www.testinglink.com',
		shortened: 'shortest.com/asdk4l',
	},
];
