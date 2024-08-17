import { useCallback, useEffect, useRef, useState } from 'react';
// utils
import useLinksStore from '../../hooks/useLinks';
import { useToast } from '../../hooks/useToast';
import LinkDTO from '@/shared/dtos/linkDTO';
// types
import type { ToastError } from '../../hooks/useToast';

export type DashboardPageProps = {
	showDialog: boolean;
	handleManageLinkDialog: (isVisible?: boolean, data?: LinkDTO) => void;
	selectedLinkData: LinkDTO | undefined;
	setErrors: (data: ToastError[]) => void;
	links: LinkDTO[];
	setLinks: (links: LinkDTO[]) => void;
};
export function withState(
	WrappedComponent: React.ComponentType<DashboardPageProps>
) {
	function StatefulComponent(props: any) {
		const { links, updateLinks } = useLinksStore();
		const { toast } = useToast();

		const [showDialog, setShowDialog] = useState(false);

		const selectedLinkData = useRef<LinkDTO | undefined>(undefined);
		const errors = useRef<ToastError[] | undefined>(undefined);

		function handleManageLinkDialog(isVisible = false, data?: LinkDTO) {
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
