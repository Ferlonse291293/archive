

export interface IRoute{
  name: string;
  link: string
}
export const APP_ROUTES  : Record<string, IRoute> = {
  AUTH : {name: 'ROUTES.AUTH', link:'auth'} ,
  LOGIN : {name: 'ROUTES.LOGIN', link:'login'} ,

  HOME : {name: 'ROUTES.HOME', link:'home'} ,
  FEATURES_HUB : {name: 'ROUTES.FEATURES_HUB', link:'features-hub'} ,

  ARCHIVE : {name: 'ROUTES.ARCHIVE', link:'archive'} ,

  CLIENTS : {name: 'ROUTES.CLIENTS', link:'clients'} ,
  CLIENTS_SEARCH : {name: 'ROUTES.CLIENTS_SEARCH', link:'clients-search'} ,
  CLIENT_DOCUMENTS: {name: 'ROUTES.CLIENT_DOCUMENTS', link: ':id'},

  DOCUMENTS : {name: 'ROUTES.DOCUMENTS', link:'documents'} ,
  ANALYTICS : {name: 'ROUTES.ANALYTICS', link:'analytics'},
  SETTINGS : {name: 'ROUTES.SETTINGS', link:'settings'}
}
