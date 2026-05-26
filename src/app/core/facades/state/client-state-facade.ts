import {Store} from '@ngrx/store';
import {IClient} from '../../data/endpoints/clients/clients-api.interface';
import {ClientsSelectors} from '../../../state/clients/clients.selectors';
import {firstValueFrom, Observable} from 'rxjs';


export interface IClientStateFacade {
  getCurrentUClient$(): Observable<IClient>
  getCurrentUClient(): Promise<IClient>

}

export class ClientStateFacade implements IClientStateFacade{

  constructor(
    private store: Store,
  ) {
  }



  getCurrentUClient$(): Observable<IClient> {
   return  this.store.select(ClientsSelectors.currentClient)
  }

  getCurrentUClient(): Promise<IClient> {
    return firstValueFrom(this.store.select(ClientsSelectors.currentClient))
  }

  getLatsRequest(){
    return firstValueFrom(this.store.select(ClientsSelectors.lastRequest))
  }


}
