import {inject, Injectable} from '@angular/core';
import {ApiService} from '../api/api.service';
import {environment} from '../../../../environments/environment';
import {ReqLogin, ResLogin} from './auth-api.interface';
import {Observable} from 'rxjs';
import {IUser} from '../../../shared/models/interfaces/user.interface';


@Injectable({ providedIn: 'root' })

export class AuthApi {
  private apiService = inject<ApiService>(ApiService)
  constructor() {}

  login(data: ReqLogin): Observable<ResLogin> {
    return  this.apiService.post(`${environment.apiUrl}/auth/login`, data)
  }

  refresh() {
    return this.apiService.post(`${environment.apiUrl}/auth/refresh`, {});
  }

  profile(): Observable<IUser> {
    return  this.apiService.get(`${environment.apiUrl}/auth/profile`)
  }
}
