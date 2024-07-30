// components
import SideMenu from '@app/_components/organisms/sideMenu/SideMenu';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<SideMenu />
			{children}
		</>
	);
}
