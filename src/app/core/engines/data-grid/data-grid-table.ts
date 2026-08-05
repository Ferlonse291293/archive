import {Signal, signal} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IColumnsTable} from '../table/table-controller';


export interface IDataGridTable{
  columns: Signal<IColumnsTable[]>;
  rowClick$: Observable<unknown>
  columnClick$: Observable<unknown>
  headColClick$: Observable<unknown>
  clickRow(row: unknown)
  clickColumn(col: unknown)
  clickHeadCol(col: unknown)
}


export class DataGridTable implements IDataGridTable{
  columns = signal<IColumnsTable[]>([])
  rowClick$ = new Subject<unknown>();
  columnClick$ = new Subject<unknown>();
  headColClick$ = new Subject<unknown>();


  constructor(columns: IColumnsTable[]) {
    console.log(columns)
    this.columns.set(columns)
  }

  clickRow(row: unknown): void { this.rowClick$.next(row); }
  clickColumn(col: unknown): void  { this.columnClick$.next(col); }
  clickHeadCol(col: unknown): void  { this.headColClick$.next(col); }
}

