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
	DialogTrigger,
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
// types
import type { Link } from '@/app/_lib/types/links';

type ManageLinkDialogProps = {
	showDialog: boolean;
	handleManageLinkDialog: (isVisible?: boolean, data?: Link) => void;
	linkData?: Link;
};
export default function ManageLinkDialog({
	showDialog,
	handleManageLinkDialog,
	linkData,
}: ManageLinkDialogProps) {
	const { form, onSubmit } = useManageLinkForm(linkData, () =>
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
							{linkData ? 'Edit your link' : 'Create a new link'}
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
							name="old"
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
										{linkData
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
