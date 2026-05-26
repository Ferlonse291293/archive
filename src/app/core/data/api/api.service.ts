import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(
    url: string,
    options?: {
      headers?: HttpHeaders | Record<string, string>;
      params?: HttpParams | Record<string, string | number | boolean>;
      context?: HttpContext;
    }
  ): Observable<T> {
    return this.http.get<T>(url, {
      ...options,
      observe: 'body'
    });
  }

  post<T>(
    url: string,
    body: any,
    options?: {
      headers?: HttpHeaders | Record<string, string>;
      params?: HttpParams | Record<string, string | number | boolean>;
      context?: HttpContext;
    }
  ): Observable<T> {
    return this.http.post<T>(url, body, {
      ...options,
      observe: 'body'
    });
  }

  put<T>(
    url: string,
    body: any,
    options?: {
      headers?: HttpHeaders | Record<string, string>;
      params?: HttpParams | Record<string, string | number | boolean>;
      context?: HttpContext;
    }
  ): Observable<T> {
    return this.http.put<T>(url, body, {
      ...options,
      observe: 'body'
    });
  }

  delete<T>(
    url: string,
    options?: {
      headers?: HttpHeaders | Record<string, string>;
      params?: HttpParams | Record<string, string | number | boolean>;
      context?: HttpContext;
    }
  ): Observable<T> {
    return this.http.delete<T>(url, {
      ...options,
      observe: 'body'
    });
  }
}
