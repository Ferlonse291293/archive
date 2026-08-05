import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {environment} from '../../../../../environments/environment';
import {ReqLogin, ResLogin} from './auth-api.interface';
import {Observable} from 'rxjs';
import {IUser} from '../../../../shared/models/interfaces/user.interface';
import {HttpContext} from '@angular/common/http';
import {NO_AUTH} from '../../utils/http-context.tokens';


@Injectable({ providedIn: 'root' })

export class AuthApi {
  private apiService = inject<ApiService>(ApiService)
  constructor() {}

  login(data: ReqLogin): Observable<ResLogin> {
    return  this.apiService.post(`${environment.apiUrl}/auth/login`, data, {
      context: new HttpContext().set(NO_AUTH, true)})
  }

  refresh(): Observable<ResLogin> {
    return this.apiService.post(`${environment.apiUrl}/auth/refresh`, {}, {
      context: new HttpContext().set(NO_AUTH, true) });
  }

  profile(): Observable<IUser> {
    return  this.apiService.get(`${environment.apiUrl}/auth/profile`)
  }

  logout(): Observable<void> {
    return  this.apiService.post(`${environment.apiUrl}/auth/logout`, {})
  }
}
