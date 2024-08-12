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

export const dummyLinks: any = [
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
