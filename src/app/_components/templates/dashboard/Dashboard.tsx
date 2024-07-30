import { Button } from '@app/_components/atoms/button/Button';
import { Plus } from 'lucide-react';
import { DataTable } from '../../organisms/dataTable/DataTable';
// utils
import {
	dummyLinks,
	linkDataTableColumns,
} from '@/app/_lib/utils/dashboard/dataTable';

export default function DashboardTemplate() {
	return (
		<main className="mx-auto flex w-full max-w-7xl min-h-screen flex-col items-center justify-start pt-4 gap-12">
			<div className="w-full flex justify-end items-center">
				<Button
					type="button"
					className="gap-2"
				>
					<Plus />
					<span>New</span>
				</Button>
			</div>

			<DataTable
				columns={linkDataTableColumns}
				data={dummyLinks}
			/>
		</main>
	);
}
