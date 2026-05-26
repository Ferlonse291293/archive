import {NestedValues} from '../helpers/nested-values.type';

export const SectionsKeys = {
  Auth: {
    login: 'login',
  },

  Clients: {
    searchClient: 'searchClient',
    documentsClient: 'documentsClient',
  },

  Orders: {
    createOrder: 'createOrder',
    listOrders: 'listOrders',
  }
} as const;

export type SectionsKey = NestedValues<typeof SectionsKeys>;
