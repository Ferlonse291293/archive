export interface IMetaPagination {
  page: number,
  pageSize: number,
  totalItems: number,
  totalPages: number,
  hasNextPage: boolean,
  hasPrevPage: boolean,
}
