// components
import { Button } from '@app/_components/atoms/button/Button';
import { Input } from '@app/_components/atoms/input/Input';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@app/_components/molecules/dialog/Dialog';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from '@app/_components/molecules/form/Form';
import { VisuallyHidden } from '@app/_components/atoms/visuallyHidden/VisuallyHidden';
// utils
import useManageLinkForm from '@/app/_lib/hooks/useManageLinkForm';
import LinkDTO from '@/shared/dtos/linkDTO';

type ManageLinkDialogProps = {
	showDialog: boolean;
	handleManageLinkDialog: (isVisible?: boolean, data?: LinkDTO) => void;
	selectedLinkData?: LinkDTO;
};
export default function ManageLinkDialog({
	showDialog,
	handleManageLinkDialog,
	selectedLinkData,
}: ManageLinkDialogProps) {
	const { form, onSubmit } = useManageLinkForm(selectedLinkData, () =>
		handleManageLinkDialog(false)
	);

	return (
		<Dialog
			open={showDialog}
			onOpenChange={handleManageLinkDialog}
		>
			<DialogContent className="sm:max-w-[425px]">
				<VisuallyHidden>
					<DialogHeader>
						<DialogTitle>Manage Link</DialogTitle>
						<DialogDescription>
							{selectedLinkData ? 'Edit your link' : 'Create a new link'}
						</DialogDescription>
					</DialogHeader>
				</VisuallyHidden>

				<Form {...form}>
					<form
						id="manageLinkForm"
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="original"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Your link</FormLabel>
									<FormControl>
										<Input
											placeholder="somereallylonglink.com"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										{selectedLinkData
											? 'Edit the original link'
											: 'Enter the link you wish to shorten.'}
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>

				<DialogFooter>
					<Button
						type="submit"
						form="manageLinkForm"
					>
						Submit
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
