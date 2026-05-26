import {RouteNames} from './route-names';
const route = (...paths: string[]) => '/' + paths.join('/');
export const NavLinks: Record<string, string> = {
  HOME: route(RouteNames.HOME),
  CLIENTS: route(RouteNames.HOME,RouteNames.CLIENTS),
  CLIENTS_DOCUMENTS: route(RouteNames.HOME,RouteNames.CLIENTS,RouteNames.CLIENTS_DOCUMENTS),
} as const;

export type NavLinksKey = keyof typeof NavLinks;



