// utils
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
// types
import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
