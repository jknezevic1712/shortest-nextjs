// components
import { Button } from '@app/_components/atoms/button/Button';
import { Plus } from 'lucide-react';
import { LinksDataTable } from '../../organisms/linksDataTable/LinksDataTable';
import ManageLinkDialog from '@app/_components/organisms/manageLinkDialog/ManageLinkDialog';
// utils
import {
	dummyLinks,
	linkDataTableColumns,
} from '@/app/_lib/utils/dashboard/dataTable';
// types
import type { DashboardPageProps } from '@/app/_lib/hoc/dashboard/withState';

function DashboardTemplate({
	showDialog,
	handleManageLinkDialog,
	linkData,
}: DashboardPageProps) {
	return (
		<>
			<main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-start pt-4 gap-12">
				<div className="w-full flex justify-end items-center">
					<Button
						type="button"
						className="gap-2"
						onClick={() => handleManageLinkDialog(true)}
					>
						<Plus />
						<span>New</span>
					</Button>
				</div>

				<LinksDataTable
					columns={linkDataTableColumns}
					data={dummyLinks}
					handleManageLinkDialog={handleManageLinkDialog}
				/>
			</main>

			{showDialog && (
				<ManageLinkDialog
					linkData={linkData}
					showDialog={showDialog}
					handleManageLinkDialog={handleManageLinkDialog}
				/>
			)}
		</>
	);
}

export default DashboardTemplate;
