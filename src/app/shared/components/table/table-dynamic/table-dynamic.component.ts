import {ChangeDetectionStrategy, Component, computed, input, OnInit, output} from '@angular/core';
import {
  MatTableModule
} from '@angular/material/table';
import {IColumnsTable} from '../../../../core/engines/table/table-controller';
import {TranslatePipe} from '@ngx-translate/core';
import {IDataGridController} from '../../../../core/engines/data-grid/data-grid-controller';
import {IDataGridTable} from '../../../../core/engines/data-grid/data-grid-table';
import {Destroy} from '../../../../core/helpers/destroy';
import {IClientIndividualRow} from '../../../../features/clients/clients-search/clients-search.component';
import {IClientIndividualsFilter} from '../../../../core/data/endpoints/clients/clients-api.interface';

@Component({
  selector: 'app-table-dynamic',
  imports: [
    MatTableModule,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './table-dynamic.component.html',
  styleUrl: './table-dynamic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDynamicComponent extends Destroy implements OnInit{
  symbol: string = '';
  dataGridController = input.required<IDataGridController<IClientIndividualRow, IClientIndividualsFilter>  >();
  clickRow = output<unknown>()
  ngOnInit(): void {
  }

  get table(): IDataGridTable {
    return this.dataGridController().table;
  }

  get columns(): IColumnsTable[] {
    return this.dataGridController().table.columns();
  }

  get displayedColumns() {
    if(!this.columns) {
      return
    }
    return this.columns.map(el => el.keyCol)
  }
}
