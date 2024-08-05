import { useRef, useState } from 'react';
// types
import type { Link } from '@app/_lib/types/links';
import type { Dispatch, SetStateAction } from 'react';

export type DashboardPageProps = {
	showDialog: boolean;
	handleManageLinkDialog: (isVisible?: boolean, data?: Link) => void;
	selectedLinkData: Link | undefined;
	links: Link[];
	setLinks: Dispatch<SetStateAction<Link[]>>;
};
export function withState(
	WrappedComponent: React.ComponentType<DashboardPageProps>
) {
	function StatefulComponent(props: any) {
		const [showDialog, setShowDialog] = useState(false);
		const [links, setLinks] = useState<Link[]>([]);

		const selectedLinkData = useRef<Link | undefined>(undefined);

		function handleManageLinkDialog(isVisible = false, data?: Link) {
			selectedLinkData.current = data;
			setShowDialog(isVisible);
		}

		return (
			<WrappedComponent
				{...props}
				showDialog={showDialog}
				handleManageLinkDialog={handleManageLinkDialog}
				selectedLinkData={selectedLinkData.current}
				links={links}
				setLinks={setLinks}
			/>
		);
	}

	return StatefulComponent;
}
