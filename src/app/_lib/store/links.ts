import { atom } from 'jotai';
import LinkDTO from '@/shared/dtos/link';

export const linksAtom = atom<LinkDTO[]>([]);
