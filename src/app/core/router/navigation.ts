import {APP_ROUTES} from './routes';

const route = (...paths: string[]) => '/' + paths.join('/');
export const NavLinks: Record<string, string> = {
  HOME: route(APP_ROUTES.HOME.link),
  CLIENTS: route(APP_ROUTES.HOME.link,APP_ROUTES.CLIENTS.link),
  CLIENTS_DOCUMENTS: route( APP_ROUTES.HOME.link, APP_ROUTES.CLIENTS.link, APP_ROUTES.CLIENT_DOCUMENTS.link),
  SETTING: route(APP_ROUTES.HOME.link),
  DOCUMENTS: route(APP_ROUTES.HOME.link),
  ANALYTICS: route(APP_ROUTES.HOME.link),
} as const;

export type NavLinksKey = keyof typeof NavLinks;



