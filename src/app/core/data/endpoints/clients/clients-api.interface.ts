export interface IClient {
  "firstName": string,
  "lastName": string,
  "fullName": string,
  "email": string,
  "phone": string,
  "birthDate": string,
  "nationality": string,
  "passportNumber": string,
  "ipn": string,
  "clientId": string
}


export enum TypeClient {
  INDIVIDUALS = "C01",
  LEGAL_INDIVIDUALS = "C02",
  INDIVIDUALS_ENTREPRENEURS  = "C03"
}


export interface IGetClientsReq{
  page: number;
  limit: number;
  sort: 'asc' | 'desc';
  body: IGetClientsBodyReq
}

export interface IGetClientsBodyReq{
  firstName: string
  lastName: string
  code: string
  ipn: string
  type: string
  department: string
  seriesDoc: string
  numberDoc: string
}

export interface IGetClientsBodyRes{
  "clientId": string
  "fullName": string,
  "code": string,
  "ipn": string,
  "type": string,
  "passportNumber": string,
  "department": string,
  "status": string
}








export interface IGetClientsRes{
  meta: {
      page: number,
      pageSize: number,
      totalItems: number,
      totalPages: number,
      hasNextPage: boolean,
      hasPrevPage: boolean,
  },
  data:  IGetClientsBodyRes[]
}



