import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {environment} from '../../../../../environments/environment';
import {
  IClientIndividualDetail,
  IClientIndividualListItem,
  IClientIndividualsFilter,
  IClientPagination,

  IGetClientsReq,
  TypeClientReq
} from './clients-api.interface';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientsApi {

  private apiService = inject<ApiService>(ApiService)

  private fetchClients<Req, Res>(
    typeClient: TypeClientReq,
    req: IGetClientsReq<Req>
  ): Observable<IClientPagination<Res>> {
    return this.apiService.post(
      `${environment.apiUrl}/clients/${typeClient}?page=${req.page}&limit=${req.limit}&sort=${req.sort}`,
      req.body
    );
  }
  private fetchClient<Res>(typeClient: TypeClientReq, id: string): Observable<Res> {
    return this.apiService.get(`${environment.apiUrl}/clients/${typeClient}/${id}`);
  }
  getIndividualClients(req: IGetClientsReq<IClientIndividualsFilter>): Observable<IClientPagination<IClientIndividualListItem>> {
    return this.fetchClients<IClientIndividualsFilter, IClientIndividualListItem>(TypeClientReq.individuals, req);
  }
  getIndividualClient(id: string): Observable<IClientIndividualDetail> {
    return this.fetchClient<IClientIndividualDetail>(TypeClientReq.individuals, id);
  }
}
