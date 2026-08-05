import {Component, ChangeDetectionStrategy, inject, Input, OnInit, DestroyRef, effect, Injector} from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { ChangeDetectorRef } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {DataGridPagination, IDataGridPagination} from '../../../../core/engines/data-grid/data-grid-pagination';
import {takeUntil} from 'rxjs';
import {Destroy} from '../../../../core/helpers/destroy';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-paginator',
  imports: [MatPaginatorModule, MatIcon],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  providers: [MatPaginatorIntl],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPaginatorComponent extends  MatPaginator  implements OnInit{
  private destroyRef = inject(DestroyRef);
  private injector = inject(Injector);
  @Input() paginatorController!: IDataGridPagination;


  constructor() {
    super(inject(MatPaginatorIntl), inject(ChangeDetectorRef))
  }

  override  ngOnInit(){
      super.ngOnInit();

      effect(() => {
        this.length = this.paginatorController.length();
        this.pageSize = this.paginatorController.pageSize();
        this.pageIndex = this.paginatorController.currentPage() - 1;
      }, { injector: this.injector });




    this.length = this.paginatorController.length();
    this.pageSize = this.paginatorController.pageSize();
    this.pageIndex = this.paginatorController.currentPage() - 1;
    this.page
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(event => {
        this.paginatorController.onPageChange(event);
        this.paginatorController.currentPage.update(pV => event.pageIndex + 1) ;
        this.paginatorController.pageSize.update(pV =>  event.pageSize) ;
      });
  }


  get pages(): (number | string)[] {
    const tp = this.getNumberOfPages(), c = this.pageIndex + 1;
    if (tp <= 7) return Array.from({ length: tp }, (_, i) => i + 1);
    if (c <= 4) return [1,2,3,4,5,'…',tp];
    if (c >= tp - 3) return [1,'…',tp-4,tp-3,tp-2,tp-1,tp];
    return [1,'…',c-1,c,c+1,'…',tp];
  }

  goTo(page: number) {
    this.pageIndex = page - 1;
    this._changePageSize(this.pageSize); // триггерит page event
  }
}
