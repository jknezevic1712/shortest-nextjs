'use client';

// components
import {
	ToastProvider,
	Toast,
	ToastTitle,
	ToastDescription,
	ToastClose,
	ToastViewport,
} from '@radix-ui/react-toast';
// utils
import { useToast } from '@app/_utils/hooks/useToast';

export function Toaster() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<Toast
						key={id}
						{...props}
					>
						<div className="grid gap-1">
							{title && <ToastTitle>{title}</ToastTitle>}
							{description && (
								<ToastDescription>{description}</ToastDescription>
							)}
						</div>
						{action}
						<ToastClose />
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
