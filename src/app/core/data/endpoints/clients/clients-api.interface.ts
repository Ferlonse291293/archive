import {PAGINATION_SORT} from '../../../model/const/pagination-sort';
import {IOption} from '../options/options-api.interface';

export interface IClient {
  typeClient: TypeClient
  email: string
  phone: string
  clientId: string
  code: string
}

export interface IClientIndividualDetail extends IClient {
  firstName: string
  lastName: string
  fullName: string
  ipn: string
  birthDate: string
  nationality: string
  passportNumber: string
}


export enum TypeClient {
  INDIVIDUALS = "C01",
  LEGAL_ENTITY = "C02",
  SOLE_PROPRIETOR = "C03"
}

export enum TypeClientReq {
  individuals="individuals",
  "legal-entity"="legal-entity",
  "sole-proprietor"="sole-proprietor"
}


export interface IGetClientsReq<T>{
  page: number;
  limit: number;
  sort: PAGINATION_SORT;
  filters?: string
  body: T
}

export interface IClientIndividualListItem {
  clientId: string
  fullName: string
  code: string
  ipn: string
  type: string
  passportNumber: string
  department: IOption
  status: string
}
export interface IClientIndividualsFilter {
  code: string
  department: string
  firstName: string
  ipn: string
  lastName: string
  numberDoc: string
  seriesDoc: string
  type: string
}

interface IMeta {
  page: number,
  pageSize: number,
  totalItems: number,
  totalPages: number,
  hasNextPage: boolean,
  hasPrevPage: boolean,
}
export interface IClientPagination<T>
{
  data: T[],
  meta: IMeta
}



