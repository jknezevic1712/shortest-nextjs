'use client';

import { useEffect } from 'react';
// components
import DashboardTemplate from '@app/_components/templates/dashboard/Dashboard';
// utils
import { withState } from '../_lib/hoc/dashboard/withState';
import { fetchLinks as fetchLinksAction } from './actions';
// types
import type { DashboardPageProps } from '@app/_lib/hoc/dashboard/withState';

function Dashboard({
	showDialog,
	handleManageLinkDialog,
	selectedLinkData,
	setErrors,
	links,
	setLinks,
}: DashboardPageProps) {
	useEffect(() => {
		async function fetchLinks() {
			const [data, errors] = await fetchLinksAction();
			if (!data || errors) {
				setErrors([
					{
						title: errors.name,
						description: errors.message,
					},
				]);
			}
			console.log('DATA ', data);

			setLinks(data ?? []);
		}

		fetchLinks();
	}, [setLinks, setErrors]);

	return (
		<DashboardTemplate
			showDialog={showDialog}
			handleManageLinkDialog={handleManageLinkDialog}
			selectedLinkData={selectedLinkData}
			links={links}
		/>
	);
}

export default withState(Dashboard);
