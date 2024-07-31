import { useRef, useState } from 'react';
// types
import type { Link } from '@app/_lib/types/links';

export type DashboardPageProps = {
	showDialog: boolean;
	handleManageLinkDialog: (isVisible?: boolean, data?: Link) => void;
	linkData: Link | undefined;
};
export function withState(
	WrappedComponent: React.ComponentType<DashboardPageProps>
) {
	function StatefulComponent(props: any) {
		const [showDialog, setShowDialog] = useState(false);
		const linkData = useRef<Link | undefined>(undefined);

		function handleManageLinkDialog(isVisible = false, data?: Link) {
			linkData.current = data;
			setShowDialog(isVisible);
		}

		return (
			<WrappedComponent
				{...props}
				showDialog={showDialog}
				handleManageLinkDialog={handleManageLinkDialog}
				linkData={linkData.current}
			/>
		);
	}

	return StatefulComponent;
}
