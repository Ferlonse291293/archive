import {
  ChangeDetectionStrategy,
  Component, computed, inject,

} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BreadcrumbService} from '../../core/router/breadcrumb.service';
import {TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterService} from '../../core/services/router.service';


@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  public breadcrumbService = inject(BreadcrumbService)
  private translate = inject(TranslateService);
  private routerService = inject(RouterService)
  breadcrumbs = computed(() => {
   return  this.breadcrumbService.breadcrumbs().map(el =>{
     return {...el, label: this.translate.instant( el.label)}
   } )

  })

  redirectTo(url: string) {
   this.routerService.redirectToUsePath(url)
  }
}
