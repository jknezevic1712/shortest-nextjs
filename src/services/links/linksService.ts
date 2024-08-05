// utils
import LinkDTO from '@/dtos/link';
import { v7 as uuidv7 } from 'uuid';
import { parseLinks } from '../utils';
// types
import ILinksRepository from '@/repositories/links';
import type { Link } from '@/app/_lib/types/links';

export default class LinksService {
  private _linksRepository: ILinksRepository;

  constructor(linksRepository: ILinksRepository) {
    this._linksRepository = linksRepository;
  }

  async fetchLinks() {
    const links = await this._linksRepository.fetchLinks();

    return parseLinks(links);
  }

  async createLink(originalUrl: string) {
    console.log('??? ', originalUrl);
    const linkDTO = new LinkDTO({
      id: uuidv7(),
      original: originalUrl,
      shortened: '',
    });

    console.log('Create link service action ', linkDTO);

    const links = await this._linksRepository.createLink(linkDTO);

    return parseLinks(links);
  }

  async editLink(link: Link) {
    console.log('Edit link service action ', link);
    const linkDTO = new LinkDTO({
      id: link.id,
      original: link.original,
      shortened: link.shortened,
    });

    const links = await this._linksRepository.editLink(linkDTO);

    return parseLinks(links);
  }

  async deleteLink(link: Link) {
    const linkDTO = new LinkDTO({
      id: link.id,
      original: link.original,
      shortened: link.shortened,
    });

    const links = await this._linksRepository.deleteLink(linkDTO);

    return parseLinks(links);
  }
}
