'use client';

// components
import { Button } from '@app/_components/atoms/button/Button';
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from '@app/_components/molecules/sheet/Sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import { VisuallyHidden } from '../../atoms/visuallyHidden/VisuallyHidden';
// utils
import { isActiveRoute } from '@/app/_lib/utils/routing/helpers';
import { usePathname } from 'next/navigation';
import { Routes } from '@/app/_lib/enums/routes';

export default function SideMenu() {
	// TODO: Add logout action for Logout button
	const currentPath = usePathname();

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<AlignJustify />
				</Button>
			</SheetTrigger>

			<SheetTitle></SheetTitle>

			<SheetContent
				side="left"
				className="flex flex-col gap-4 pt-16 justify-between items-center"
			>
				<VisuallyHidden>
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
						<SheetDescription>
							Side menu containing navigation and action buttons
						</SheetDescription>
					</SheetHeader>
				</VisuallyHidden>

				<div className="w-full flex flex-col gap-4 justify-start items-center">
					<Link
						href={Routes.Dashboard}
						className="w-full"
					>
						<Button
							type="button"
							className="w-full"
							variant={
								isActiveRoute(Routes.Dashboard, currentPath)
									? 'default'
									: 'secondary'
							}
						>
							Dashboard
						</Button>
					</Link>
				</div>

				<Button
					type="button"
					className="w-full"
					variant="destructive"
				>
					Logout
				</Button>
			</SheetContent>
		</Sheet>
	);
}
