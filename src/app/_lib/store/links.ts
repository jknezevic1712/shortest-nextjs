import { atom } from 'jotai';
// types
import type { Link } from '@/shared/types/types';

export const linksAtom = atom<Link[]>([]);
