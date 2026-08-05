import {Store} from '@ngrx/store';
import { IClientIndividualDetail} from '../../data/endpoints/clients/clients-api.interface';
import {ClientsSelectors} from '../../../state/clients/clients.selectors';
import {firstValueFrom, Observable} from 'rxjs';


export interface IClientStateFacade {
  getCurrentIndividualClient$(): Observable<IClientIndividualDetail | null>
  getCurrentIndividualClient(): Promise<IClientIndividualDetail | null>

}

export class ClientStateFacade implements IClientStateFacade{

  constructor(
    private store: Store,
  ) {
  }
  getCurrentIndividualClient$(): Observable<IClientIndividualDetail | null> {
   return  this.store.select(ClientsSelectors.currentIndividualClient)
  }

  getCurrentIndividualClient(): Promise<IClientIndividualDetail | null> {
    return firstValueFrom(this.store.select(ClientsSelectors.currentIndividualClient))
  }

  // getLatsRequest(): Promise<IGetClientIndividualsReq> {
  //   return firstValueFrom(this.store.select(ClientsSelectors.lastIndividualRequest))
  // }


}
