import LinkDTO from '@/dtos/link';

export function parseLinks(links: LinkDTO[]) {
  const parsedLinks = links.map((link) => link.linkData);
  return parsedLinks;
}
