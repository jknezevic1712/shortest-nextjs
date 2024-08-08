// utils
import { Inter } from 'next/font/google';
import '@app/_lib/styles/globals.css';
import { Toaster } from '@/app/_lib/providers/Toaster';
import StoreProvider from '@app/_lib/providers/StoreProvider';
// types
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shortest',
	description: 'Shorten your links fast and easy!',
};

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className="dark"
		>
			<body className={inter.className + ' min-h-[100dvh] p-2'}>
				<StoreProvider>{children}</StoreProvider>
				<Toaster />
			</body>
		</html>
	);
}

export default RootLayout;
