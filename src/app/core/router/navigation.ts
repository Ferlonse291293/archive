import {RouteNames} from './route-names';
const route = (...paths: string[]) => '/' + paths.join('/');
export const NavLinks = {
  HOME: route(RouteNames.HOME),
} as const;

export type NavLinksKey = keyof typeof NavLinks;



