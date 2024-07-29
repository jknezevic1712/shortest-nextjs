// utils
import { Inter } from 'next/font/google';
import '@app/_lib/styles/globals.css';
import { Toaster } from '@/app/_utils/providers/Toaster';
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
		<html lang="en">
			<body className={inter.className + ' dark'}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}

export default RootLayout;
