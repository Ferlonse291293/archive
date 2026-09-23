import {inject, Injectable} from '@angular/core';
import {ApiService} from '../../api/api.service';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {IFile} from '../documents/documents-api.interface';

@Injectable({providedIn: 'root'})


export class FilesApi {
  apiService = inject<ApiService>(ApiService);

 getFileById(id: string): Observable<{url: string}> {
     return this.apiService.get(`${environment.apiUrl}/files/${id}`);
  }


}
