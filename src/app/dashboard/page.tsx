'use client';

// components
import DashboardTemplate from '@app/_components/templates/dashboard/Dashboard';
// utils
import { withState } from '../_lib/hoc/dashboard/withState';
// types
import type { DashboardPageProps } from '@app/_lib/hoc/dashboard/withState';

function Dashboard({
	showDialog,
	handleManageLinkDialog,
	linkData,
}: DashboardPageProps) {
	return (
		<DashboardTemplate
			showDialog={showDialog}
			handleManageLinkDialog={handleManageLinkDialog}
			linkData={linkData}
		/>
	);
}

export default withState(Dashboard);
