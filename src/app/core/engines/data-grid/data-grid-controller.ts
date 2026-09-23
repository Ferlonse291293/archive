import { DataSource } from '@angular/cdk/collections';
import {BehaviorSubject, Observable, Subject, takeUntil} from 'rxjs';
import {IDataGridTable} from './data-grid-table';
import {IDataGridPagination} from './data-grid-pagination';
import {IMetaPagination} from '../../model/interfaces/meta-pagination.interface';
import {IDataGridCache} from './data-grid-cache';


export interface IDataGridRequest<TBody = Record<string, unknown>> {
  page: number;
  limit: number;
  sort: 'desc';
  body: TBody;
}

export interface IDataGridController<T, TBody = Record<string, unknown>> {
  table: IDataGridTable;
  paginator: IDataGridPagination;
  init(meta: IMetaPagination , data: T[], bodyReq: {})
  setData(data: T[])
  getData (): T[];
  setMeta(params: IMetaPagination)
  setRequest(request: (req: IDataGridRequest<TBody>) => Promise<IDataGridResponse<T>>): void;
  onRequest(req: IDataGridRequest<TBody>): Promise<IDataGridResponse<T> | undefined>
  resetState(): void
}

export interface IDataGridResponse<T> {
  meta: IMetaPagination
  data: T[]
}




export class DataGridController<T, TBody = Record<string, unknown>> extends DataSource<T> {
  private dataSubject = new BehaviorSubject<T[]>([]);
  public data$ = this.dataSubject.asObservable();

  private request: ((req: IDataGridRequest<TBody>) => Promise<IDataGridResponse<T>>) | null = null;
  private destroy$ = new Subject<void>();
  table: IDataGridTable = {} as IDataGridTable
  paginator: IDataGridPagination = {} as IDataGridPagination
  cache: IDataGridCache<T, TBody > = {} as IDataGridCache<T ,TBody>
  // filters:
  // form:
  constructor(table: IDataGridTable, paginator: IDataGridPagination, cache: IDataGridCache<T ,TBody>) {
    super();
    this.table = table
    this.paginator = paginator
    this.cache = cache
    this.initTrackEvents()
  }

  init(meta: IMetaPagination , data: T[], req: IDataGridRequest<TBody>) {
    console.log('init' ,this.getData())
    this.resetState()
    this.addPage(0, meta, data)
    this.cache.setRequestBody(req)

  }
   private addPage(pageNum: number, meta: IMetaPagination , data: T[]){
    this.setData(data)
    this.setMeta(meta)
    this.cache.setPage(pageNum, data)
  }

  setData( data: T[]){
    this.dataSubject.next(data)
  }

  getData (): T[] {
    return this.dataSubject.getValue()
  }

  setMeta(params: IMetaPagination) {
    this.paginator.setParams({
     pageSize: 10,
     length: params.totalItems,
     currentPage: params.page ,
    })
  }

  connect(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }


  resetState(){
    this.cache.clear()
    this.dataSubject.next([])
  }




  setRequest(request: (req: IDataGridRequest<TBody>) => Promise<IDataGridResponse<T> >) {
    this.request = request;
  }

  async onRequest(req: IDataGridRequest<TBody>): Promise<IDataGridResponse<T> | undefined> {
    if (!this.request) return;
    if (!req) return;
    const res = await this.request(req);
    this.dataSubject.next(res.data);
    return res;
  }

  private initTrackEvents() {
    this.paginator.onPageChange$.pipe(takeUntil(this.destroy$)).subscribe(page => {
    const data: T[] | undefined = this.cache.getPage(page.pageIndex)
      if(data){
        this.setData(data)
        this.paginator.setNewPage(page.pageIndex)
      }
      if(!data){
        let lastReq = this.cache.getRequestBody()
        this.onRequest({... lastReq , page: page.pageIndex}).then( res => {
          this.addPage(page.pageIndex, res!.meta , res!.data)
        })
      }
    })
    this.table.rowClick$.pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res, 'rowClick')
    })
    this.table.headColClick$.pipe(takeUntil(this.destroy$)).subscribe(res => {
      console.log(res, 'headColClick')
    })
  }


  disconnect(): void {
     this.resetState()
  }

}
