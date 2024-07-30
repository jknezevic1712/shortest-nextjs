import * as VisuallyHiddenRadix from '@radix-ui/react-visually-hidden';

export function VisuallyHidden({ children }: { children: JSX.Element }) {
	return <VisuallyHiddenRadix.Root>{children}</VisuallyHiddenRadix.Root>;
}
