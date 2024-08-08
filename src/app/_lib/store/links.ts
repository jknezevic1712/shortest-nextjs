import { atom } from 'jotai';
// types
import type { Link } from '../types/links';

export const linksAtom = atom<Link[]>([]);
