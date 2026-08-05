export const PAGINATION_SORT = {
  ASC: 'asc',
  DESC: 'desc'
} as const;
export type PAGINATION_SORT = typeof PAGINATION_SORT[keyof typeof PAGINATION_SORT];
