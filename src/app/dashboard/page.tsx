'use client';

import { useEffect } from 'react';
// components
import DashboardTemplate from '@app/_components/templates/dashboard/Dashboard';
// utils
import { withState } from '../_lib/hoc/dashboard/withState';
import { fetchLinks } from './actions';
// types
import type { DashboardPageProps } from '@app/_lib/hoc/dashboard/withState';

function Dashboard({
  showDialog,
  handleManageLinkDialog,
  linkData,
}: DashboardPageProps) {
  useEffect(() => {
    async function getLinks() {
      const data = await fetchLinks();
      console.log('DATA ', data);

      return await fetchLinks();
    }

    getLinks();
  }, []);

  return (
    <DashboardTemplate
      showDialog={showDialog}
      handleManageLinkDialog={handleManageLinkDialog}
      linkData={linkData}
    />
  );
}

export default withState(Dashboard);
