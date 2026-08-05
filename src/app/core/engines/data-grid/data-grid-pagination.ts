import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Signal, signal, WritableSignal} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

export interface IDataGridPagination {
  length: WritableSignal<number> ,
  pageSize: WritableSignal<number>,
  onPageChange$: Observable<PageEvent>;
  currentPage: WritableSignal<number>,
  onPageChange(page: PageEvent),
  setParams(params: IPaginationParams),
  setNewPage(page: number)
}
export interface IPaginationParams {
  currentPage: number
  pageSize: number,
  length: number
}
const PaginationDefault: IPaginationParams ={
  currentPage: 0,
  pageSize: 10,
  length: 1
}
export class DataGridPagination implements IDataGridPagination{
  length = signal<number>(PaginationDefault.length)
  pageSize =  signal<number>(PaginationDefault.pageSize)
  currentPage =  signal<number>(PaginationDefault.currentPage)
   cons
  onPageChange$ = new Subject<PageEvent>();

  onPageChange(page: PageEvent) { this.onPageChange$.next(page); }

  setParams(params: IPaginationParams){
    this.pageSize.update(pV => params.pageSize)
    this.length.update(pV => params.length)
    this.currentPage.update(pV => params.currentPage)
  }

  setNewPage(page: number){
    this.currentPage.update(pV => page)
  }


}



