import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {
  MatTableModule
} from '@angular/material/table';
import {IColumnsTable} from '../../../../core/engines/table/table-controller';

@Component({
  selector: 'app-table-dynamic',
  imports: [
    MatTableModule
  ],
  standalone: true,
  templateUrl: './table-dynamic.component.html',
  styleUrl: './table-dynamic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDynamicComponent {
  symbol: string = '';
  dataSource =  input.required<string>();
  columns= input.required<IColumnsTable[]>();
  clickRow = output<unknown>()


  // @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() {

  }
  get displayedColumns() {
    if(!this.columns()) {
      return
    }
    return this.columns().map(el => el.keyCol)
  }

  onClick(el: unknown) {
    this.clickRow.emit(el)
  }
}
