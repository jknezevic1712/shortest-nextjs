import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// utils
import '@app/_lib/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shortest',
	description: 'Generated by create next app',
};

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}

export default RootLayout;