// utils
import { NextResponse } from 'next/server';
// types
import type { NextRequest } from 'next/server';
import { Routes } from './app/_utils/enums/routes';

export function middleware(request: NextRequest) {
	const user = true;

	if (!user) {
		return NextResponse.redirect(new URL(Routes.Authentication, request.url));
	}

	return NextResponse.next();
}

// Apply middleware to specific paths
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 * Example:
		 * '/((?!api|_next/static|_next/image|favicon.ico).*)',
		 */
		'/((?!api|_next/static|_next/image|favicon.ico|authentication).*)',
	],
};
