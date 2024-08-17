import LinkDTO from '@/shared/dtos/linkDTO';
import { v7 as uuidv7 } from 'uuid';
// types
import type { ColumnDef } from '@tanstack/react-table';

export const linkDataTableColumns: ColumnDef<LinkDTO>[] = [
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

export const dummyLinks: LinkDTO[] = [
	LinkDTO.fromDb({
		id: uuidv7(),
		original: 'https://www.extremelylonglink.com',
		shortened: 'shortest.com/z20ssd',
	}),
	LinkDTO.fromDb({
		id: uuidv7(),
		original: 'https://www.anotherreallylongtestlink.com',
		shortened: 'shortest.com/yj2dol',
	}),
	LinkDTO.fromDb({
		id: uuidv7(),
		original: 'https://www.testinglink.com',
		shortened: 'shortest.com/asdk4l',
	}),
];
