import {
  IClientIndividualDetail,
  IClientIndividualsFilter
} from '../../core/data/endpoints/clients/clients-api.interface';


export interface ClientTypeState<TReq, TClient> {
  lastRequest: Partial<TReq>,
  currentClient: TClient | null,
}

export interface ClientsState {
  individuals: ClientTypeState<IClientIndividualsFilter, IClientIndividualDetail>,
}

const emptyClientTypeState = <TReq, TClient>(): ClientTypeState<TReq, TClient> => ({
  lastRequest: {} as Partial<TReq>,
  currentClient: {} as TClient,
});

export const initialClientsState: ClientsState = {
  individuals: emptyClientTypeState(),
};


