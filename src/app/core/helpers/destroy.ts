import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export abstract class Destroy implements OnDestroy {
  protected componentDestroyed: Subject<void> = new Subject<void>();



  ngOnDestroy(): void {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }
}
