import { StaticImageData } from 'next/image';

export type ExecuteScrollType =
  | 'home'
  | 'about'
  | 'services'
  | 'reviews'
  | 'contact';

export type NavbarData = {
  title: string;
  links: { displayName: string; name: string }[];
  logo?: StaticImageData;
};
