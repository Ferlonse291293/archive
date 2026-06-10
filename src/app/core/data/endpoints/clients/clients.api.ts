import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {environment} from '../../../../../environments/environment';
import {IClient, IGetClientsReq, IGetClientsRes} from './clients-api.interface';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientsApi {

  private apiService = inject<ApiService>(ApiService)

  getClients(req: IGetClientsReq): Observable<IGetClientsRes> {
    return this.apiService.post(`${environment.apiUrl}/clients?page=${req.page}&limit=${req.limit}&sort=${req.sort}`, req.body)
  }

  getClient(id: string): Observable<IClient>  {
    return this.apiService.get(`${environment.apiUrl}/clients/${id}`)
  }






}
