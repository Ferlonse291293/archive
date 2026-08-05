import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import { IOptionResponse, } from './options-api.interface';

@Injectable({providedIn: "root"})


export class OptionsApi {
  private apiService = inject<ApiService>(ApiService)

  getOptions(): Observable<IOptionResponse> {
    return this.apiService.get(`${environment.apiUrl}/options`)
  }


}
