import { useCallback, useEffect, useRef, useState } from 'react';
// utils
import useLinksStore from '../../hooks/useLinks';
import { useToast } from '../../hooks/useToast';
// types
import type { ToastError } from '../../hooks/useToast';
import type { Link } from '@/shared/types/types';

export type DashboardPageProps = {
	showDialog: boolean;
	handleManageLinkDialog: (isVisible?: boolean, data?: Link) => void;
	selectedLinkData: Link | undefined;
	setErrors: (data: ToastError[]) => void;
	links: Link[];
	setLinks: (links: Link[]) => void;
};
export function withState(
	WrappedComponent: React.ComponentType<DashboardPageProps>
) {
	function StatefulComponent(props: any) {
		const { links, updateLinks } = useLinksStore();
		const { toast } = useToast();

		const [showDialog, setShowDialog] = useState(false);

		const selectedLinkData = useRef<Link | undefined>(undefined);
		const errors = useRef<ToastError[] | undefined>(undefined);

		function handleManageLinkDialog(isVisible = false, data?: Link) {
			selectedLinkData.current = data;
			setShowDialog(isVisible);
		}

		const setErrors = useCallback((data: ToastError[]) => {
			errors.current = data;
		}, []);

		useEffect(() => {
			if (errors.current) {
				errors.current.forEach((error) =>
					toast({
						title: error.title,
						description: error.description,
					})
				);

				errors.current = undefined;
			}
		}, [errors, toast]);

		return (
			<WrappedComponent
				{...props}
				showDialog={showDialog}
				handleManageLinkDialog={handleManageLinkDialog}
				selectedLinkData={selectedLinkData.current}
				setErrors={setErrors}
				links={links}
				setLinks={updateLinks}
			/>
		);
	}

	return StatefulComponent;
}
