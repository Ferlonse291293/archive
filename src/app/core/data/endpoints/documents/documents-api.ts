import {Observable} from 'rxjs';

import {environment} from '../../../../../environments/environment';
import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {IDocumentTree} from './documents-api.interface';


@Injectable({providedIn: 'root'})


export class DocumentsApi {
  private apiService = inject<ApiService>(ApiService)
  getDocumentsTree(id: string): Observable<IDocumentTree>  {
    return this.apiService.get(`${environment.apiUrl}/documents/${id}`)
  }





}


