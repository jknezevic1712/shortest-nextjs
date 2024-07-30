export function isActiveRoute(nextRoute: string, currentRoute: string) {
	return currentRoute.includes(nextRoute);
}
