import {signal} from '@angular/core';
import {IDataGridRequest} from './data-grid-controller';

export interface IDataGridCache<T,TBody>{
  clear()
  setPage(keyPage: number, items: T[])
  getPage(keyPage: number): T[] | undefined
  setRequestBody(requestBody: IDataGridRequest<TBody> )
  getRequestBody() : IDataGridRequest<TBody>
}

export class DataGridCache<T,TBody>{
  private store = signal<Map<number, T[]>>(new Map());
  private requestBody = signal<IDataGridRequest<TBody>>({} as IDataGridRequest<TBody>);
  clear() {
    this.store.set(new Map())
  }
  setPage(keyPage: number, items: T[]) {
    this.store.update(pV => pV.set(keyPage, items) )
  }
  getPage(keyPage: number): T[] | undefined{
   return  this.store().get(keyPage)
  }

  setRequestBody(requestBody: IDataGridRequest<TBody> ){
    this.requestBody.set(requestBody)
  }

  getRequestBody(){
   return  this.requestBody()
  }
}
